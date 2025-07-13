# Скрипт остановки CI/CD тестирования
Write-Host '🛑 Остановка CI/CD тестирования...' -ForegroundColor Yellow

# Останавливаем nginx
wsl -d Ubuntu-22.04 -e bash -c 'sudo systemctl stop nginx'

# Удаляем временную директорию
wsl -d Ubuntu-22.04 -e bash -c 'rm -rf /tmp/ci-cd-test-20250713-131726'

# Удаляем конфигурацию сайта
wsl -d Ubuntu-22.04 -e bash -c 'sudo rm -f /etc/nginx/sites-enabled/ci-cd-test'

Write-Host '✅ CI/CD тестирование остановлено' -ForegroundColor Green
