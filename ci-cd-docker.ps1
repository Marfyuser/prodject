# CI/CD через Docker Compose для локального nginx
# Запуск: ./ci-cd-docker.ps1

Write-Host "=== CI/CD через Docker Compose ===" -ForegroundColor Green

# Останавливаем старый контейнер (если есть)
Write-Host "Останавливаю старый контейнер..." -ForegroundColor Yellow
docker-compose down

# Собираем и запускаем контейнер
Write-Host "Собираю и запускаю контейнер..." -ForegroundColor Yellow
docker-compose up --build -d

Start-Sleep -Seconds 3

# Тестируем доступность сайта
Write-Host "Тестирую сайт на http://localhost:8080 ..." -ForegroundColor Yellow
$response = Invoke-WebRequest -Uri "http://localhost:8080" -UseBasicParsing -ErrorAction SilentlyContinue
if ($response.StatusCode -eq 200) {
    Write-Host "✓ Сайт работает (HTTP 200)" -ForegroundColor Green
} else {
    Write-Host "✗ Ошибка: сайт недоступен или вернул код $($response.StatusCode)" -ForegroundColor Red
    docker-compose logs
    exit 1
}

Write-Host "=== CI/CD через Docker Compose завершен успешно ===" -ForegroundColor Green
Write-Host "Сайт доступен на http://localhost:8080" -ForegroundColor Cyan 