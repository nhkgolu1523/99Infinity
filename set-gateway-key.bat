@echo off
setlocal EnableDelayedExpansion
title 99Infinity - FamGateway API key (live Worker secret)
cd /d "%~dp0"

rem ==========================================================================
rem  Sets (or rotates) the FamGateway merchant key on the LIVE Worker.
rem
rem    Worker : www    <- the one that serves www.99infinity.workers.dev
rem    Secret : FAMGATEWAY_API_KEY
rem
rem  Without this secret the app has no key, so tapping "Proceed to Pay" on the
rem  phone answers "The payment gateway is not configured yet" (the live
rem  /api/config/rewards returns payments.configured = false).
rem
rem  Needs Node 18+. First run asks for a Cloudflare login (browser tab).
rem  Usage:  set-gateway-key.bat            (worker "www")
rem          set-gateway-key.bat my-worker  (another worker name)
rem ==========================================================================

set "WORKER=%~1"
if "%WORKER%"=="" set "WORKER=www"
set "APP=https://www.99infinity.workers.dev"
set "SECRET=FAMGATEWAY_API_KEY"

echo ============================================================
echo   99Infinity  -  FamGateway API key  (Worker secret)
echo ============================================================
echo.
echo   Worker : %WORKER%
echo   Secret : %SECRET%
echo   App    : %APP%
echo.

where npx >nul 2>nul
if errorlevel 1 (
  echo [X] Node.js / npx not found. Install Node 18+ from nodejs.org, then run this file again.
  echo.
  pause
  exit /b 1
)

echo [1/3] Checking the Cloudflare login...
set "WHO="
for /f "delims=" %%i in ('npx --yes wrangler@latest whoami 2^>^&1') do set "WHO=!WHO! %%i"
echo !WHO! | findstr /i /c:"not authenticated" >nul
if not errorlevel 1 (
  echo       Not logged in. A browser tab will open - approve the login there.
  echo.
  call npx --yes wrangler@latest login
  if errorlevel 1 (
    echo.
    echo [X] Cloudflare login failed. Run this file again when you are online.
    echo.
    pause
    exit /b 1
  )
)

echo.
echo [2/3] Paste the merchant key when asked, then press Enter.
echo       (FamGateway dashboard, API Keys page. Typing stays hidden.)
echo.
call npx --yes wrangler@latest secret put %SECRET% --name %WORKER%
if errorlevel 1 (
  echo.
  echo [X] Could not set the secret. Check the Worker name and the Cloudflare account,
  echo     then run this file again - or set it in the dashboard instead:
  echo     Workers and Pages, choose %WORKER%, Settings, Variables and Secrets.
  echo.
  pause
  exit /b 1
)

echo.
echo [3/3] Checking the live app...
rem delayed expansion is switched off for this line: a stray "!" in a message
rem would otherwise be swallowed by cmd before PowerShell ever sees it
setlocal DisableDelayedExpansion
powershell -NoProfile -Command "try { $r = Invoke-RestMethod -Uri '%APP%/api/config/rewards' -TimeoutSec 30; if ($r.payments.configured) { Write-Host '[OK] payments.configured = true - the QR flow is live.' -ForegroundColor Green } else { Write-Host '[WARN] configured is still false. Open Workers and Pages, choose %WORKER%, open Deployments, click Retry deployment, then run this file again.' -ForegroundColor Yellow } } catch { Write-Host '[WARN] Could not reach the app - check your internet and the URL, then run this file again.' -ForegroundColor Yellow }"
endlocal

echo.
echo Done. On the phone, close the deposit tab and open it again so the page
echo re-reads the gateway status.
echo.
pause
