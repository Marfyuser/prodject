# CI/CD Debug Script for Windows -> WSL Ubuntu
# Автор: CI/CD Assistant
# Описание: Локальная отладка CI/CD с развертыванием на Ubuntu через WSL

Write-Host "🚀 Запуск CI/CD отладки..." -ForegroundColor Green

# Проверяем, что WSL Ubuntu доступен
Write-Host "📋 Проверка доступности WSL Ubuntu..." -ForegroundColor Yellow
$wslStatus = wsl -d Ubuntu-22.04 -e whoami 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ WSL Ubuntu не найден или не запущен!" -ForegroundColor Red
    Write-Host "💡 Убедитесь, что Ubuntu установлен в WSL и запущен" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ WSL Ubuntu доступен: $wslStatus" -ForegroundColor Green

# Создаем временную директорию для проекта в WSL
Write-Host "📁 Создание временной директории в WSL..." -ForegroundColor Yellow
$tempDir = "/tmp/ci-cd-test-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
wsl -d Ubuntu-22.04 -e bash -c "mkdir -p $tempDir"

# Копируем проект в WSL
Write-Host "📋 Копирование проекта в WSL..." -ForegroundColor Yellow
$currentDir = Get-Location
$nginxSitePath = Join-Path $currentDir 'nginx-site'
if (!(Test-Path $nginxSitePath)) {
    Write-Host "❌ Папка nginx-site не найдена по пути: $nginxSitePath" -ForegroundColor Red
    Write-Host "💡 Проверьте структуру проекта и повторите попытку." -ForegroundColor Yellow
    exit 1
}

# Копируем только если папка существует
wsl -d Ubuntu-22.04 -e bash -c "cp -r '$currentDir'/* $tempDir/"

# Устанавливаем nginx в WSL Ubuntu
Write-Host "🔧 Установка и настройка nginx..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "
    # Обновляем пакеты
    sudo apt update -y
    
    # Устанавливаем nginx
    sudo apt install nginx -y
    
    # Останавливаем nginx если запущен
    sudo systemctl stop nginx
    
    # Создаем конфигурацию для нашего сайта
    sudo tee /etc/nginx/sites-available/ci-cd-test << 'EOF'
server {
    listen 80;
    server_name localhost;
    root $tempDir/nginx-site;
    index index.html;
    
    location / {
        try_files \$uri \$uri/ =404;
    }
    
    # Включаем gzip сжатие
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Кэширование статических файлов
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control 'public, immutable';
    }
}
EOF

    # Активируем сайт
    sudo ln -sf /etc/nginx/sites-available/ci-cd-test /etc/nginx/sites-enabled/
    
    # Удаляем дефолтный сайт
    sudo rm -f /etc/nginx/sites-enabled/default
    
    # Проверяем конфигурацию
    sudo nginx -t
    
    # Запускаем nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
"

# Проверяем статус nginx
Write-Host "🔍 Проверка статуса nginx..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "sudo systemctl status nginx --no-pager"

# Получаем IP адрес WSL
Write-Host "🌐 Получение IP адреса WSL..." -ForegroundColor Yellow
$wslIP = wsl -d Ubuntu-22.04 -e hostname -I | ForEach-Object { $_.Trim() }
Write-Host "📍 IP адрес WSL: $wslIP" -ForegroundColor Green

# Тестируем доступность сайта
Write-Host "🧪 Тестирование доступности сайта..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://$wslIP" -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Сайт доступен по адресу: http://$wslIP" -ForegroundColor Green
        Write-Host "📄 Статус ответа: $($response.StatusCode)" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ Ошибка при тестировании сайта: $($_.Exception.Message)" -ForegroundColor Red
}

# Создаем скрипт для остановки тестирования
Write-Host "📝 Создание скрипта остановки..." -ForegroundColor Yellow
$stopScript = @"
# Скрипт остановки CI/CD тестирования
Write-Host '🛑 Остановка CI/CD тестирования...' -ForegroundColor Yellow

# Останавливаем nginx
wsl -d Ubuntu-22.04 -e bash -c 'sudo systemctl stop nginx'

# Удаляем временную директорию
wsl -d Ubuntu-22.04 -e bash -c 'rm -rf $tempDir'

# Удаляем конфигурацию сайта
wsl -d Ubuntu-22.04 -e bash -c 'sudo rm -f /etc/nginx/sites-enabled/ci-cd-test'

Write-Host '✅ CI/CD тестирование остановлено' -ForegroundColor Green
"@

$stopScript | Out-File -FilePath "stop-ci-cd.ps1" -Encoding UTF8

Write-Host "🎉 CI/CD отладка настроена!" -ForegroundColor Green
Write-Host "📋 Информация:" -ForegroundColor Cyan
Write-Host "   🌐 Сайт доступен: http://$wslIP" -ForegroundColor White
Write-Host "   📁 Временная директория: $tempDir" -ForegroundColor White
Write-Host "   🛑 Для остановки запустите: .\stop-ci-cd.ps1" -ForegroundColor White
Write-Host ""
Write-Host "💡 Теперь можете тестировать изменения локально перед git push!" -ForegroundColor Yellow 