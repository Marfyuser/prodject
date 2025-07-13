# Скрипт обновления проекта в WSL для CI/CD отладки
# Автор: CI/CD Assistant
# Описание: Обновляет проект в WSL Ubuntu при изменениях

param(
    [string]$ProjectPath = "nginx-site"
)

Write-Host "🔄 Обновление проекта в WSL..." -ForegroundColor Green

# Проверяем, что WSL Ubuntu доступен
$wslStatus = wsl -d Ubuntu-22.04 -e whoami 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ WSL Ubuntu не найден!" -ForegroundColor Red
    exit 1
}

# Находим временную директорию проекта
Write-Host "🔍 Поиск временной директории проекта..." -ForegroundColor Yellow
$tempDir = wsl -d Ubuntu-22.04 -e bash -c "find /tmp -name 'ci-cd-test-*' -type d | head -1"
if (-not $tempDir) {
    Write-Host "❌ Временная директория не найдена!" -ForegroundColor Red
    Write-Host "💡 Сначала запустите: .\ci-cd-debug.ps1" -ForegroundColor Yellow
    exit 1
}

Write-Host "📁 Найдена директория: $tempDir" -ForegroundColor Green

# Копируем обновленные файлы
Write-Host "📋 Копирование обновленных файлов..." -ForegroundColor Yellow
$currentDir = Get-Location
wsl -d Ubuntu-22.04 -e bash -c "cp -r '$currentDir/$ProjectPath'/* $tempDir/$ProjectPath/"

# Перезапускаем nginx для применения изменений
Write-Host "🔄 Перезапуск nginx..." -ForegroundColor Yellow
wsl -d Ubuntu-22.04 -e bash -c "sudo systemctl reload nginx"

# Получаем IP адрес WSL
$wslIP = wsl -d Ubuntu-22.04 -e hostname -I | ForEach-Object { $_.Trim() }

Write-Host "✅ Проект обновлен!" -ForegroundColor Green
Write-Host "🌐 Сайт доступен: http://$wslIP" -ForegroundColor Cyan
Write-Host "💡 Изменения применены автоматически" -ForegroundColor Yellow 