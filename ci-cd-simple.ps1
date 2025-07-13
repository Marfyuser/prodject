# Простой CI/CD Debug Script для Windows -> WSL Ubuntu
Write-Host "🚀 Запуск CI/CD отладки..." -ForegroundColor Green

# Проверяем WSL
Write-Host "📋 Проверка WSL Ubuntu..." -ForegroundColor Yellow
$wslStatus = wsl -d Ubuntu-22.04 -e whoami 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ WSL Ubuntu не найден!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ WSL Ubuntu доступен: $wslStatus" -ForegroundColor Green

# Создаем временную директорию
Write-Host "📁 Создание временной директории..." -ForegroundColor Yellow
$tempDir = "/tmp/ci-cd-test-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
wsl -d Ubuntu-22.04 -e bash -c "mkdir -p '$tempDir'"

# Копируем проект
Write-Host "📋 Копирование проекта..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "cp -r /mnt/c/Users/Administrator/prodject/nginx-site '$tempDir/'"

# Устанавливаем nginx
Write-Host "🔧 Установка nginx..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "sudo apt update -y"
wsl -d Ubuntu-22.04 -e bash -c "sudo apt install nginx -y"

# Останавливаем nginx
Write-Host "🛑 Остановка nginx..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "sudo systemctl stop nginx"

# Создаем конфигурацию nginx
Write-Host "⚙️ Создание конфигурации nginx..." -ForegroundColor Yellow
$nginxConfig = @"
server {
    listen 80;
    server_name localhost;
    root $tempDir/nginx-site;
    index index.html;
    
    location / {
        try_files `$uri `$uri/ =404;
    }
    
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control 'public, immutable';
    }
}
"@

# Сохраняем конфигурацию
$nginxConfig | Out-File -FilePath "nginx-config.conf" -Encoding UTF8
wsl -d Ubuntu-22.04 -e bash -c "cp /mnt/c/Users/Administrator/prodject/nginx-config.conf /etc/nginx/sites-available/ci-cd-test"
Remove-Item "nginx-config.conf" -Force

# Активируем сайт
Write-Host "🔗 Активация сайта..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "sudo ln -sf /etc/nginx/sites-available/ci-cd-test /etc/nginx/sites-enabled/"
wsl -d Ubuntu-22.04 -e bash -c "sudo rm -f /etc/nginx/sites-enabled/default"

# Проверяем конфигурацию
Write-Host "🔍 Проверка конфигурации..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "sudo nginx -t"

# Запускаем nginx
Write-Host "🚀 Запуск nginx..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "sudo systemctl start nginx"
wsl -d Ubuntu-22.04 -e bash -c "sudo systemctl enable nginx"

# Проверяем статус
Write-Host "📊 Проверка статуса..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "sudo systemctl status nginx --no-pager"

# Получаем IP
$wslIP = wsl -d Ubuntu-22.04 -e hostname -I | ForEach-Object { $_.Trim() }
Write-Host "📍 IP адрес WSL: $wslIP" -ForegroundColor Green

# Тестируем сайт
Write-Host "🧪 Тестирование сайта..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://$wslIP" -TimeoutSec 10
    Write-Host "✅ Сайт доступен: http://$wslIP" -ForegroundColor Green
} catch {
    Write-Host "❌ Ошибка: $($_.Exception.Message)" -ForegroundColor Red
}

# Создаем скрипт остановки
$stopScript = @"
Write-Host '🛑 Остановка CI/CD...' -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c 'sudo systemctl stop nginx'
wsl -d Ubuntu-22.04 -e bash -c 'rm -rf $tempDir'
wsl -d Ubuntu-22.04 -e bash -c 'sudo rm -f /etc/nginx/sites-enabled/ci-cd-test'
Write-Host '✅ Остановлено' -ForegroundColor Green
"@

$stopScript | Out-File -FilePath "stop-ci-cd.ps1" -Encoding UTF8

Write-Host "🎉 Готово!" -ForegroundColor Green
Write-Host "🌐 Сайт: http://$wslIP" -ForegroundColor Cyan
Write-Host "📁 Директория: $tempDir" -ForegroundColor Cyan
Write-Host "🛑 Остановка: .\stop-ci-cd.ps1" -ForegroundColor Cyan 