# CI/CD Локальное тестирование на WSL Ubuntu

## Описание
Система локального тестирования изменений перед отправкой в git репозиторий. Использует WSL Ubuntu с nginx для развертывания и тестирования сайта.

## Архитектура
```
Windows (редактирование) → WSL Ubuntu (тестирование) → Git (деплой)
```

## Компоненты

### 1. WSL Ubuntu
- **IP адрес**: 172.22.18.247
- **Веб-сервер**: nginx
- **Директория сайта**: `/var/www/local-test`
- **Конфигурация**: `/etc/nginx/sites-enabled/local-test.conf`

### 2. Скрипты автоматизации

#### `sync-to-wsl-simple.ps1`
Синхронизация изменений из Windows в WSL с автоматической вставкой пароля sudo.

**Использование:**
```powershell
.\sync-to-wsl-simple.ps1
```

#### `ci-cd-local-test-auto.ps1`
Полный CI/CD процесс с автоматической вставкой пароля: синхронизация → тестирование → git push.

**Использование:**
```powershell
# С автоматическим сообщением коммита
.\ci-cd-local-test-auto.ps1

# С пользовательским сообщением
.\ci-cd-local-test-auto.ps1 -CommitMessage "Добавлена новая функция"
```

#### `sync-to-wsl.ps1` (устаревший)
Синхронизация изменений из Windows в WSL без git операций (требует ручного ввода пароля).

#### `ci-cd-local-test.ps1` (устаревший)
Полный CI/CD процесс (требует ручного ввода пароля).

## Рабочий процесс

### 1. Разработка
1. Редактируйте файлы в папке `nginx-site/`
2. Сохраните изменения

### 2. Локальное тестирование
1. Запустите скрипт синхронизации с автоматической вставкой пароля:
   ```powershell
   .\sync-to-wsl-simple.ps1
   ```
2. Откройте браузер и перейдите по адресу: `http://172.22.18.247`
3. Проверьте функциональность сайта

### 3. Отправка в репозиторий
1. Если тестирование прошло успешно, запустите полный CI/CD с автоматической вставкой пароля:
   ```powershell
   .\ci-cd-local-test-auto.ps1
   ```
2. Скрипт автоматически:
   - Синхронизирует изменения (без запроса пароля)
   - Проверит конфигурацию nginx (без запроса пароля)
   - Перезагрузит веб-сервер (без запроса пароля)
   - Протестирует сайт
   - Создаст коммит и отправит в git

## Структура файлов

```
prodject/
├── nginx-site/           # Исходные файлы сайта
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── lang.js
│   └── nginx.conf
├── sync-to-wsl.ps1       # Скрипт синхронизации
├── ci-cd-local-test.ps1  # Полный CI/CD скрипт
├── local-test.conf       # Конфигурация nginx для WSL
└── CI-CD-LOCAL-README.md # Эта документация
```

## Мониторинг и отладка

### Проверка статуса nginx
```powershell
wsl sudo systemctl status nginx
```

### Просмотр логов nginx
```powershell
wsl sudo tail -f /var/log/nginx/local-test.access.log
wsl sudo tail -f /var/log/nginx/local-test.error.log
```

### Проверка конфигурации
```powershell
wsl sudo nginx -t
```

### Тестирование сайта
```powershell
wsl curl -I http://localhost
```

## Устранение неполадок

### Проблема: nginx не запускается
```powershell
wsl sudo systemctl start nginx
wsl sudo systemctl status nginx
```

### Проблема: ошибка конфигурации
1. Проверьте синтаксис: `wsl sudo nginx -t`
2. Исправьте ошибки в `local-test.conf`
3. Перезагрузите: `wsl sudo systemctl reload nginx`

### Проблема: файлы не синхронизируются
1. Проверьте права доступа в WSL
2. Убедитесь, что папка `/var/www/local-test` существует
3. Запустите: `wsl sudo chown -R www-data:www-data /var/www/local-test`

### Проблема: сайт недоступен
1. Проверьте IP адрес WSL: `wsl ip addr show eth0`
2. Убедитесь, что nginx слушает порт 80: `wsl sudo netstat -tlnp | grep :80`
3. Проверьте файрвол Windows

## Безопасность

### Заголовки безопасности
Сайт настроен с современными заголовками безопасности:
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: no-referrer-when-downgrade
- Content-Security-Policy: default-src 'self' http: https: data: blob: 'unsafe-inline'

### Права доступа
- Файлы сайта: `www-data:www-data`
- Конфигурация nginx: `root:root`

## Производительность

### Оптимизации nginx
- Gzip сжатие включено
- Sendfile оптимизация
- TCP nopush
- Кэширование SSL сессий

### Мониторинг ресурсов
```powershell
wsl top
wsl htop  # если установлен
wsl free -h
```

## Расширение функциональности

### Добавление новых сайтов
1. Создайте новую конфигурацию в `/etc/nginx/sites-available/`
2. Активируйте: `sudo ln -s sites-available/new-site sites-enabled/`
3. Обновите скрипты синхронизации

### Интеграция с Docker
Можно модифицировать для работы с Docker контейнерами вместо прямого nginx.

### Автоматическое тестирование
Добавить интеграционные тесты в скрипты для проверки функциональности сайта.

## Контакты
Для вопросов и предложений по улучшению CI/CD процесса обращайтесь к разработчику. 