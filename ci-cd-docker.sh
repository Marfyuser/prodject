#!/bin/bash
set -e

echo "=== CI/CD через Docker Compose (WSL) ==="

echo "Останавливаю старый контейнер..."
docker-compose down

echo "Собираю и запускаю контейнер..."
docker-compose up --build -d

sleep 3

echo "Тестирую сайт на http://localhost:8080 ..."
status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080)
if [ "$status" = "200" ]; then
  echo "✓ Сайт работает (HTTP 200)"
else
  echo "✗ Ошибка: сайт недоступен или вернул код $status"
  docker-compose logs
  exit 1
fi

echo "=== CI/CD через Docker Compose завершен успешно ==="
echo "Сайт доступен на http://localhost:8080" 