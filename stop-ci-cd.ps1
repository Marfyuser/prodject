Write-Host '🛑 Остановка CI/CD...' -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c 'sudo systemctl stop nginx'
wsl -d Ubuntu-22.04 -e bash -c 'rm -rf /tmp/ci-cd-test-20250713-005420'
wsl -d Ubuntu-22.04 -e bash -c 'sudo rm -f /etc/nginx/sites-enabled/ci-cd-test'
Write-Host '✅ Остановлено' -ForegroundColor Green
