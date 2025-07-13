# Скрипт для синхронизации изменений из Windows в WSL с автоматической вставкой пароля
# Автор: CI/CD Assistant
# Дата: $(Get-Date -Format "yyyy-MM-dd")

Write-Host "=== CI/CD Отладка - Синхронизация в WSL (автоматическая) ===" -ForegroundColor Green

# Пути
$windowsProjectPath = "C:\Users\Administrator\prodject\nginx-site"
$wslProjectPath = "/var/www/local-test"

Write-Host "Синхронизация файлов из Windows в WSL..." -ForegroundColor Yellow
Write-Host "Из: $windowsProjectPath" -ForegroundColor Cyan
Write-Host "В: $wslProjectPath" -ForegroundColor Cyan

# Функция для выполнения команды с автоматической вставкой пароля
function Invoke-WSLWithPassword {
    param(
        [string]$Command,
        [string]$Password = "ubuntu"
    )
    
    # Создаем временный скрипт для expect
    $expectScript = @"
#!/usr/bin/expect -f
set timeout 30
spawn wsl $Command
expect {
    "password for ubuntu:" {
        send "$Password\r"
        expect eof
    }
    eof {
        puts "Command completed without password prompt"
    }
}
wait
"@
    
    $tempExpectFile = "temp-expect-$(Get-Date -Format 'yyyyMMddHHmmss')"
    $expectScript | Out-File -FilePath $tempExpectFile -Encoding UTF8
    
    try {
        # Запускаем expect скрипт
        & expect $tempExpectFile
        $result = $LASTEXITCODE
    } catch {
        Write-Host "Ошибка выполнения expect: $_" -ForegroundColor Red
        $result = 1
    } finally {
        # Удаляем временный файл
        if (Test-Path $tempExpectFile) {
            Remove-Item $tempExpectFile -Force
        }
    }
    
    return $result
}

# Синхронизация файлов
Write-Host "Копирование файлов..." -ForegroundColor Yellow
$copyResult = Invoke-WSLWithPassword "sudo cp -r /mnt/c/Users/Administrator/prodject/nginx-site/* $wslProjectPath/"
if ($copyResult -eq 0) {
    Write-Host "✓ Файлы успешно синхронизированы" -ForegroundColor Green
} else {
    Write-Host "✗ Ошибка при синхронизации файлов" -ForegroundColor Red
    exit 1
}

# Проверка конфигурации nginx
Write-Host "Проверка конфигурации nginx..." -ForegroundColor Yellow
$nginxTestResult = Invoke-WSLWithPassword "sudo nginx -t"
if ($nginxTestResult -eq 0) {
    Write-Host "✓ Конфигурация nginx корректна" -ForegroundColor Green
} else {
    Write-Host "✗ Ошибка в конфигурации nginx" -ForegroundColor Red
    exit 1
}

# Перезагрузка nginx
Write-Host "Перезагрузка nginx..." -ForegroundColor Yellow
$reloadResult = Invoke-WSLWithPassword "sudo systemctl reload nginx"
if ($reloadResult -eq 0) {
    Write-Host "✓ Nginx перезагружен" -ForegroundColor Green
} else {
    Write-Host "✗ Ошибка при перезагрузке nginx" -ForegroundColor Red
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
    $wslIP = wsl hostname -I
    Write-Host "✓ IP адрес WSL: $wslIP" -ForegroundColor Green
    Write-Host "Сайт доступен по адресу: http://$wslIP" -ForegroundColor Cyan
} catch {
    Write-Host "✗ Ошибка при получении IP: $_" -ForegroundColor Red
}

Write-Host "=== Синхронизация завершена успешно ===" -ForegroundColor Green
Write-Host "Теперь можно протестировать изменения локально" -ForegroundColor Yellow
Write-Host "После проверки выполните: git add . && git commit -m 'описание изменений' && git push" -ForegroundColor Cyan 