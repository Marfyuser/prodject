# Мультиязычный сайт: быстрое развертывание

## Описание
Простой статический сайт с поддержкой двух языков (русский и английский), приветствием и возможностью переключения языка. Легко интегрируется в любой проект.

---

## Структура
- `index.html` — главная страница с кнопками переключения языка и приветствием
- `lang.js` — логика переключения языка

---

## Пошаговый гайд: как развернуть сайт с нуля на Ubuntu

1. **Установите nginx на сервер**
   ```sh
   sudo apt update && sudo apt install nginx
   ```

2. **Скопируйте папку сайта на сервер**
   - Например, используйте SCP или SFTP, чтобы скопировать папку `multilang-site` в `/var/www/`:
     ```sh
     scp -r multilang-site user@your-server:/var/www/
     ```
   - Или перенесите файлы любым удобным способом.

3. **Проверьте, что в папке есть файлы `index.html` и `lang.js`**

4. **Создайте конфиг nginx для сайта**
   - Создайте файл `/etc/nginx/sites-available/multilang-site` со следующим содержимым:
     ```nginx
     server {
         listen 80;
         server_name your-domain.com;

         root /var/www/multilang-site;
         index index.html;

         location / {
             try_files $uri $uri/ =404;
         }
     }
     ```
   - Замените `your-domain.com` на ваш домен или IP

5. **Активируйте сайт**
   ```sh
   sudo ln -s /etc/nginx/sites-available/multilang-site /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

6. **Проверьте сайт в браузере**
   - Перейдите по вашему домену или IP — должен открыться сайт с приветствием и кнопками переключения языка.

---

## Пошаговый гайд: как интегрировать этот код в существующий проект

1. **Скопируйте файлы `index.html` и `lang.js` в нужную директорию вашего проекта**
2. **Подключите `lang.js` в вашем HTML**
   - Добавьте строку в `<head>` или перед закрывающимся `</body>`:
     ```html
     <script src="lang.js"></script>
     ```
3. **Добавьте элемент с id="greeting"**
   - Например:
     ```html
     <h1 id="greeting"></h1>
     ```
4. **Добавьте кнопки для переключения языка**
   - Например:
     ```html
     <button onclick="setLanguage('en')">English</button>
     <button onclick="setLanguage('ru')">Русский</button>
     ```
5. **Добавьте новые языки при необходимости**
   - В файле `lang.js` добавьте новые записи в объект `greetings` и соответствующие кнопки.

---

## Пример конфигурации nginx
```
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/multilang-site;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```
- Замените `/var/www/multilang-site` на путь к вашей папке
- Замените `your-domain.com` на ваш домен

---

## Как добавить новый язык
1. Добавьте перевод в объект `greetings` в `lang.js`
2. Добавьте кнопку переключения в `index.html`

---

## Интеграция
- Скопируйте файлы в нужную часть вашего проекта
- Подключите `lang.js` в ваш HTML
- Используйте id="greeting" для блока с приветствием

---

## Пример работы
![](https://i.imgur.com/0yQwQ8B.png)

---

## Контакты
Вопросы — пишите в чат! 