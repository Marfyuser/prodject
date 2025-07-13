# Скрипт для синхронизации изменений из Windows в WSL для CI/CD отладки
# Автор: CI/CD Assistant
# Дата: $(Get-Date -Format "yyyy-MM-dd")

Write-Host "=== CI/CD Отладка - Синхронизация в WSL ===" -ForegroundColor Green

# Пути
$windowsProjectPath = "C:\Users\Administrator\prodject\nginx-site"
$wslProjectPath = "/var/www/local-test"

Write-Host "Синхронизация файлов из Windows в WSL..." -ForegroundColor Yellow
Write-Host "Из: $windowsProjectPath" -ForegroundColor Cyan
Write-Host "В: $wslProjectPath" -ForegroundColor Cyan

# Синхронизация файлов
try {
    wsl sudo cp -r /mnt/c/Users/Administrator/prodject/nginx-site/* $wslProjectPath/
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Файлы успешно синхронизированы" -ForegroundColor Green
    } else {
        Write-Host "✗ Ошибка при синхронизации файлов" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "✗ Ошибка: $_" -ForegroundColor Red
    exit 1
}

# Проверка конфигурации nginx
Write-Host "Проверка конфигурации nginx..." -ForegroundColor Yellow
try {
    wsl sudo nginx -t
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Конфигурация nginx корректна" -ForegroundColor Green
    } else {
        Write-Host "✗ Ошибка в конфигурации nginx" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "✗ Ошибка: $_" -ForegroundColor Red
    exit 1
}

# Перезагрузка nginx
Write-Host "Перезагрузка nginx..." -ForegroundColor Yellow
try {
    wsl sudo systemctl reload nginx
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Nginx перезагружен" -ForegroundColor Green
    } else {
        Write-Host "✗ Ошибка при перезагрузке nginx" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "✗ Ошибка: $_" -ForegroundColor Red
    exit 1
}

# Тестирование сайта
Write-Host "Тестирование сайта..." -ForegroundColor Yellow
try {
    $response = wsl curl -s -o /dev/null -w "%{http_code}" http://localhost
    if ($response -eq "200") {
        Write-Host "✓ Сайт работает корректно (HTTP 200)" -ForegroundColor Green
    } else {
        Write-Host "✗ Сайт вернул код: $response" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "✗ Ошибка при тестировании: $_" -ForegroundColor Red
    exit 1
}

# Получение IP адреса WSL
Write-Host "Получение IP адреса WSL..." -ForegroundColor Yellow
try {
    $wslIP = wsl bash -c "ip addr show eth0 | grep 'inet ' | awk '{print \$2}' | cut -d'/' -f1"
    Write-Host "✓ IP адрес WSL: $wslIP" -ForegroundColor Green
    Write-Host "Сайт доступен по адресу: http://$wslIP" -ForegroundColor Cyan
} catch {
    Write-Host "✗ Ошибка при получении IP: $_" -ForegroundColor Red
}

Write-Host "=== Синхронизация завершена успешно ===" -ForegroundColor Green
Write-Host "Теперь можно протестировать изменения локально" -ForegroundColor Yellow
Write-Host "После проверки выполните: git add . && git commit -m 'описание изменений' && git push" -ForegroundColor Cyan 