@rem nu "https://github.com/qw3rtman/git-fire"

@echo off
set repoLink=%1
echo %repoLink:~26%
for /f "tokens=3*" %%a in ('reg query "HKEY_CLASSES_ROOT\github-windows\shell\open\command"') do echo %%a
