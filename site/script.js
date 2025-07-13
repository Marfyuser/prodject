// Sample articles data
const articles = [
    {
        id: 1,
        title: {
            en: "Getting Started with React",
            ru: "Начало работы с React"
        },
        excerpt: {
            en: "Learn the basics of React development and build your first component",
            ru: "Изучите основы разработки на React и создайте свой первый компонент"
        },
        content: {
            en: `
<h2>Getting Started with React (Beginner, 5 min)</h2>
<p><b>React</b> is a popular JavaScript library for building user interfaces. Let's create your first React app in just 5 minutes!</p>
<ol>
  <li><b>Install Node.js</b> (if not installed):<br><code>https://nodejs.org/</code></li>
  <li><b>Open terminal and run:</b><br><code>npx create-react-app my-app</code></li>
  <li><b>Go to the project folder:</b><br><code>cd my-app</code></li>
  <li><b>Start the development server:</b><br><code>npm start</code></li>
  <li>Open <code>src/App.js</code> and change the text. Save and see changes live!</li>
</ol>
<p>Congratulations! 🎉 You just launched your first React app. Explore the <a href="https://react.dev/" target="_blank">official docs</a> for more.</p>
`,
            ru: `
<h2>Начало работы с React (Простой уровень, 5 минут)</h2>
<p><b>React</b> — популярная библиотека JavaScript для создания интерфейсов. Давайте создадим первое React-приложение всего за 5 минут!</p>
<ol>
  <li><b>Установите Node.js</b> (если не установлен):<br><code>https://nodejs.org/</code></li>
  <li><b>Откройте терминал и выполните:</b><br><code>npx create-react-app my-app</code></li>
  <li><b>Перейдите в папку проекта:</b><br><code>cd my-app</code></li>
  <li><b>Запустите сервер разработки:</b><br><code>npm start</code></li>
  <li>Откройте <code>src/App.js</code> и измените текст. Сохраните — увидите изменения сразу!</li>
</ol>
<p>Поздравляем! 🎉 Вы только что запустили своё первое React-приложение. Изучайте <a href="https://ru.react.dev/" target="_blank">официальную документацию</a> для большего.</p>
`
        },
        category: "programming",
        icon: "fab fa-react",
        date: "2024-01-15",
        readTime: "5 min"
    },
    {
        id: 2,
        title: {
            en: "Docker for Beginners",
            ru: "Docker для начинающих"
        },
        excerpt: {
            en: "Containerize your applications with Docker",
            ru: "Контейнеризируйте ваши приложения с помощью Docker"
        },
        category: "devops",
        icon: "fab fa-docker",
        date: "2024-01-10",
        readTime: "8 min"
    },
    {
        id: 3,
        title: {
            en: "Python Web Development",
            ru: "Веб-разработка на Python"
        },
        excerpt: {
            en: "Build web applications with Python and Flask",
            ru: "Создавайте веб-приложения с Python и Flask"
        },
        category: "programming",
        icon: "fab fa-python",
        date: "2024-01-05",
        readTime: "10 min"
    },
    {
        id: 4,
        title: {
            en: "Git Best Practices",
            ru: "Лучшие практики Git"
        },
        excerpt: {
            en: "Master version control with Git",
            ru: "Освойте систему контроля версий Git"
        },
        category: "tutorials",
        icon: "fab fa-git-alt",
        date: "2024-01-01",
        readTime: "6 min"
    },
    {
        id: 5,
        title: {
            en: "JavaScript ES6+ Features",
            ru: "Возможности JavaScript ES6+"
        },
        excerpt: {
            en: "Modern JavaScript features you need to know",
            ru: "Современные возможности JavaScript, которые нужно знать"
        },
        category: "programming",
        icon: "fab fa-js-square",
        date: "2023-12-28",
        readTime: "7 min"
    },
    {
        id: 6,
        title: {
            en: "Database Design Principles",
            ru: "Принципы проектирования баз данных"
        },
        excerpt: {
            en: "Learn how to design efficient databases",
            ru: "Узнайте, как проектировать эффективные базы данных"
        },
        category: "tutorials",
        icon: "fas fa-database",
        date: "2023-12-25",
        readTime: "12 min"
    },
    {
        id: 7,
        title: {
            en: "Getting Started with Node.js",
            ru: "Начало работы с Node.js"
        },
        excerpt: {
            en: "Create your first Node.js server in minutes",
            ru: "Создайте свой первый Node.js сервер за минуты"
        },
        content: {
            en: `
<h2>Getting Started with Node.js (Beginner, 3 min)</h2>
<p><b>Node.js</b> is a JavaScript runtime that allows you to run JavaScript on the server. Let's create a simple web server!</p>
<ol>
  <li><b>Install Node.js</b> (if not installed):<br><code>https://nodejs.org/</code></li>
  <li><b>Create a new folder and navigate to it:</b><br><code>mkdir my-node-app && cd my-node-app</code></li>
  <li><b>Initialize a new project:</b><br><code>npm init -y</code></li>
  <li><b>Create a file called server.js:</b><br><code>touch server.js</code></li>
  <li><b>Add this code to server.js:</b><br>
<pre><code>const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});</code></pre></li>
  <li><b>Run your server:</b><br><code>node server.js</code></li>
</ol>
<p>🎉 Your first Node.js server is running! Visit <code>http://localhost:3000</code> to see it in action.</p>
`,
            ru: `
<h2>Начало работы с Node.js (Простой уровень, 3 минуты)</h2>
<p><b>Node.js</b> — это среда выполнения JavaScript, которая позволяет запускать JavaScript на сервере. Давайте создадим простой веб-сервер!</p>
<ol>
  <li><b>Установите Node.js</b> (если не установлен):<br><code>https://nodejs.org/</code></li>
  <li><b>Создайте новую папку и перейдите в неё:</b><br><code>mkdir my-node-app && cd my-node-app</code></li>
  <li><b>Инициализируйте новый проект:</b><br><code>npm init -y</code></li>
  <li><b>Создайте файл server.js:</b><br><code>touch server.js</code></li>
  <li><b>Добавьте этот код в server.js:</b><br>
<pre><code>const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});</code></pre></li>
  <li><b>Запустите сервер:</b><br><code>node server.js</code></li>
</ol>
<p>🎉 Ваш первый Node.js сервер запущен! Перейдите на <code>http://localhost:3000</code> чтобы увидеть его в действии.</p>
`
        },
        category: "programming",
        icon: "fab fa-node-js",
        date: "2024-01-20",
        readTime: "3 min"
    },
    {
        id: 8,
        title: {
            en: "Quick Start with Git",
            ru: "Быстрый старт с Git"
        },
        excerpt: {
            en: "Set up Git and create your first repository",
            ru: "Настройте Git и создайте свой первый репозиторий"
        },
        content: {
            en: `
<h2>Quick Start with Git (Beginner, 4 min)</h2>
<p><b>Git</b> is a version control system that helps you track changes in your code. Let's get started!</p>
<ol>
  <li><b>Install Git</b> (if not installed):<br><code>https://git-scm.com/</code></li>
  <li><b>Configure your identity:</b><br>
<code>git config --global user.name "Your Name"</code><br>
<code>git config --global user.email "your.email@example.com"</code></li>
  <li><b>Create a new folder for your project:</b><br><code>mkdir my-project && cd my-project</code></li>
  <li><b>Initialize a Git repository:</b><br><code>git init</code></li>
  <li><b>Create a file and add it to Git:</b><br>
<code>echo "Hello World!" > README.md</code><br>
<code>git add README.md</code></li>
  <li><b>Make your first commit:</b><br><code>git commit -m "Initial commit"</code></li>
</ol>
<p>🎉 Congratulations! You've created your first Git repository. Use <code>git status</code> to check the state of your files.</p>
`,
            ru: `
<h2>Быстрый старт с Git (Простой уровень, 4 минуты)</h2>
<p><b>Git</b> — это система контроля версий, которая помогает отслеживать изменения в коде. Давайте начнём!</p>
<ol>
  <li><b>Установите Git</b> (если не установлен):<br><code>https://git-scm.com/</code></li>
  <li><b>Настройте свою личность:</b><br>
<code>git config --global user.name "Ваше Имя"</code><br>
<code>git config --global user.email "your.email@example.com"</code></li>
  <li><b>Создайте новую папку для проекта:</b><br><code>mkdir my-project && cd my-project</code></li>
  <li><b>Инициализируйте Git репозиторий:</b><br><code>git init</code></li>
  <li><b>Создайте файл и добавьте его в Git:</b><br>
<code>echo "Hello World!" > README.md</code><br>
<code>git add README.md</code></li>
  <li><b>Сделайте первый коммит:</b><br><code>git commit -m "Initial commit"</code></li>
</ol>
<p>🎉 Поздравляем! Вы создали свой первый Git репозиторий. Используйте <code>git status</code> для проверки состояния файлов.</p>
`
        },
        category: "tutorials",
        icon: "fab fa-git-alt",
        date: "2024-01-18",
        readTime: "4 min"
    },
    {
        id: 9,
        title: {
            en: "Docker First Container",
            ru: "Первый контейнер Docker"
        },
        excerpt: {
            en: "Run your first Docker container in 2 minutes",
            ru: "Запустите свой первый Docker контейнер за 2 минуты"
        },
        content: {
            en: `
<h2>Docker First Container (Beginner, 2 min)</h2>
<p><b>Docker</b> allows you to package applications with their dependencies. Let's run your first container!</p>
<ol>
  <li><b>Install Docker</b> (if not installed):<br><code>https://docker.com/</code></li>
  <li><b>Start Docker Desktop</b> (Windows/Mac) or Docker service (Linux)</li>
  <li><b>Run your first container:</b><br><code>docker run hello-world</code></li>
  <li><b>Run a web server container:</b><br><code>docker run -p 8080:80 nginx</code></li>
  <li>Open your browser and go to <code>http://localhost:8080</code></li>
</ol>
<p>🎉 You just ran your first Docker containers! The nginx container is serving a web page on port 8080.</p>
<p><b>Stop the container:</b> Press Ctrl+C in the terminal where you ran the nginx command.</p>
`,
            ru: `
<h2>Первый контейнер Docker (Простой уровень, 2 минуты)</h2>
<p><b>Docker</b> позволяет упаковывать приложения вместе с их зависимостями. Давайте запустим ваш первый контейнер!</p>
<ol>
  <li><b>Установите Docker</b> (если не установлен):<br><code>https://docker.com/</code></li>
  <li><b>Запустите Docker Desktop</b> (Windows/Mac) или Docker service (Linux)</li>
  <li><b>Запустите первый контейнер:</b><br><code>docker run hello-world</code></li>
  <li><b>Запустите контейнер веб-сервера:</b><br><code>docker run -p 8080:80 nginx</code></li>
  <li>Откройте браузер и перейдите на <code>http://localhost:8080</code></li>
</ol>
<p>🎉 Вы только что запустили свои первые Docker контейнеры! Контейнер nginx обслуживает веб-страницу на порту 8080.</p>
<p><b>Остановить контейнер:</b> Нажмите Ctrl+C в терминале, где запускали команду nginx.</p>
`
        },
        category: "devops",
        icon: "fab fa-docker",
        date: "2024-01-16",
        readTime: "2 min"
    },
    {
        id: 10,
        title: {
            en: "Python Virtual Environment",
            ru: "Виртуальное окружение Python"
        },
        excerpt: {
            en: "Create isolated Python environments for your projects",
            ru: "Создавайте изолированные окружения Python для проектов"
        },
        content: {
            en: `
<h2>Python Virtual Environment (Beginner, 3 min)</h2>
<p><b>Virtual environments</b> help you manage Python packages for different projects. Let's create one!</p>
<ol>
  <li><b>Navigate to your project folder:</b><br><code>cd my-python-project</code></li>
  <li><b>Create a virtual environment:</b><br><code>python -m venv venv</code></li>
  <li><b>Activate the virtual environment:</b><br>
<strong>Windows:</strong> <code>venv\\Scripts\\activate</code><br>
<strong>macOS/Linux:</strong> <code>source venv/bin/activate</code></li>
  <li><b>Install packages (example):</b><br><code>pip install requests flask</code></li>
  <li><b>Create requirements.txt:</b><br><code>pip freeze > requirements.txt</code></li>
  <li><b>Deactivate when done:</b><br><code>deactivate</code></li>
</ol>
<p>🎉 You now have an isolated Python environment! The <code>(venv)</code> prefix in your terminal shows it's active.</p>
<p><b>To reactivate later:</b> Run the activate command from step 3.</p>
`,
            ru: `
<h2>Виртуальное окружение Python (Простой уровень, 3 минуты)</h2>
<p><b>Виртуальные окружения</b> помогают управлять пакетами Python для разных проектов. Давайте создадим одно!</p>
<ol>
  <li><b>Перейдите в папку проекта:</b><br><code>cd my-python-project</code></li>
  <li><b>Создайте виртуальное окружение:</b><br><code>python -m venv venv</code></li>
  <li><b>Активируйте виртуальное окружение:</b><br>
<strong>Windows:</strong> <code>venv\\Scripts\\activate</code><br>
<strong>macOS/Linux:</strong> <code>source venv/bin/activate</code></li>
  <li><b>Установите пакеты (пример):</b><br><code>pip install requests flask</code></li>
  <li><b>Создайте requirements.txt:</b><br><code>pip freeze > requirements.txt</code></li>
  <li><b>Деактивируйте когда закончите:</b><br><code>deactivate</code></li>
</ol>
<p>🎉 У вас теперь есть изолированное окружение Python! Префикс <code>(venv)</code> в терминале показывает, что оно активно.</p>
<p><b>Чтобы активировать позже:</b> Выполните команду активации из шага 3.</p>
`
        },
        category: "programming",
        icon: "fab fa-python",
        date: "2024-01-14",
        readTime: "3 min"
    },
    {
        id: 11,
        title: {
            en: "VS Code Setup",
            ru: "Настройка VS Code"
        },
        excerpt: {
            en: "Configure VS Code for efficient development",
            ru: "Настройте VS Code для эффективной разработки"
        },
        content: {
            en: `
<h2>VS Code Setup (Beginner, 5 min)</h2>
<p><b>Visual Studio Code</b> is a powerful code editor. Let's set it up for maximum productivity!</p>
<ol>
  <li><b>Download and install VS Code:</b><br><code>https://code.visualstudio.com/</code></li>
  <li><b>Install essential extensions:</b><br>
• <strong>Live Server</strong> - for web development<br>
• <strong>Python</strong> - for Python development<br>
• <strong>ES7+ React/Redux/React-Native snippets</strong> - for React<br>
• <strong>GitLens</strong> - enhanced Git integration<br>
• <strong>Auto Rename Tag</strong> - for HTML/XML</li>
  <li><b>Configure settings (File > Preferences > Settings):</b><br>
• Enable "Auto Save"<br>
• Set "Tab Size" to 2 or 4<br>
• Enable "Word Wrap"</li>
  <li><b>Learn keyboard shortcuts:</b><br>
• <code>Ctrl+Shift+P</code> - Command Palette<br>
• <code>Ctrl+P</code> - Quick Open<br>
• <code>Ctrl+Shift+E</code> - Explorer<br>
• <code>Ctrl+`</code> - Terminal</li>
  <li><b>Open a folder:</b> File > Open Folder</li>
</ol>
<p>🎉 Your VS Code is now ready for development! The extensions will help you code faster and more efficiently.</p>
`,
            ru: `
<h2>Настройка VS Code (Простой уровень, 5 минут)</h2>
<p><b>Visual Studio Code</b> — мощный редактор кода. Давайте настроим его для максимальной продуктивности!</p>
<ol>
  <li><b>Скачайте и установите VS Code:</b><br><code>https://code.visualstudio.com/</code></li>
  <li><b>Установите важные расширения:</b><br>
• <strong>Live Server</strong> - для веб-разработки<br>
• <strong>Python</strong> - для разработки на Python<br>
• <strong>ES7+ React/Redux/React-Native snippets</strong> - для React<br>
• <strong>GitLens</strong> - улучшенная интеграция с Git<br>
• <strong>Auto Rename Tag</strong> - для HTML/XML</li>
  <li><b>Настройте параметры (Файл > Настройки > Параметры):</b><br>
• Включите "Автосохранение"<br>
• Установите "Размер табуляции" 2 или 4<br>
• Включите "Перенос строк"</li>
  <li><b>Изучите горячие клавиши:</b><br>
• <code>Ctrl+Shift+P</code> - Палитра команд<br>
• <code>Ctrl+P</code> - Быстрое открытие<br>
• <code>Ctrl+Shift+E</code> - Проводник<br>
• <code>Ctrl+`</code> - Терминал</li>
  <li><b>Откройте папку:</b> Файл > Открыть папку</li>
</ol>
<p>🎉 Ваш VS Code готов к разработке! Расширения помогут вам писать код быстрее и эффективнее.</p>
`
        },
        category: "tutorials",
        icon: "fas fa-code",
        date: "2024-01-12",
        readTime: "5 min"
    },
    {
        id: 12,
        title: {
            en: "npm Package Manager",
            ru: "Менеджер пакетов npm"
        },
        excerpt: {
            en: "Learn the basics of npm for JavaScript development",
            ru: "Изучите основы npm для разработки на JavaScript"
        },
        content: {
            en: `
<h2>npm Package Manager (Beginner, 4 min)</h2>
<p><b>npm</b> is the default package manager for Node.js. Let's learn the essential commands!</p>
<ol>
  <li><b>Check npm version:</b><br><code>npm --version</code></li>
  <li><b>Initialize a new project:</b><br><code>npm init</code> (or <code>npm init -y</code> for defaults)</li>
  <li><b>Install a package:</b><br><code>npm install package-name</code> (or <code>npm i package-name</code>)</li>
  <li><b>Install as development dependency:</b><br><code>npm install --save-dev package-name</code></li>
  <li><b>Install all dependencies from package.json:</b><br><code>npm install</code></li>
  <li><b>Run scripts from package.json:</b><br><code>npm run script-name</code></li>
  <li><b>Update packages:</b><br><code>npm update</code></li>
  <li><b>Uninstall a package:</b><br><code>npm uninstall package-name</code></li>
</ol>
<p>🎉 You now know the essential npm commands! These will help you manage JavaScript dependencies effectively.</p>
<p><b>Common scripts in package.json:</b><br>
<code>"start": "node index.js"</code><br>
<code>"dev": "nodemon index.js"</code><br>
<code>"test": "jest"</code></p>
`,
            ru: `
<h2>Менеджер пакетов npm (Простой уровень, 4 минуты)</h2>
<p><b>npm</b> — стандартный менеджер пакетов для Node.js. Давайте изучим основные команды!</p>
<ol>
  <li><b>Проверьте версию npm:</b><br><code>npm --version</code></li>
  <li><b>Инициализируйте новый проект:</b><br><code>npm init</code> (или <code>npm init -y</code> для значений по умолчанию)</li>
  <li><b>Установите пакет:</b><br><code>npm install package-name</code> (или <code>npm i package-name</code>)</li>
  <li><b>Установите как зависимость разработки:</b><br><code>npm install --save-dev package-name</code></li>
  <li><b>Установите все зависимости из package.json:</b><br><code>npm install</code></li>
  <li><b>Запустите скрипты из package.json:</b><br><code>npm run script-name</code></li>
  <li><b>Обновите пакеты:</b><br><code>npm update</code></li>
  <li><b>Удалите пакет:</b><br><code>npm uninstall package-name</code></li>
</ol>
<p>🎉 Теперь вы знаете основные команды npm! Они помогут эффективно управлять зависимостями JavaScript.</p>
<p><b>Частые скрипты в package.json:</b><br>
<code>"start": "node index.js"</code><br>
<code>"dev": "nodemon index.js"</code><br>
<code>"test": "jest"</code></p>
`
        },
        category: "programming",
        icon: "fab fa-npm",
        date: "2024-01-10",
        readTime: "4 min"
    }
];

let currentFilter = 'all';
let filteredArticles = [...articles];

// Load and display articles
function loadArticles() {
    const lang = localStorage.getItem('lang') || 'en';
    const articlesGrid = document.getElementById('articles-grid');
    
    articlesGrid.innerHTML = '';
    
    filteredArticles.forEach(article => {
        const articleCard = createArticleCard(article, lang);
        articlesGrid.appendChild(articleCard);
    });
}

// Create article card element
function createArticleCard(article, lang) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.onclick = () => openArticle(article.id);
    
    card.innerHTML = `
        <div class="article-image">
            <i class="${article.icon}"></i>
        </div>
        <div class="article-content">
            <span class="article-category">${getCategoryName(article.category, lang)}</span>
            <h3 class="article-title">${article.title[lang]}</h3>
            <p class="article-excerpt">${article.excerpt[lang]}</p>
            <div class="article-meta">
                <span>${formatDate(article.date)}</span>
                <span>${article.readTime}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Get category name in current language
function getCategoryName(category, lang) {
    const categories = {
        programming: {
            en: "Programming",
            ru: "Программирование"
        },
        devops: {
            en: "DevOps",
            ru: "DevOps"
        },
        tutorials: {
            en: "Tutorials",
            ru: "Обучение"
        }
    };
    
    return categories[category][lang];
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const lang = localStorage.getItem('lang') || 'en';
    
    if (lang === 'ru') {
        return date.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } else {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Filter articles by category
function filterArticles(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter articles
    if (category === 'all') {
        filteredArticles = [...articles];
    } else {
        filteredArticles = articles.filter(article => article.category === category);
    }
    
    // Reload articles
    loadArticles();
}

// Search articles
function searchArticles() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const lang = localStorage.getItem('lang') || 'en';
    
    if (searchTerm.trim() === '') {
        filteredArticles = currentFilter === 'all' ? [...articles] : articles.filter(article => article.category === currentFilter);
    } else {
        filteredArticles = articles.filter(article => 
            article.title[lang].toLowerCase().includes(searchTerm) ||
            article.excerpt[lang].toLowerCase().includes(searchTerm) ||
            getCategoryName(article.category, lang).toLowerCase().includes(searchTerm)
        );
    }
    
    loadArticles();
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchArticles();
        }
    });
});

// Open article (placeholder function)
function openArticle(articleId) {
    const lang = localStorage.getItem('lang') || 'en';
    const article = articles.find(a => a.id === articleId);
    if (article) {
        const modal = document.getElementById('modal-article');
        const body = document.getElementById('modal-article-body');
        body.innerHTML = article.content[lang];
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeArticle() {
    document.getElementById('modal-article').classList.remove('show');
    document.body.style.overflow = '';
}

// Submit contact form
function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    showNotification('Sending message...', 'success');
    
    // Simulate API call
    setTimeout(() => {
        // Here you would typically send the data to your server
        console.log('Form data:', data);
        
        // Show success message
        const lang = localStorage.getItem('lang') || 'en';
        const message = lang === 'ru' ? 'Сообщение успешно отправлено!' : 'Message sent successfully!';
        showNotification(message, 'success');
        
        // Reset form
        event.target.reset();
    }, 2000);
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notification-message');
    
    messageElement.textContent = message;
    notification.className = `notification ${type} show`;
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
});

// Add loading animation to articles
function addLoadingAnimation() {
    const articlesGrid = document.getElementById('articles-grid');
    articlesGrid.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'article-card skeleton';
        skeleton.innerHTML = `
            <div class="article-image skeleton-image"></div>
            <div class="article-content">
                <div class="skeleton-category"></div>
                <div class="skeleton-title"></div>
                <div class="skeleton-excerpt"></div>
                <div class="skeleton-meta"></div>
            </div>
        `;
        articlesGrid.appendChild(skeleton);
    }
}

// Add skeleton loading styles
const style = document.createElement('style');
style.textContent = `
    .skeleton {
        animation: skeleton-loading 1s linear infinite alternate;
    }
    
    .skeleton-image {
        background: #e0e0e0;
        height: 200px;
    }
    
    .skeleton-category {
        background: #e0e0e0;
        height: 20px;
        width: 80px;
        border-radius: 10px;
        margin-bottom: 1rem;
    }
    
    .skeleton-title {
        background: #e0e0e0;
        height: 24px;
        width: 100%;
        border-radius: 4px;
        margin-bottom: 0.5rem;
    }
    
    .skeleton-excerpt {
        background: #e0e0e0;
        height: 16px;
        width: 100%;
        border-radius: 4px;
        margin-bottom: 0.5rem;
    }
    
    .skeleton-meta {
        background: #e0e0e0;
        height: 14px;
        width: 60px;
        border-radius: 4px;
    }
    
    @keyframes skeleton-loading {
        0% {
            background-color: #f0f0f0;
        }
        100% {
            background-color: #e0e0e0;
        }
    }
`;
document.head.appendChild(style); 