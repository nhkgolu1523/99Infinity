<#
  Activity card art → web-optimised JPEGs.

  The Activity tab cards (and the activity detail hero) render at a 16:9 ratio
  with `object-fit: cover`, so any artwork that is not exactly 16:9 would be
  cropped and the text / game tiles baked into the far edges of these banners
  would be clipped. This script therefore makes every output EXACTLY 16:9:

    * artwork already ~16:9  -> plain high quality downscale
    * artwork taller/shorter -> mirrored + darkened side wings, so the whole
      picture stays visible and the seam is invisible (a mirror is continuous
      at the seam, and the ramp fades into the near-black card background).

  Run:  powershell -ExecutionPolicy Bypass -File tools\make-activity-images.ps1
#>
param(
  [string] $Source  = "$env:USERPROFILE\Desktop\Activity images",
  [string] $Dest    = (Join-Path $PSScriptRoot '..\public\assets\img\activity'),
  [int]    $Width   = 1280,
  [int]    $Height  = 720,
  [int]    $Quality = 88
)

Add-Type -AssemblyName System.Drawing

# source file  ->  output file
$map = [ordered]@{
  'Daily Bonous.png'   = 'daily-bonus.jpg'
  'Lucky Wheel.png'    = 'lucky-wheel.jpg'
  'Super Jackpot.png'  = 'super-jackpot.jpg'
  'Invite Friends.png' = 'invite-friends.jpg'
  'Winning Streek.png' = 'winning-streak.jpg'
  'VIP Wheel.png'      = 'vip-wheel.jpg'
}

$Dest = [System.IO.Path]::GetFullPath($Dest)
New-Item -ItemType Directory -Force -Path $Dest | Out-Null

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }

# high quality attributes: TileFlipXY keeps the edge pixels from smearing in
function New-Attrs {
  $ia = New-Object System.Drawing.Imaging.ImageAttributes
  $ia.SetWrapMode([System.Drawing.Drawing2D.WrapMode]::TileFlipXY)
  return $ia
}

function Set-HQ([System.Drawing.Graphics] $g) {
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  # SourceOver on purpose: the wings are faded with a translucent black gradient,
  # SourceCopy would stamp the gradient's alpha straight into the pixels instead
  $g.CompositingMode    = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
}

function New-Wings([string] $path, [double] $ratio) {
  # Daily Bonus is 1.5:1 while every other banner is 16:9. Cropping it would cut
  # the "Login Every Day" badge and the LUDO/CHESS/... tile row, so instead the
  # sides are extended with a defocused sample of the artwork's own edge pixels
  # (no mirrored duplicates) that then fades into the near-black card background.
  $src  = [System.Drawing.Image]::FromFile($path)
  $srcW = $src.Width
  $srcH = $src.Height
  $wid  = [int][math]::Round($srcH * $ratio)
  $pad  = [int][math]::Round(($wid - $srcW) / 2)
  $canvas = New-Object System.Drawing.Bitmap($wid, $srcH)
  $g = [System.Drawing.Graphics]::FromImage($canvas)
  Set-HQ $g
  $srcRect = [System.Drawing.Rectangle]::new(0, 0, $srcW, $srcH)

  # --- defocused edge samples (downscale = box blur, upscale = smooth fill) ---
  $stripW = [int][math]::Max(8, [math]::Round($srcW * 0.02))
  $bw = 8; $bh = 96
  $blurL = New-Object System.Drawing.Bitmap($bw, $bh)
  $blurR = New-Object System.Drawing.Bitmap($bw, $bh)
  $gL = [System.Drawing.Graphics]::FromImage($blurL); Set-HQ $gL
  $gR = [System.Drawing.Graphics]::FromImage($blurR); Set-HQ $gR
  $gL.DrawImage($src, [System.Drawing.Rectangle]::new(0, 0, $bw, $bh),
    [System.Drawing.Rectangle]::new(0, 0, $stripW, $srcH),
    [System.Drawing.GraphicsUnit]::Pixel)
  $gR.DrawImage($src, [System.Drawing.Rectangle]::new(0, 0, $bw, $bh),
    [System.Drawing.Rectangle]::new($srcW - $stripW, 0, $stripW, $srcH),
    [System.Drawing.GraphicsUnit]::Pixel)
  $gL.Dispose(); $gR.Dispose()
  $g.DrawImage($blurL, [System.Drawing.Rectangle]::new(0, 0, $pad, $srcH),
    [System.Drawing.Rectangle]::new(0, 0, $bw, $bh), [System.Drawing.GraphicsUnit]::Pixel)
  $g.DrawImage($blurR, [System.Drawing.Rectangle]::new($pad + $srcW, 0, $pad, $srcH),
    [System.Drawing.Rectangle]::new(0, 0, $bw, $bh), [System.Drawing.GraphicsUnit]::Pixel)
  $blurL.Dispose(); $blurR.Dispose()

  # --- the artwork itself, untouched, centred ---
  $centreDst = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new($pad, 0),
    [System.Drawing.PointF]::new($pad + $srcW, 0),
    [System.Drawing.PointF]::new($pad, $srcH))
  $ia = New-Attrs
  $g.DrawImage($src, $centreDst, [System.Drawing.RectangleF]::new(0, 0, $srcW, $srcH),
    [System.Drawing.GraphicsUnit]::Pixel, $ia)

  # --- fade both sides so the card reads as one full-bleed banner ---
  $mode = [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
  $dark = [System.Drawing.Color]::FromArgb(200, 0, 0, 0)
  $none = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
  $bL = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList @(
    ([System.Drawing.Rectangle]::new(0, 0, $pad, $srcH)), $dark, $none, $mode)
  $bR = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList @(
    ([System.Drawing.Rectangle]::new($pad + $srcW, 0, $pad, $srcH)), $none, $dark, $mode)
  $g.FillRectangle($bL, [System.Drawing.Rectangle]::new(0, 0, $pad, $srcH))
  $g.FillRectangle($bR, [System.Drawing.Rectangle]::new($pad + $srcW, 0, $pad, $srcH))
  $bL.Dispose(); $bR.Dispose()
  $ia.Dispose(); $g.Dispose(); $src.Dispose()
  return $canvas
}

$results = @()
foreach ($k in $map.Keys) {
  $in  = Join-Path $Source $k
  $out = Join-Path $Dest ($map[$k])
  if (-not (Test-Path -LiteralPath $in)) { Write-Host "[skip] missing $k" -ForegroundColor Yellow; continue }

  $img = [System.Drawing.Image]::FromFile($in)
  $ratio = $Width / $Height
  $tmp = $null
  if ([math]::Abs(($img.Width / $img.Height) - $ratio) -gt 0.01) {
    $srcPath = $in
    $img.Dispose()
    $tmp = New-Wings $srcPath $ratio             # -> 16:9 canvas, nothing cut
    $img = $tmp
  }

  $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  Set-HQ $g
  $ia = New-Attrs
  # 3-point (top-left, top-right, bottom-left) parallelogram mapping — the only
  # Rectangle-with-ImageAttributes overload is the PointF one
  $dstPts = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new(0, 0),
    [System.Drawing.PointF]::new($Width, 0),
    [System.Drawing.PointF]::new(0, $Height))
  $srcRect = [System.Drawing.RectangleF]::new(0, 0, $img.Width, $img.Height)
  $g.DrawImage($img, $dstPts, $srcRect, [System.Drawing.GraphicsUnit]::Pixel, $ia)
  $ia.Dispose(); $g.Dispose()

  $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, [int]$Quality)
  $bmp.Save($out, $jpegCodec, $ep)
  $ep.Dispose(); $bmp.Dispose(); $img.Dispose()

  $kb = [math]::Round((Get-Item -LiteralPath $out).Length / 1KB)
  $results += [pscustomobject]@{ Output = $map[$k]; Size = "${Width}x${Height}"; KB = $kb }
}

$results | Format-Table -AutoSize
"total: {0} KB" -f ($results | Measure-Object KB -Sum).Sum

# NOTE — no square thumbs here on purpose.
# The 2-up home-page tiles and the promotion tiles keep their own small square
# icons (`activity/bonus.png`, `activity/wheel.png`, 103x82): those slots paint
# into a ~72px box, and a wide banner cropped to a square looked like a cut-off
# photo there. The 16:9 art is for the Activity tab cards + detail hero only.
# Need art for another slot? Crop it by hand rather than reusing the banner.
