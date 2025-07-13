# Полный CI/CD скрипт для локального тестирования
# Автор: CI/CD Assistant
# Дата: $(Get-Date -Format "yyyy-MM-dd")

param(
    [string]$CommitMessage = "Обновление сайта - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Write-Host "=== CI/CD Локальное тестирование ===" -ForegroundColor Green
Write-Host "Сообщение коммита: $CommitMessage" -ForegroundColor Cyan

# Шаг 1: Синхронизация в WSL
Write-Host "`n[1/5] Синхронизация изменений в WSL..." -ForegroundColor Yellow
try {
    wsl sudo cp -r /mnt/c/Users/Administrator/prodject/nginx-site/* /var/www/local-test/
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Файлы синхронизированы" -ForegroundColor Green
    } else {
        throw "Ошибка синхронизации"
    }
} catch {
    Write-Host "✗ Ошибка: $_" -ForegroundColor Red
    exit 1
}

# Шаг 2: Проверка конфигурации nginx
Write-Host "`n[2/5] Проверка конфигурации nginx..." -ForegroundColor Yellow
try {
    wsl sudo nginx -t
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Конфигурация корректна" -ForegroundColor Green
    } else {
        throw "Ошибка конфигурации nginx"
    }
} catch {
    Write-Host "✗ Ошибка: $_" -ForegroundColor Red
    exit 1
}

# Шаг 3: Перезагрузка nginx
Write-Host "`n[3/5] Перезагрузка nginx..." -ForegroundColor Yellow
try {
    wsl sudo systemctl reload nginx
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Nginx перезагружен" -ForegroundColor Green
    } else {
        throw "Ошибка перезагрузки nginx"
    }
} catch {
    Write-Host "✗ Ошибка: $_" -ForegroundColor Red
    exit 1
}

# Шаг 4: Тестирование сайта
Write-Host "`n[4/5] Тестирование сайта..." -ForegroundColor Yellow
try {
    Start-Sleep -Seconds 2  # Даем время nginx перезагрузиться
    $response = wsl curl -s -o /dev/null -w "%{http_code}" http://localhost
    if ($response -eq "200") {
        Write-Host "✓ Сайт работает (HTTP 200)" -ForegroundColor Green
    } else {
        throw "Сайт вернул код: $response"
    }
} catch {
    Write-Host "✗ Ошибка: $_" -ForegroundColor Red
    exit 1
}

# Получение IP для тестирования
$wslIP = wsl bash -c "ip addr show eth0 | grep 'inet ' | awk '{print \$2}' | cut -d'/' -f1"
Write-Host "Сайт доступен по адресу: http://$wslIP" -ForegroundColor Cyan

# Шаг 5: Git операции
Write-Host "`n[5/5] Git операции..." -ForegroundColor Yellow

# Проверка статуса git
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "Обнаружены изменения:" -ForegroundColor Yellow
    Write-Host $gitStatus -ForegroundColor Gray
    
    # Добавление файлов
    try {
        git add .
        Write-Host "✓ Файлы добавлены в индекс" -ForegroundColor Green
    } catch {
        Write-Host "✗ Ошибка добавления файлов: $_" -ForegroundColor Red
        exit 1
    }
    
    # Коммит
    try {
        git commit -m $CommitMessage
        Write-Host "✓ Коммит создан: $CommitMessage" -ForegroundColor Green
    } catch {
        Write-Host "✗ Ошибка создания коммита: $_" -ForegroundColor Red
        exit 1
    }
    
    # Push
    try {
        git push
        Write-Host "✓ Изменения отправлены в репозиторий" -ForegroundColor Green
    } catch {
        Write-Host "✗ Ошибка отправки в репозиторий: $_" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Нет изменений для коммита" -ForegroundColor Yellow
}

Write-Host "`n=== CI/CD процесс завершен успешно ===" -ForegroundColor Green
Write-Host "Локальное тестирование пройдено ✓" -ForegroundColor Green
Write-Host "Изменения отправлены в репозиторий ✓" -ForegroundColor Green
Write-Host "Сайт доступен для тестирования: http://$wslIP" -ForegroundColor Cyan 