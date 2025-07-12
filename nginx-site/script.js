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
        showNotification(`Opening article: ${article.title[lang]}`, 'success');
        // Here you would typically navigate to the article page
        // For now, we'll just show a notification
    }
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