@echo off
title 99Infinity - Auto Push
cd /d "%~dp0"

echo ==========================================
echo   99Infinity  -  Auto Git Push
echo ==========================================
echo.

git add -A

git diff --cached --quiet
if %errorlevel%==0 (
    echo [i] Koi naya change nahi mila - commit skip.
) else (
    echo [i] Changes commit ho rahe hain...
    git commit -m "Auto push %date% %time%"
)

echo.
echo [i] GitHub pe push ho raha hai...
git push origin main
if %errorlevel%==0 (
    echo.
    echo [OK] Push successful!
) else (
    echo.
    echo [X] Push FAILED - internet / git login check karo.
)

echo.
pause
