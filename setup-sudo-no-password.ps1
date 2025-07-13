# Скрипт для настройки sudo без пароля для CI/CD команд
# Автор: CI/CD Assistant

Write-Host "=== Настройка sudo без пароля ===" -ForegroundColor Green

# Создаем конфигурацию sudoers
$sudoersContent = @"
# Конфигурация sudoers для пользователя ubuntu
# Разрешает выполнение команд nginx и cp без ввода пароля

ubuntu ALL=(ALL) NOPASSWD: /usr/sbin/nginx
ubuntu ALL=(ALL) NOPASSWD: /bin/cp
ubuntu ALL=(ALL) NOPASSWD: /usr/bin/cp
ubuntu ALL=(ALL) NOPASSWD: /bin/systemctl
ubuntu ALL=(ALL) NOPASSWD: /usr/bin/systemctl
ubuntu ALL=(ALL) NOPASSWD: /bin/mkdir
ubuntu ALL=(ALL) NOPASSWD: /usr/bin/mkdir
ubuntu ALL=(ALL) NOPASSWD: /bin/rm
ubuntu ALL=(ALL) NOPASSWD: /usr/bin/rm
ubuntu ALL=(ALL) NOPASSWD: /bin/ln
ubuntu ALL=(ALL) NOPASSWD: /usr/bin/ln
ubuntu ALL=(ALL) NOPASSWD: /bin/chown
ubuntu ALL=(ALL) NOPASSWD: /usr/bin/chown
ubuntu ALL=(ALL) NOPASSWD: /bin/chmod
ubuntu ALL=(ALL) NOPASSWD: /usr/bin/chmod
"@

Write-Host "Создание конфигурации sudoers..." -ForegroundColor Yellow

# Создаем временный файл
$tempFile = "temp-sudoers-$(Get-Date -Format 'yyyyMMddHHmmss')"
$sudoersContent | Out-File -FilePath $tempFile -Encoding UTF8

try {
    # Копируем файл в WSL
    wsl sudo cp /mnt/c/Users/Administrator/prodject/$tempFile /etc/sudoers.d/ubuntu-nginx
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Конфигурация sudoers создана" -ForegroundColor Green
    } else {
        throw "Ошибка копирования файла"
    }
    
    # Устанавливаем правильные права
    wsl sudo chmod 440 /etc/sudoers.d/ubuntu-nginx
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Права доступа установлены" -ForegroundColor Green
    } else {
        throw "Ошибка установки прав"
    }
    
    # Проверяем синтаксис
    wsl sudo visudo -c -f /etc/sudoers.d/ubuntu-nginx
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Синтаксис sudoers корректен" -ForegroundColor Green
    } else {
        throw "Ошибка синтаксиса sudoers"
    }
    
    Write-Host "✓ Настройка sudo без пароля завершена успешно!" -ForegroundColor Green
    Write-Host "Теперь команды nginx и cp можно выполнять без ввода пароля" -ForegroundColor Cyan
    
} catch {
    Write-Host "✗ Ошибка: $_" -ForegroundColor Red
    Write-Host "Удаление временного файла..." -ForegroundColor Yellow
} finally {
    # Удаляем временный файл
    if (Test-Path $tempFile) {
        Remove-Item $tempFile -Force
        Write-Host "✓ Временный файл удален" -ForegroundColor Green
    }
}

Write-Host "`n=== Тестирование настроек ===" -ForegroundColor Green

# Тестируем команды без пароля
Write-Host "Тестирование команды nginx -t..." -ForegroundColor Yellow
try {
    wsl sudo nginx -t
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Команда nginx работает без пароля" -ForegroundColor Green
    } else {
        Write-Host "✗ Команда nginx требует пароль" -ForegroundColor Red
    }
} catch {
    Write-Host "✗ Ошибка тестирования nginx: $_" -ForegroundColor Red
}

Write-Host "Тестирование команды systemctl..." -ForegroundColor Yellow
try {
    wsl sudo systemctl status nginx --no-pager
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Команда systemctl работает без пароля" -ForegroundColor Green
    } else {
        Write-Host "✗ Команда systemctl требует пароль" -ForegroundColor Red
    }
} catch {
    Write-Host "✗ Ошибка тестирования systemctl: $_" -ForegroundColor Red
}

Write-Host "`n=== Настройка завершена ===" -ForegroundColor Green 