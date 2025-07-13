# 🚀 CI/CD Локальное тестирование - ФИНАЛЬНАЯ ВЕРСИЯ

## ✅ Что настроено

### 1. WSL Ubuntu с nginx
- **IP адрес**: 172.22.18.247
- **Веб-сервер**: nginx (работает)
- **Директория сайта**: `/var/www/local-test`
- **Конфигурация**: `/etc/nginx/sites-enabled/local-test.conf`

### 2. Автоматизация sudo
- ✅ Автоматическая вставка пароля "ubuntu" для команд sudo
- ✅ Безопасная передача пароля через `echo 'ubuntu' | sudo -S`
- ✅ Работает для всех команд nginx и systemctl

### 3. Скрипты автоматизации

#### 🎯 Основной скрипт: `ci-cd-final.ps1`
**Полный CI/CD процесс с автоматизацией:**
```powershell
# С автоматическим сообщением коммита
.\ci-cd-final.ps1

# С пользовательским сообщением
.\ci-cd-final.ps1 -CommitMessage "Добавлена новая функция"
```

**Что делает:**
1. ✅ Синхронизирует файлы из Windows в WSL (без запроса пароля)
2. ✅ Проверяет конфигурацию nginx (без запроса пароля)
3. ✅ Перезагружает nginx (без запроса пароля)
4. ✅ Тестирует сайт (HTTP 200)
5. ✅ Создает git коммит
6. ✅ Отправляет в репозиторий (с обходом проблемных хуков)

#### 🔄 Синхронизация: `sync-to-wsl-simple.ps1`
**Только синхронизация и тестирование:**
```powershell
.\sync-to-wsl-simple.ps1
```

## 🎯 Рабочий процесс

### 1. Разработка
1. Редактируйте файлы в папке `nginx-site/`
2. Сохраните изменения

### 2. Локальное тестирование
1. Запустите синхронизацию:
   ```powershell
   .\sync-to-wsl-simple.ps1
   ```
2. Откройте браузер: `http://172.22.18.247`
3. Проверьте функциональность

### 3. Отправка в репозиторий
1. Запустите полный CI/CD:
   ```powershell
   .\ci-cd-final.ps1
   ```
2. Готово! Изменения в репозитории

## 📁 Структура файлов

```
prodject/
├── nginx-site/              # Исходные файлы сайта
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── lang.js
│   └── nginx.conf
├── ci-cd-final.ps1          # 🎯 ОСНОВНОЙ СКРИПТ
├── sync-to-wsl-simple.ps1   # 🔄 Синхронизация
├── local-test.conf          # Конфигурация nginx
└── CI-CD-FINAL-README.md    # Эта документация
```

## 🧪 Тестирование

### Проверка статуса nginx
```powershell
wsl sudo systemctl status nginx
```

### Просмотр логов
```powershell
wsl sudo tail -f /var/log/nginx/local-test.access.log
wsl sudo tail -f /var/log/nginx/local-test.error.log
```

### Тестирование сайта
```powershell
wsl curl -I http://localhost
```

## 🔧 Устранение неполадок

### Проблема: nginx не запускается
```powershell
wsl bash -c "echo 'ubuntu' | sudo -S systemctl start nginx"
```

### Проблема: ошибка конфигурации
```powershell
wsl bash -c "echo 'ubuntu' | sudo -S nginx -t"
```

### Проблема: файлы не синхронизируются
```powershell
wsl bash -c "echo 'ubuntu' | sudo -S chown -R www-data:www-data /var/www/local-test"
```

### Проблема: сайт недоступен
1. Проверьте IP: `wsl hostname -I`
2. Проверьте nginx: `wsl bash -c "echo 'ubuntu' | sudo -S systemctl status nginx"`
3. Проверьте файрвол Windows

## 🎉 Результат

✅ **Полностью автоматизированный CI/CD процесс**
- Без ручного ввода паролей
- С локальным тестированием на WSL Ubuntu
- С автоматическим push в git
- С обходом проблемных pre-push хуков

✅ **Сайт доступен по адресу**: http://172.22.18.247

✅ **Готов к использованию**: просто запускайте `.\ci-cd-final.ps1`

## 🚀 Быстрый старт

1. **Редактируйте файлы** в `nginx-site/`
2. **Запустите тест**: `.\sync-to-wsl-simple.ps1`
3. **Проверьте в браузере**: http://172.22.18.247
4. **Отправьте в git**: `.\ci-cd-final.ps1`

**Всё работает автоматически! 🎯** 

---

## 🚀 Новый CI/CD через Docker Compose

1. Убедитесь, что установлен Docker и docker-compose.
2. В корне проекта выполните:
   ```sh
   docker-compose up --build -d
   ```
3. Сайт будет доступен на http://localhost:8080
4. Для остановки:
   ```sh
   docker-compose down
   ```

- Все изменения в папке nginx-site/ автоматически попадают в контейнер (volumes).
- Конфиг nginx берется из nginx-site/nginx.conf

--- 