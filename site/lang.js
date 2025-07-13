const translations = {
    en: {
        greeting: "Welcome to IT Blog - Your Tech Journey Starts Here!",
        hero_subtitle: "Your ultimate source of knowledge in the world of technology",
        site_title: "IT Blog",
        search_placeholder: "Search articles...",
        articles_title: "Latest Articles",
        filter_all: "All",
        filter_programming: "Programming",
        filter_devops: "DevOps",
        filter_tutorials: "Tutorials",
        contact_title: "Contact Us",
        contact_subtitle: "Have questions or suggestions? Write to us!",
        name_label: "Name",
        email_label: "Email",
        subject_label: "Subject",
        message_label: "Message",
        submit_btn: "Send",
        footer_title: "IT Blog",
        footer_description: "Your source of knowledge in the world of technology",
        footer_links_title: "Links",
        footer_home: "Home",
        footer_articles: "Articles",
        footer_about: "About",
        footer_contact: "Contact",
        footer_social_title: "Social Networks",
        notification_success: "Message sent successfully!",
        notification_error: "Error sending message. Please try again.",
        article_1_title: "Getting Started with React",
        article_1_excerpt: "Learn the basics of React development and build your first component",
        article_2_title: "Docker for Beginners",
        article_2_excerpt: "Containerize your applications with Docker",
        article_3_title: "Python Web Development",
        article_3_excerpt: "Build web applications with Python and Flask",
        article_4_title: "Git Best Practices",
        article_4_excerpt: "Master version control with Git",
        article_5_title: "JavaScript ES6+ Features",
        article_5_excerpt: "Modern JavaScript features you need to know",
        article_6_title: "Database Design Principles",
        article_6_excerpt: "Learn how to design efficient databases"
    },
    ru: {
        greeting: "Добро пожаловать в IT Blog - Ваше путешествие в мир технологий начинается здесь!",
        hero_subtitle: "Ваш главный источник знаний в мире технологий",
        site_title: "IT Blog",
        search_placeholder: "Поиск статей...",
        articles_title: "Последние статьи",
        filter_all: "Все",
        filter_programming: "Программирование",
        filter_devops: "DevOps",
        filter_tutorials: "Обучение",
        contact_title: "Свяжитесь с нами",
        contact_subtitle: "Есть вопросы или предложения? Напишите нам!",
        name_label: "Имя",
        email_label: "Email",
        subject_label: "Тема",
        message_label: "Сообщение",
        submit_btn: "Отправить",
        footer_title: "IT Blog",
        footer_description: "Ваш источник знаний в мире технологий",
        footer_links_title: "Ссылки",
        footer_home: "Главная",
        footer_articles: "Статьи",
        footer_about: "О нас",
        footer_contact: "Контакты",
        footer_social_title: "Социальные сети",
        notification_success: "Сообщение успешно отправлено!",
        notification_error: "Ошибка отправки сообщения. Попробуйте еще раз.",
        article_1_title: "Начало работы с React",
        article_1_excerpt: "Изучите основы разработки на React и создайте свой первый компонент",
        article_2_title: "Docker для начинающих",
        article_2_excerpt: "Контейнеризируйте ваши приложения с помощью Docker",
        article_3_title: "Веб-разработка на Python",
        article_3_excerpt: "Создавайте веб-приложения с Python и Flask",
        article_4_title: "Лучшие практики Git",
        article_4_excerpt: "Освойте систему контроля версий Git",
        article_5_title: "Возможности JavaScript ES6+",
        article_5_excerpt: "Современные возможности JavaScript, которые нужно знать",
        article_6_title: "Принципы проектирования баз данных",
        article_6_excerpt: "Узнайте, как проектировать эффективные базы данных"
    }
};

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    updateContent();
}

function updateContent() {
    const lang = localStorage.getItem('lang') || 'en';
    const t = translations[lang];
    
    // Update all text content
    document.getElementById('greeting').textContent = t.greeting;
    document.getElementById('hero-subtitle').textContent = t.hero_subtitle;
    document.getElementById('site-title').textContent = t.site_title;
    document.getElementById('search-input').placeholder = t.search_placeholder;
    document.getElementById('articles-title').textContent = t.articles_title;
    document.getElementById('filter-all').innerHTML = `<i class="fas fa-list"></i> ${t.filter_all}`;
    document.getElementById('filter-programming').innerHTML = `<i class="fas fa-code"></i> ${t.filter_programming}`;
    document.getElementById('filter-devops').innerHTML = `<i class="fas fa-server"></i> ${t.filter_devops}`;
    document.getElementById('filter-tutorials').innerHTML = `<i class="fas fa-graduation-cap"></i> ${t.filter_tutorials}`;
    document.getElementById('contact-title').textContent = t.contact_title;
    document.getElementById('contact-subtitle').textContent = t.contact_subtitle;
    document.getElementById('name-label').textContent = t.name_label;
    document.getElementById('email-label').textContent = t.email_label;
    document.getElementById('subject-label').textContent = t.subject_label;
    document.getElementById('message-label').textContent = t.message_label;
    document.getElementById('submit-btn').innerHTML = `<i class="fas fa-paper-plane"></i><span>${t.submit_btn}</span>`;
    document.getElementById('footer-title').textContent = t.footer_title;
    document.getElementById('footer-description').textContent = t.footer_description;
    document.getElementById('footer-links-title').textContent = t.footer_links_title;
    document.getElementById('footer-home').textContent = t.footer_home;
    document.getElementById('footer-articles').textContent = t.footer_articles;
    document.getElementById('footer-about').textContent = t.footer_about;
    document.getElementById('footer-contact').textContent = t.footer_contact;
    document.getElementById('footer-social-title').textContent = t.footer_social_title;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Initialize content on page load
window.onload = function() {
    updateContent();
    loadArticles();
}; 