const greetings = {
    en: "Welcome to our website!",
    ru: "Добро пожаловать на наш сайт!"
};

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    updateGreeting();
}

function updateGreeting() {
    const lang = localStorage.getItem('lang') || 'en';
    document.getElementById('greeting').textContent = greetings[lang];
}

// Инициализация при загрузке страницы
window.onload = updateGreeting; 