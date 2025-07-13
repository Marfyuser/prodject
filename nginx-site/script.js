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
            en: "OSI Model Explained",
            ru: "Модель OSI - Объяснение"
        },
        excerpt: {
            en: "Understanding the 7 layers of the OSI model",
            ru: "Понимание 7 уровней модели OSI"
        },
        content: {
            en: `
<h2>OSI Model - The Foundation of Networking (Beginner, 8 min)</h2>
<p>The <b>OSI (Open Systems Interconnection) model</b> is a conceptual framework used to describe network interactions in 7 distinct layers.</p>

<h3>🌐 The 7 Layers:</h3>
<ol>
  <li><b>Physical Layer (1)</b> - Cables, connectors, electrical signals</li>
  <li><b>Data Link Layer (2)</b> - MAC addresses, switches, frames</li>
  <li><b>Network Layer (3)</b> - IP addresses, routers, packets</li>
  <li><b>Transport Layer (4)</b> - TCP/UDP, ports, segments</li>
  <li><b>Session Layer (5)</b> - Session management, authentication</li>
  <li><b>Presentation Layer (6)</b> - Data formatting, encryption</li>
  <li><b>Application Layer (7)</b> - HTTP, FTP, SMTP, user applications</li>
</ol>

<h3>💡 Key Concepts:</h3>
<ul>
  <li>Each layer serves the layer above it</li>
  <li>Data flows down through layers (encapsulation)</li>
  <li>Data flows up through layers (de-encapsulation)</li>
  <li>Layers 1-4 are hardware/software focused</li>
  <li>Layers 5-7 are application focused</li>
</ul>

<p><b>Remember:</b> "Please Do Not Throw Sausage Pizza Away" - helps remember the layers!</p>
`,
            ru: `
<h2>Модель OSI - Основа сетей (Начальный уровень, 8 минут)</h2>
<p><b>Модель OSI (Open Systems Interconnection)</b> — это концептуальная структура для описания сетевого взаимодействия в 7 различных уровнях.</p>

<h3>🌐 7 Уровней:</h3>
<ol>
  <li><b>Физический уровень (1)</b> - Кабели, разъемы, электрические сигналы</li>
  <li><b>Канальный уровень (2)</b> - MAC-адреса, коммутаторы, кадры</li>
  <li><b>Сетевой уровень (3)</b> - IP-адреса, маршрутизаторы, пакеты</li>
  <li><b>Транспортный уровень (4)</b> - TCP/UDP, порты, сегменты</li>
  <li><b>Сеансовый уровень (5)</b> - Управление сеансами, аутентификация</li>
  <li><b>Представительский уровень (6)</b> - Форматирование данных, шифрование</li>
  <li><b>Прикладной уровень (7)</b> - HTTP, FTP, SMTP, пользовательские приложения</li>
</ol>

<h3>💡 Ключевые концепции:</h3>
<ul>
  <li>Каждый уровень обслуживает уровень выше него</li>
  <li>Данные проходят вниз через уровни (инкапсуляция)</li>
  <li>Данные проходят вверх через уровни (деинкапсуляция)</li>
  <li>Уровни 1-4 ориентированы на оборудование/программное обеспечение</li>
  <li>Уровни 5-7 ориентированы на приложения</li>
</ul>

<p><b>Запомните:</b> "Пожалуйста, Не Теряй Сосиски Пиццы Абсолютно" - помогает запомнить уровни!</p>
`
        },
        category: "networking",
        icon: "fas fa-network-wired",
        date: "2024-01-20",
        readTime: "8 min"
    },
    {
        id: 8,
        title: {
            en: "TCP/IP Protocol Suite",
            ru: "Стек протоколов TCP/IP"
        },
        excerpt: {
            en: "Core protocols that power the Internet",
            ru: "Основные протоколы, которые обеспечивают работу Интернета"
        },
        content: {
            en: `
<h2>TCP/IP Protocol Suite (Intermediate, 10 min)</h2>
<p><b>TCP/IP</b> is the fundamental communication protocol of the Internet, consisting of 4 main layers.</p>

<h3>🌐 TCP/IP Layers:</h3>
<ol>
  <li><b>Network Access Layer</b> - Physical and data link (Ethernet, WiFi)</li>
  <li><b>Internet Layer</b> - IP addressing and routing (IPv4, IPv6, ICMP)</li>
  <li><b>Transport Layer</b> - End-to-end communication (TCP, UDP)</li>
  <li><b>Application Layer</b> - User applications (HTTP, FTP, DNS)</li>
</ol>

<h3>🔧 Key Protocols:</h3>
<ul>
  <li><b>TCP (Transmission Control Protocol)</b> - Reliable, connection-oriented</li>
  <li><b>UDP (User Datagram Protocol)</b> - Fast, connectionless</li>
  <li><b>IP (Internet Protocol)</b> - Addressing and routing</li>
  <li><b>ICMP (Internet Control Message Protocol)</b> - Network diagnostics</li>
  <li><b>ARP (Address Resolution Protocol)</b> - MAC to IP mapping</li>
</ul>

<h3>💡 Common Ports:</h3>
<ul>
  <li>HTTP: 80, HTTPS: 443</li>
  <li>FTP: 21, SSH: 22</li>
  <li>SMTP: 25, DNS: 53</li>
  <li>DHCP: 67/68</li>
</ul>
`,
            ru: `
<h2>Стек протоколов TCP/IP (Средний уровень, 10 минут)</h2>
<p><b>TCP/IP</b> — это фундаментальный протокол связи Интернета, состоящий из 4 основных уровней.</p>

<h3>🌐 Уровни TCP/IP:</h3>
<ol>
  <li><b>Уровень сетевого доступа</b> - Физический и канальный (Ethernet, WiFi)</li>
  <li><b>Межсетевой уровень</b> - IP-адресация и маршрутизация (IPv4, IPv6, ICMP)</li>
  <li><b>Транспортный уровень</b> - Сквозная связь (TCP, UDP)</li>
  <li><b>Прикладной уровень</b> - Пользовательские приложения (HTTP, FTP, DNS)</li>
</ol>

<h3>🔧 Ключевые протоколы:</h3>
<ul>
  <li><b>TCP (Transmission Control Protocol)</b> - Надежный, с установкой соединения</li>
  <li><b>UDP (User Datagram Protocol)</b> - Быстрый, без установки соединения</li>
  <li><b>IP (Internet Protocol)</b> - Адресация и маршрутизация</li>
  <li><b>ICMP (Internet Control Message Protocol)</b> - Диагностика сети</li>
  <li><b>ARP (Address Resolution Protocol)</b> - Сопоставление MAC с IP</li>
</ul>

<h3>💡 Частые порты:</h3>
<ul>
  <li>HTTP: 80, HTTPS: 443</li>
  <li>FTP: 21, SSH: 22</li>
  <li>SMTP: 25, DNS: 53</li>
  <li>DHCP: 67/68</li>
</ul>
`
        },
        category: "networking",
        icon: "fas fa-globe",
        date: "2024-01-18",
        readTime: "10 min"
    },
    {
        id: 9,
        title: {
            en: "Cisco Switch Configuration",
            ru: "Настройка коммутатора Cisco"
        },
        excerpt: {
            en: "Basic Cisco switch setup and configuration",
            ru: "Базовая настройка и конфигурация коммутатора Cisco"
        },
        content: {
            en: `
<h2>Cisco Switch Configuration (Intermediate, 12 min)</h2>
<p>Learn the basics of configuring a <b>Cisco switch</b> for your network.</p>

<h3>🔧 Initial Setup:</h3>
<ol>
  <li><b>Connect to console port</b> using a rollover cable</li>
  <li><b>Default credentials:</b> No username, password: cisco</li>
  <li><b>Enter privileged mode:</b> <code>enable</code></li>
  <li><b>Enter global config:</b> <code>configure terminal</code></li>
</ol>

<h3>📝 Basic Commands:</h3>
<pre><code># Set hostname
Switch(config)# hostname SW1

# Set enable password
Switch(config)# enable secret mypassword

# Configure VLAN
Switch(config)# vlan 10
Switch(config-vlan)# name Sales
Switch(config-vlan)# exit

# Assign port to VLAN
Switch(config)# interface fastethernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# no shutdown
Switch(config-if)# exit

# Save configuration
Switch# copy running-config startup-config
</code></pre>

<h3>🔍 Useful Commands:</h3>
<ul>
  <li><code>show running-config</code> - View current config</li>
  <li><code>show interfaces</code> - Interface status</li>
  <li><code>show vlan</code> - VLAN information</li>
  <li><code>show mac address-table</code> - MAC table</li>
</ul>
`,
            ru: `
<h2>Настройка коммутатора Cisco (Средний уровень, 12 минут)</h2>
<p>Изучите основы настройки <b>коммутатора Cisco</b> для вашей сети.</p>

<h3>🔧 Начальная настройка:</h3>
<ol>
  <li><b>Подключитесь к консольному порту</b> с помощью rollover кабеля</li>
  <li><b>Стандартные учетные данные:</b> Без имени пользователя, пароль: cisco</li>
  <li><b>Войдите в привилегированный режим:</b> <code>enable</code></li>
  <li><b>Войдите в глобальную конфигурацию:</b> <code>configure terminal</code></li>
</ol>

<h3>📝 Основные команды:</h3>
<pre><code># Установить имя хоста
Switch(config)# hostname SW1

# Установить пароль enable
Switch(config)# enable secret mypassword

# Настроить VLAN
Switch(config)# vlan 10
Switch(config-vlan)# name Sales
Switch(config-vlan)# exit

# Назначить порт VLAN
Switch(config)# interface fastethernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# no shutdown
Switch(config-if)# exit

# Сохранить конфигурацию
Switch# copy running-config startup-config
</code></pre>

<h3>🔍 Полезные команды:</h3>
<ul>
  <li><code>show running-config</code> - Просмотр текущей конфигурации</li>
  <li><code>show interfaces</code> - Статус интерфейсов</li>
  <li><code>show vlan</code> - Информация о VLAN</li>
  <li><code>show mac address-table</code> - Таблица MAC-адресов</li>
</ul>
`
        },
        category: "networking",
        icon: "fas fa-hdd",
        date: "2024-01-15",
        readTime: "12 min"
    },
    {
        id: 10,
        title: {
            en: "Huawei Router Setup",
            ru: "Настройка маршрутизатора Huawei"
        },
        excerpt: {
            en: "Configure Huawei routers for enterprise networks",
            ru: "Настройка маршрутизаторов Huawei для корпоративных сетей"
        },
        content: {
            en: `
<h2>Huawei Router Configuration (Intermediate, 15 min)</h2>
<p>Configure <b>Huawei routers</b> for enterprise networking with basic routing and security.</p>

<h3>🔧 Initial Access:</h3>
<ol>
  <li><b>Console connection:</b> Use console cable to COM port</li>
  <li><b>Default credentials:</b> Username: admin, Password: admin</li>
  <li><b>Enter system view:</b> <code>system-view</code></li>
  <li><b>Exit system view:</b> <code>quit</code></li>
</ol>

<h3>📝 Basic Configuration:</h3>
<pre><code># Set device name
[Huawei] sysname R1

# Configure interface IP
[Huawei] interface GigabitEthernet 0/0/0
[Huawei-GigabitEthernet0/0/0] ip address 192.168.1.1 255.255.255.0
[Huawei-GigabitEthernet0/0/0] undo shutdown
[Huawei-GigabitEthernet0/0/0] quit

# Configure static route
[Huawei] ip route-static 0.0.0.0 0.0.0.0 192.168.1.254

# Configure NAT
[Huawei] acl 2000
[Huawei-acl-basic-2000] rule permit source 192.168.1.0 0.0.0.255
[Huawei-acl-basic-2000] quit
[Huawei] interface GigabitEthernet 0/0/1
[Huawei-GigabitEthernet0/0/1] nat outbound 2000
[Huawei-GigabitEthernet0/0/1] quit

# Save configuration
[Huawei] save
</code></pre>

<h3>🔍 Verification Commands:</h3>
<ul>
  <li><code>display current-configuration</code> - Show config</li>
  <li><code>display ip routing-table</code> - Show routes</li>
  <li><code>display interface brief</code> - Interface status</li>
  <li><code>ping 8.8.8.8</code> - Test connectivity</li>
</ul>
`,
            ru: `
<h2>Настройка маршрутизатора Huawei (Средний уровень, 15 минут)</h2>
<p>Настройте <b>маршрутизаторы Huawei</b> для корпоративных сетей с базовой маршрутизацией и безопасностью.</p>

<h3>🔧 Начальный доступ:</h3>
<ol>
  <li><b>Консольное подключение:</b> Используйте консольный кабель к COM порту</li>
  <li><b>Стандартные учетные данные:</b> Имя пользователя: admin, Пароль: admin</li>
  <li><b>Войти в системное представление:</b> <code>system-view</code></li>
  <li><b>Выйти из системного представления:</b> <code>quit</code></li>
</ol>

<h3>📝 Базовая конфигурация:</h3>
<pre><code># Установить имя устройства
[Huawei] sysname R1

# Настроить IP интерфейса
[Huawei] interface GigabitEthernet 0/0/0
[Huawei-GigabitEthernet0/0/0] ip address 192.168.1.1 255.255.255.0
[Huawei-GigabitEthernet0/0/0] undo shutdown
[Huawei-GigabitEthernet0/0/0] quit

# Настроить статический маршрут
[Huawei] ip route-static 0.0.0.0 0.0.0.0 192.168.1.254

# Настроить NAT
[Huawei] acl 2000
[Huawei-acl-basic-2000] rule permit source 192.168.1.0 0.0.0.255
[Huawei-acl-basic-2000] quit
[Huawei] interface GigabitEthernet 0/0/1
[Huawei-GigabitEthernet0/0/1] nat outbound 2000
[Huawei-GigabitEthernet0/0/1] quit

# Сохранить конфигурацию
[Huawei] save
</code></pre>

<h3>🔍 Команды проверки:</h3>
<ul>
  <li><code>display current-configuration</code> - Показать конфигурацию</li>
  <li><code>display ip routing-table</code> - Показать маршруты</li>
  <li><code>display interface brief</code> - Статус интерфейсов</li>
  <li><code>ping 8.8.8.8</code> - Проверить связность</li>
</ul>
`
        },
        category: "networking",
        icon: "fas fa-router",
        date: "2024-01-12",
        readTime: "15 min"
    },
    {
        id: 11,
        title: {
            en: "Network Security Basics",
            ru: "Основы сетевой безопасности"
        },
        excerpt: {
            en: "Essential security concepts for network administrators",
            ru: "Основные концепции безопасности для сетевых администраторов"
        },
        content: {
            en: `
<h2>Network Security Fundamentals (Intermediate, 10 min)</h2>
<p>Learn essential <b>network security concepts</b> to protect your infrastructure.</p>

<h3>🔒 Security Layers:</h3>
<ol>
  <li><b>Physical Security</b> - Access control, surveillance</li>
  <li><b>Network Security</b> - Firewalls, IDS/IPS</li>
  <li><b>Application Security</b> - Input validation, encryption</li>
  <li><b>Data Security</b> - Encryption, backups</li>
</ol>

<h3>🛡️ Key Security Measures:</h3>
<ul>
  <li><b>Firewalls</b> - Control traffic flow</li>
  <li><b>VPN (Virtual Private Network)</b> - Secure remote access</li>
  <li><b>IDS/IPS</b> - Intrusion detection/prevention</li>
  <li><b>Access Control Lists (ACL)</b> - Traffic filtering</li>
  <li><b>Network Segmentation</b> - VLANs, DMZ</li>
</ul>

<h3>🔐 Authentication Methods:</h3>
<ul>
  <li><b>RADIUS</b> - Remote authentication</li>
  <li><b>TACACS+</b> - Cisco authentication</li>
  <li><b>802.1X</b> - Port-based authentication</li>
  <li><b>Multi-factor Authentication</b> - Multiple verification steps</li>
</ul>

<h3>⚠️ Common Threats:</h3>
<ul>
  <li>DDoS attacks</li>
  <li>Man-in-the-middle attacks</li>
  <li>Packet sniffing</li>
  <li>ARP spoofing</li>
  <li>VLAN hopping</li>
</ul>
`,
            ru: `
<h2>Основы сетевой безопасности (Средний уровень, 10 минут)</h2>
<p>Изучите основные <b>концепции сетевой безопасности</b> для защиты вашей инфраструктуры.</p>

<h3>🔒 Уровни безопасности:</h3>
<ol>
  <li><b>Физическая безопасность</b> - Контроль доступа, видеонаблюдение</li>
  <li><b>Сетевая безопасность</b> - Межсетевые экраны, IDS/IPS</li>
  <li><b>Безопасность приложений</b> - Валидация ввода, шифрование</li>
  <li><b>Безопасность данных</b> - Шифрование, резервное копирование</li>
</ol>

<h3>🛡️ Ключевые меры безопасности:</h3>
<ul>
  <li><b>Межсетевые экраны</b> - Контроль потока трафика</li>
  <li><b>VPN (Виртуальная частная сеть)</b> - Безопасный удаленный доступ</li>
  <li><b>IDS/IPS</b> - Обнаружение/предотвращение вторжений</li>
  <li><b>Списки контроля доступа (ACL)</b> - Фильтрация трафика</li>
  <li><b>Сегментация сети</b> - VLAN, DMZ</li>
</ul>

<h3>🔐 Методы аутентификации:</h3>
<ul>
  <li><b>RADIUS</b> - Удаленная аутентификация</li>
  <li><b>TACACS+</b> - Аутентификация Cisco</li>
  <li><b>802.1X</b> - Аутентификация на основе портов</li>
  <li><b>Многофакторная аутентификация</b> - Множественные шаги проверки</li>
</ul>

<h3>⚠️ Распространенные угрозы:</h3>
<ul>
  <li>DDoS атаки</li>
  <li>Атаки "человек посередине"</li>
  <li>Перехват пакетов</li>
  <li>ARP спуфинг</li>
  <li>VLAN hopping</li>
</ul>
`
        },
        category: "networking",
        icon: "fas fa-shield-alt",
        date: "2024-01-10",
        readTime: "10 min"
    },
    {
        id: 12,
        title: {
            en: "Subnetting Made Easy",
            ru: "Подсети - Просто и Понятно"
        },
        excerpt: {
            en: "Master IP subnetting with practical examples",
            ru: "Освойте IP-подсети с практическими примерами"
        },
        content: {
            en: `
<h2>IP Subnetting Simplified (Intermediate, 12 min)</h2>
<p>Learn <b>IP subnetting</b> step by step with practical examples.</p>

<h3>🔢 Subnetting Basics:</h3>
<ul>
  <li><b>IP Address:</b> 32-bit number (4 octets)</li>
  <li><b>Subnet Mask:</b> Defines network portion</li>
  <li><b>CIDR Notation:</b> /24 means 24 bits for network</li>
  <li><b>Network Address:</b> First address in subnet</li>
  <li><b>Broadcast Address:</b> Last address in subnet</li>
</ul>

<h3>📊 Common Subnet Masks:</h3>
<table>
  <tr><th>CIDR</th><th>Subnet Mask</th><th>Hosts</th></tr>
  <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
  <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
  <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
  <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
  <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
  <tr><td>/29</td><td>255.255.255.248</td><td>6</td></tr>
  <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
</table>

<h3>💡 Example: 192.168.1.0/24</h3>
<ul>
  <li><b>Network:</b> 192.168.1.0</li>
  <li><b>First Host:</b> 192.168.1.1</li>
  <li><b>Last Host:</b> 192.168.1.254</li>
  <li><b>Broadcast:</b> 192.168.1.255</li>
  <li><b>Subnet Mask:</b> 255.255.255.0</li>
</ul>

<h3>🔧 Subnetting Calculator:</h3>
<p>Use online tools like <a href="https://www.subnet-calculator.com/" target="_blank">subnet-calculator.com</a> for quick calculations.</p>
`,
            ru: `
<h2>IP-подсети Упрощенно (Средний уровень, 12 минут)</h2>
<p>Изучите <b>IP-подсети</b> пошагово с практическими примерами.</p>

<h3>🔢 Основы подсетей:</h3>
<ul>
  <li><b>IP-адрес:</b> 32-битное число (4 октета)</li>
  <li><b>Маска подсети:</b> Определяет сетевую часть</li>
  <li><b>CIDR нотация:</b> /24 означает 24 бита для сети</li>
  <li><b>Сетевой адрес:</b> Первый адрес в подсети</li>
  <li><b>Широковещательный адрес:</b> Последний адрес в подсети</li>
</ul>

<h3>📊 Частые маски подсетей:</h3>
<table>
  <tr><th>CIDR</th><th>Маска подсети</th><th>Хостов</th></tr>
  <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
  <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
  <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
  <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
  <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
  <tr><td>/29</td><td>255.255.255.248</td><td>6</td></tr>
  <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
</table>

<h3>💡 Пример: 192.168.1.0/24</h3>
<ul>
  <li><b>Сеть:</b> 192.168.1.0</li>
  <li><b>Первый хост:</b> 192.168.1.1</li>
  <li><b>Последний хост:</b> 192.168.1.254</li>
  <li><b>Широковещательный:</b> 192.168.1.255</li>
  <li><b>Маска подсети:</b> 255.255.255.0</li>
</ul>

<h3>🔧 Калькулятор подсетей:</h3>
<p>Используйте онлайн-инструменты как <a href="https://www.subnet-calculator.com/" target="_blank">subnet-calculator.com</a> для быстрых расчетов.</p>
`
        },
        category: "networking",
        icon: "fas fa-calculator",
        date: "2024-01-08",
        readTime: "12 min"
    },
    {
        id: 13,
        title: {
            en: "Kubernetes Basics",
            ru: "Основы Kubernetes"
        },
        excerpt: {
            en: "Container orchestration with Kubernetes",
            ru: "Оркестрация контейнеров с Kubernetes"
        },
        content: {
            en: `
<h2>Kubernetes Fundamentals (Intermediate, 15 min)</h2>
<p><b>Kubernetes</b> is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.</p>

<h3>🏗️ Core Concepts:</h3>
<ul>
  <li><b>Pod</b> - Smallest deployable unit (contains one or more containers)</li>
  <li><b>Service</b> - Network abstraction for pods</li>
  <li><b>Deployment</b> - Manages pod replicas and updates</li>
  <li><b>Namespace</b> - Virtual cluster within a physical cluster</li>
  <li><b>ConfigMap/Secret</b> - Configuration and sensitive data</li>
</ul>

<h3>📝 Basic Commands:</h3>
<pre><code># Get cluster info
kubectl cluster-info

# List all pods
kubectl get pods

# Create deployment
kubectl create deployment nginx --image=nginx

# Scale deployment
kubectl scale deployment nginx --replicas=3

# Expose service
kubectl expose deployment nginx --port=80 --type=LoadBalancer

# Apply YAML file
kubectl apply -f deployment.yaml
</code></pre>

<h3>📄 Sample Deployment YAML:</h3>
<pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
</code></pre>
`,
            ru: `
<h2>Основы Kubernetes (Средний уровень, 15 минут)</h2>
<p><b>Kubernetes</b> — это платформа оркестрации контейнеров с открытым исходным кодом, которая автоматизирует развертывание, масштабирование и управление контейнеризированными приложениями.</p>

<h3>🏗️ Основные концепции:</h3>
<ul>
  <li><b>Pod</b> - Наименьшая единица развертывания (содержит один или несколько контейнеров)</li>
  <li><b>Service</b> - Сетевая абстракция для подов</li>
  <li><b>Deployment</b> - Управляет репликами подов и обновлениями</li>
  <li><b>Namespace</b> - Виртуальный кластер внутри физического кластера</li>
  <li><b>ConfigMap/Secret</b> - Конфигурация и конфиденциальные данные</li>
</ul>

<h3>📝 Основные команды:</h3>
<pre><code># Получить информацию о кластере
kubectl cluster-info

# Список всех подов
kubectl get pods

# Создать развертывание
kubectl create deployment nginx --image=nginx

# Масштабировать развертывание
kubectl scale deployment nginx --replicas=3

# Открыть сервис
kubectl expose deployment nginx --port=80 --type=LoadBalancer

# Применить YAML файл
kubectl apply -f deployment.yaml
</code></pre>

<h3>📄 Пример YAML развертывания:</h3>
<pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
</code></pre>
`
        },
        category: "devops",
        icon: "fab fa-docker",
        date: "2024-01-05",
        readTime: "15 min"
    },
    {
        id: 14,
        title: {
            en: "Python Data Science",
            ru: "Data Science на Python"
        },
        excerpt: {
            en: "Introduction to data science with Python",
            ru: "Введение в data science с Python"
        },
        content: {
            en: `
<h2>Python Data Science Essentials (Intermediate, 12 min)</h2>
<p>Learn the fundamentals of <b>data science</b> using Python's powerful libraries.</p>

<h3>📊 Essential Libraries:</h3>
<ul>
  <li><b>NumPy</b> - Numerical computing and arrays</li>
  <li><b>Pandas</b> - Data manipulation and analysis</li>
  <li><b>Matplotlib</b> - Data visualization</li>
  <li><b>Scikit-learn</b> - Machine learning algorithms</li>
  <li><b>Jupyter</b> - Interactive notebooks</li>
</ul>

<h3>🔧 Basic Setup:</h3>
<pre><code># Install required packages
pip install numpy pandas matplotlib scikit-learn jupyter

# Start Jupyter notebook
jupyter notebook

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
</code></pre>

<h3>📈 Sample Data Analysis:</h3>
<pre><code># Load data
df = pd.read_csv('data.csv')

# Basic exploration
print(df.head())
print(df.describe())
print(df.info())

# Data visualization
plt.figure(figsize=(10, 6))
df['column'].hist()
plt.title('Distribution of Column')
plt.show()

# Correlation matrix
correlation = df.corr()
plt.imshow(correlation, cmap='coolwarm')
plt.colorbar()
plt.show()
</code></pre>

<h3>🤖 Simple Machine Learning:</h3>
<pre><code># Prepare data
X = df.drop('target', axis=1)
y = df['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
</code></pre>
`,
            ru: `
<h2>Основы Data Science на Python (Средний уровень, 12 минут)</h2>
<p>Изучите основы <b>data science</b> с помощью мощных библиотек Python.</p>

<h3>📊 Основные библиотеки:</h3>
<ul>
  <li><b>NumPy</b> - Численные вычисления и массивы</li>
  <li><b>Pandas</b> - Манипуляция и анализ данных</li>
  <li><b>Matplotlib</b> - Визуализация данных</li>
  <li><b>Scikit-learn</b> - Алгоритмы машинного обучения</li>
  <li><b>Jupyter</b> - Интерактивные блокноты</li>
</ul>

<h3>🔧 Базовая настройка:</h3>
<pre><code># Установить необходимые пакеты
pip install numpy pandas matplotlib scikit-learn jupyter

# Запустить Jupyter notebook
jupyter notebook

# Импортировать библиотеки
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
</code></pre>

<h3>📈 Пример анализа данных:</h3>
<pre><code># Загрузить данные
df = pd.read_csv('data.csv')

# Базовое исследование
print(df.head())
print(df.describe())
print(df.info())

# Визуализация данных
plt.figure(figsize=(10, 6))
df['column'].hist()
plt.title('Распределение колонки')
plt.show()

# Матрица корреляции
correlation = df.corr()
plt.imshow(correlation, cmap='coolwarm')
plt.colorbar()
plt.show()
</code></pre>

<h3>🤖 Простое машинное обучение:</h3>
<pre><code># Подготовить данные
X = df.drop('target', axis=1)
y = df['target']

# Разделить данные
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Обучить модель
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)

# Сделать предсказания
predictions = model.predict(X_test)
</code></pre>
`
        },
        category: "programming",
        icon: "fab fa-python",
        date: "2024-01-03",
        readTime: "12 min"
    },
    {
        id: 15,
        title: {
            en: "Web Development with Node.js",
            ru: "Веб-разработка на Node.js"
        },
        excerpt: {
            en: "Build modern web applications with Node.js and Express",
            ru: "Создавайте современные веб-приложения с Node.js и Express"
        },
        content: {
            en: `
<h2>Node.js Web Development (Intermediate, 10 min)</h2>
<p>Create modern web applications using <b>Node.js</b> and the Express framework.</p>

<h3>🚀 Getting Started:</h3>
<pre><code># Initialize project
npm init -y

# Install Express
npm install express

# Create server file
touch server.js
</code></pre>

<h3>📝 Basic Express Server:</h3>
<pre><code>const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]);
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  // Save user logic here
  res.status(201).json({ message: 'User created' });
});

// Start server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
</code></pre>

<h3>🔧 Project Structure:</h3>
<pre><code>my-app/
├── package.json
├── server.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── routes/
│   ├── users.js
│   └── products.js
└── middleware/
    └── auth.js
</code></pre>

<h3>💡 Useful Middleware:</h3>
<ul>
  <li><b>cors</b> - Cross-origin resource sharing</li>
  <li><b>helmet</b> - Security headers</li>
  <li><b>morgan</b> - HTTP request logger</li>
  <li><b>dotenv</b> - Environment variables</li>
</ul>
`,
            ru: `
<h2>Веб-разработка на Node.js (Средний уровень, 10 минут)</h2>
<p>Создавайте современные веб-приложения с помощью <b>Node.js</b> и фреймворка Express.</p>

<h3>🚀 Начало работы:</h3>
<pre><code># Инициализировать проект
npm init -y

# Установить Express
npm install express

# Создать файл сервера
touch server.js
</code></pre>

<h3>📝 Базовый Express сервер:</h3>
<pre><code>const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Маршруты
app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Мария' }
  ]);
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  // Логика сохранения пользователя
  res.status(201).json({ message: 'Пользователь создан' });
});

// Запустить сервер
app.listen(port, () => {
  console.log(\`Сервер запущен на http://localhost:\${port}\`);
});
</code></pre>

<h3>🔧 Структура проекта:</h3>
<pre><code>my-app/
├── package.json
├── server.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── routes/
│   ├── users.js
│   └── products.js
└── middleware/
    └── auth.js
</code></pre>

<h3>💡 Полезные middleware:</h3>
<ul>
  <li><b>cors</b> - Cross-origin resource sharing</li>
  <li><b>helmet</b> - Заголовки безопасности</li>
  <li><b>morgan</b> - Логгер HTTP запросов</li>
  <li><b>dotenv</b> - Переменные окружения</li>
</ul>
`
        },
        category: "programming",
        icon: "fab fa-node-js",
        date: "2023-12-30",
        readTime: "10 min"
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
        networking: {
            en: "Networking",
            ru: "Сети"
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