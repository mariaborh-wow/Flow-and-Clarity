const intro = document.getElementById("intro");
const revealElements = document.querySelectorAll(".reveal");
const langButtons = document.querySelectorAll(".lang-btn");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const contactForm = document.getElementById("contactForm");
const faqItems = document.querySelectorAll(".faq-item");
const navLinks = document.querySelectorAll(".nav a");

const translations = {
  de: {
    introTitle: "Ich mache Ihren Wert sichtbar.",

    navServices: "Leistungen",
    navPortfolio: "Portfolio",
    navPricing: "Preise",
    navAbout: "Über mich",
    navFaq: "FAQ",
    navContact: "Kontakt",

    heroEyebrow: "Websites ab 280 € für Selbstständige",
    heroTitle: "Moderne Websites, die Ihr Business klar und professionell zeigen.",
    heroSubtitle:
      "Für Selbstständige, lokale Dienstleistungen und kleine Businesses, die online moderner, vertrauensvoller und verständlicher auftreten möchten.",
    heroBtn1: "Projekt anfragen",
    heroBtn2: "Arbeiten ansehen",
    heroBadge1: "Webdesign",
    heroBadge2: "klare Struktur",
    heroBadge3: "Google Sheets optional",

    quick1Title: "Modern",
    quick1Text: "Saubere Websites mit starkem ersten Eindruck.",
    quick2Title: "Verständlich",
    quick2Text: "Ihr Angebot wird schneller verstanden.",
    quick3Title: "Strukturiert",
    quick3Text: "Auch intern mehr Ordnung und Übersicht.",

    servicesOverline: "Leistungen",
    servicesTitle: "Was Sie konkret bekommen.",
    service1Title: "Website Erstellung",
    service1Text:
      "Individuelle Websites für Selbstständige und kleine Businesses – modern, klar und passend zu Ihrem Angebot.",
    service2Title: "Klare Nutzerführung",
    service2Text:
      "Struktur, Text und Aufbau so, dass Besucher schneller verstehen, was Sie anbieten.",
    service3Title: "Google Sheets Hilfe optional",
    service3Text:
      "Wenn Sie möchten, helfe ich zusätzlich mit übersichtlichen Tabellen und praktischer Struktur für den Alltag.",
    service3Price: "ab 75 €",

    portfolioOverline: "Portfolio",
    portfolioTitle: "Beispiele meiner Arbeit.",
    portfolioSasText:
      "Klarer Aufbau, starke Wirkung und direkter Kontakt per WhatsApp.",
    portfolioKristinaText:
      "Feminin, elegant und vertrauensvoll – mit klarer Führung für Kundinnen.",

    pricingOverline: "Preise",
    pricingTitle: "Klare Preise ohne Verwirrung.",
    websiteTag: "Website",
    websiteTitle: "ab 280 €",
    websitePriceNote: "einmalige Zahlung",
    websiteExtra: "Preis abhängig von Umfang und Funktion",
    websiteText:
      "Für Selbstständige und kleine Businesses, die online professionell und modern auftreten möchten.",
    websiteList1: "individuelles Design",
    websiteList2: "mobile & Desktop Optimierung",
    websiteList3: "klare Struktur & Nutzerführung",
    websiteList4: "Kontakt / WhatsApp Integration",
    websiteList5: "moderne visuelle Darstellung",
    websiteBtn: "Website anfragen",

    sheetsTag: "Google Sheets",
    sheetsTitle: "ab 75 €",
    sheetsPriceNote: "je nach Aufwand",
    sheetsExtra: "Preis abhängig vom Umfang",
    sheetsText:
      "Struktur und Ordnung für Tabellen, Prozesse, Kundenübersicht oder den Arbeitsalltag.",
    sheetsList1: "klare Tabellenstruktur",
    sheetsList2: "individuelle Lösungen",
    sheetsList3: "Übersicht für Ihren Alltag",
    sheetsList4: "einfach und verständlich aufgebaut",
    sheetsBtn: "Hilfe anfragen",

    aboutOverline: "Über mich",
    aboutTitle: "Ich gestalte Websites, die Ihr Angebot klar und professionell zeigen.",
    aboutLead:
      "Ich bin Maria und ich unterstütze Selbstständige dabei, online moderner, verständlicher und sichtbarer aufzutreten.",
    aboutText1:
      "Ich verbinde Design, Struktur und klare Nutzerführung – damit Besucher schneller verstehen, was Sie anbieten und wie sie Sie kontaktieren können.",
    aboutStrip1: "individuelle Websites",
    aboutStrip2: "klare Struktur",
    aboutStrip3: "leichter Kontakt",
    aboutFloat1Label: "Website",
    aboutFloat1Value: "klar & modern",
    aboutFloat2Label: "Google Sheets",
    aboutFloat2Value: "optional dazu",
    aboutFloat3Label: "Ziel",
    aboutFloat3Value: "mehr Klarheit",

    faqOverline: "FAQ",
    faqTitle: "Fragen, die für Selbstständige wirklich wichtig sind.",
    faq1Q: "Was kostet eine Website bei Ihnen?",
    faq1A:
      "Eine einfache Website startet ab 280 €. Der endgültige Preis hängt vom Umfang, der Struktur, zusätzlichen Funktionen und dem gewünschten Aufbau ab.",
    faq2Q: "Wovon hängt der Preis genau ab?",
    faq2A:
      "Der Preis hängt von der Komplexität der Website, den gewünschten Funktionen, der Anzahl der Bereiche, der Domain-Anbindung und dem individuellen Aufwand ab.",
    faq3Q: "Muss ich schon Texte oder Bilder fertig haben?",
    faq3A:
      "Nein. Wenn nötig, kann ich Ihnen helfen, die Struktur klarer aufzubauen und Inhalte sinnvoll zu ordnen.",
    faq4Q: "Kann ich auch nur Hilfe mit Google Sheets bekommen?",
    faq4A:
      "Ja. Google Sheets Unterstützung beginnt ab 75 € und kann unabhängig von einer Website angefragt werden.",
    faq5Q: "Kann ich später noch Änderungen oder Erweiterungen machen?",
    faq5A:
      "Ja. Eine Website kann später erweitert, angepasst und weiterentwickelt werden – je nachdem, wie Ihr Business wächst.",
    faq6Q: "Helfen Sie auch bei Domain und technischer Einrichtung?",
    faq6A:
      "Ja. Je nach Projekt kann ich auch bei der Domain-Anbindung und der grundlegenden technischen Einrichtung helfen.",

    contactOverline: "Kontakt",
    contactTitle: "Schreiben Sie mir direkt.",
    contactText:
      "Wenn Sie eine Website oder mehr digitale Klarheit für Ihr Business suchen, können Sie mir direkt schreiben.",
    contactMailLabel: "E-Mail",
    contactPhoneLabel: "Telefon",
    contactWhatsappValue: "Nachricht senden",
    chatTitle: "Frage direkt senden",
    formName: "Name",
    formEmail: "E-Mail oder WhatsApp",
    formMessage: "Nachricht",
    formBtn: "Anfrage vorbereiten",
    formNote: "Beim Klick wird Ihre Anfrage als E-Mail vorbereitet.",

    footerText: "Websites & digitale Struktur für Selbstständige"
  },

  ru: {
    introTitle: "Я покажу вашу ценность людям.",

    navServices: "Услуги",
    navPortfolio: "Портфолио",
    navPricing: "Цены",
    navAbout: "Обо мне",
    navFaq: "FAQ",
    navContact: "Контакт",

    heroEyebrow: "Сайты от 280 € для предпринимателей",
    heroTitle: "Современные сайты, которые ясно и профессионально показывают ваш бизнес.",
    heroSubtitle:
      "Для предпринимателей, локальных услуг и малого бизнеса, которые хотят выглядеть в интернете современнее и надёжнее.",
    heroBtn1: "Обсудить проект",
    heroBtn2: "Посмотреть работы",
    heroBadge1: "Веб-дизайн",
    heroBadge2: "понятная структура",
    heroBadge3: "Google Sheets дополнительно",

    quick1Title: "Современно",
    quick1Text: "Чистые сайты с сильным первым впечатлением.",
    quick2Title: "Понятно",
    quick2Text: "Ваше предложение понимается быстрее.",
    quick3Title: "Структурно",
    quick3Text: "Больше порядка и внутри бизнеса.",

    servicesOverline: "Услуги",
    servicesTitle: "Что вы конкретно получаете.",
    service1Title: "Создание сайтов",
    service1Text:
      "Индивидуальные сайты для предпринимателей и малого бизнеса — современные, понятные и под ваш запрос.",
    service2Title: "Понятная подача",
    service2Text:
      "Структура, тексты и блоки так, чтобы посетитель быстрее понимал, что вы предлагаете.",
    service3Title: "Помощь с Google Sheets дополнительно",
    service3Text:
      "Если хотите, я дополнительно помогу с понятными таблицами и удобной структурой для повседневной работы.",
    service3Price: "от 75 €",

    portfolioOverline: "Портфолио",
    portfolioTitle: "Примеры моей работы.",
    portfolioSasText:
      "Понятная структура, сильная подача и прямой контакт через WhatsApp.",
    portfolioKristinaText:
      "Женственно, элегантно и с доверием — с понятной подачей для клиенток.",

    pricingOverline: "Цены",
    pricingTitle: "Понятные цены без путаницы.",
    websiteTag: "Сайт",
    websiteTitle: "от 280 €",
    websitePriceNote: "разовая оплата",
    websiteExtra: "цена зависит от объёма и функций",
    websiteText:
      "Для предпринимателей и малого бизнеса, которые хотят выглядеть в интернете профессионально и современно.",
    websiteList1: "индивидуальный дизайн",
    websiteList2: "адаптация под телефон и компьютер",
    websiteList3: "понятная структура и логика",
    websiteList4: "контакт / WhatsApp интеграция",
    websiteList5: "современная визуальная подача",
    websiteBtn: "Запросить сайт",

    sheetsTag: "Google Sheets",
    sheetsTitle: "от 75 €",
    sheetsPriceNote: "зависит от задачи",
    sheetsExtra: "цена зависит от объёма",
    sheetsText:
      "Структура и порядок для таблиц, процессов, клиентов и ежедневной работы.",
    sheetsList1: "понятная структура таблиц",
    sheetsList2: "индивидуальные решения",
    sheetsList3: "удобный обзор для работы",
    sheetsList4: "просто и понятно",
    sheetsBtn: "Запросить помощь",

    aboutOverline: "Обо мне",
    aboutTitle: "Я создаю сайты, которые ясно и профессионально показывают ваше предложение.",
    aboutLead:
      "Я Мария, и я помогаю предпринимателям выглядеть в интернете современнее, понятнее и заметнее.",
    aboutText1:
      "Я соединяю дизайн, структуру и понятную подачу — чтобы посетитель быстрее понимал, что вы предлагаете и как с вами связаться.",
    aboutStrip1: "индивидуальные сайты",
    aboutStrip2: "понятная структура",
    aboutStrip3: "лёгкий контакт",
    aboutFloat1Label: "Сайт",
    aboutFloat1Value: "ясно и современно",
    aboutFloat2Label: "Google Sheets",
    aboutFloat2Value: "дополнительно",
    aboutFloat3Label: "Цель",
    aboutFloat3Value: "больше ясности",

    faqOverline: "FAQ",
    faqTitle: "Вопросы, которые действительно важны для предпринимателей.",
    faq1Q: "Сколько стоит сайт?",
    faq1A:
      "Простой сайт начинается от 280 €. Итоговая цена зависит от объёма, структуры, дополнительных функций и нужного уровня проработки.",
    faq2Q: "От чего именно зависит цена?",
    faq2A:
      "Цена зависит от сложности сайта, нужных функций, количества блоков, подключения домена и общего объёма работы.",
    faq3Q: "Нужно ли мне уже иметь готовые тексты и фото?",
    faq3A:
      "Нет. При необходимости я помогу выстроить структуру и логично собрать содержание.",
    faq4Q: "Можно ли заказать только помощь с Google Sheets?",
    faq4A:
      "Да. Помощь с Google Sheets начинается от 75 € и может быть отдельной услугой.",
    faq5Q: "Можно ли потом вносить изменения и расширять сайт?",
    faq5A:
      "Да. Сайт можно дорабатывать, расширять и развивать по мере роста вашего бизнеса.",
    faq6Q: "Помогаете ли вы с доменом и технической частью?",
    faq6A:
      "Да. В зависимости от проекта я могу помочь с подключением домена и базовой технической настройкой.",

    contactOverline: "Контакт",
    contactTitle: "Напишите мне напрямую.",
    contactText:
      "Если вам нужен сайт или больше цифровой ясности для вашего бизнеса — можете написать мне сразу.",
    contactMailLabel: "Почта",
    contactPhoneLabel: "Телефон",
    contactWhatsappValue: "Написать сообщение",
    chatTitle: "Задать вопрос",
    formName: "Имя",
    formEmail: "E-Mail или WhatsApp",
    formMessage: "Сообщение",
    formBtn: "Подготовить запрос",
    formNote: "После нажатия откроется подготовленное письмо.",

    footerText: "Сайты и цифровая структура для предпринимателей"
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang === "ru" ? "ru" : "de";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("flowClarityLang", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(localStorage.getItem("flowClarityLang") || "de");

/* intro */
window.addEventListener("load", () => {
  setTimeout(() => {
    if (intro) intro.classList.add("hide");
  }, 1600);
});

/* reveal */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* mobile menu */
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

/* active nav */
const sections = document.querySelectorAll("main section[id]");

function setActiveNavLink() {
  const scrollY = window.scrollY + 140;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const currentLink = document.querySelector(`.nav a[href="#${sectionId}"]`);

    if (!currentLink) return;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("is-active"));
      currentLink.classList.add("is-active");
    }
  });
}

window.addEventListener("scroll", setActiveNavLink);
setActiveNavLink();

/* contact form */
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const contact = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";
    const lang = localStorage.getItem("flowClarityLang") || "de";

    const subject =
      lang === "ru"
        ? "Запрос с сайта Flow and Clarity"
        : "Anfrage über Flow and Clarity";

    const body =
      lang === "ru"
        ? `Имя: ${name}\nКонтакт: ${contact}\n\nСообщение:\n${message}`
        : `Name: ${name}\nKontakt: ${contact}\n\nNachricht:\n${message}`;

    const mailto = `mailto:Maria.webhilfe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

/* tilt cards */
const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 7;
    const rotateX = ((y / rect.height) - 0.5) * -7;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* faq - one open */
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.removeAttribute("open");
        }
      });
    }
  });
});

/* background canvas */
const bgCanvas = document.getElementById("bgCanvas");

if (bgCanvas) {
  const ctx = bgCanvas.getContext("2d");
  let particles = [];
  let cells = [];
  const symbols = ["0", "1", "2", "3", "5", "7", "8", "9", "+", "•", "=", "{", "}", "#"];

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    bgCanvas.width = window.innerWidth * dpr;
    bgCanvas.height = window.innerHeight * dpr;
    bgCanvas.style.width = `${window.innerWidth}px`;
    bgCanvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    particles = [];
    const count = window.innerWidth < 768 ? 52 : 86;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 15 + 10,
        speedY: Math.random() * 0.22 + 0.05,
        speedX: (Math.random() - 0.5) * 0.12,
        opacity: Math.random() * 0.11 + 0.02,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        changeAfter: Math.random() * 130 + 40,
        frame: 0
      });
    }
  }

  function createCells() {
    cells = [];
    const step = window.innerWidth < 768 ? 78 : 92;

    for (let x = 0; x < window.innerWidth + step; x += step) {
      for (let y = 0; y < window.innerHeight + step; y += step) {
        cells.push({
          x,
          y,
          size: Math.random() * 10 + 16,
          opacity: Math.random() * 0.024 + 0.006,
          pulse: Math.random() * Math.PI * 2
        });
      }
    }
  }

  function drawCells(time) {
    cells.forEach((cell) => {
      const pulseOpacity = cell.opacity + Math.sin(time * 1.2 + cell.pulse) * 0.006;
      ctx.fillStyle = `rgba(105, 118, 134, ${Math.max(0.004, pulseOpacity)})`;
      ctx.fillRect(cell.x, cell.y, cell.size, cell.size);
    });
  }

  function drawParticles(time) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawCells(time);

    particles.forEach((p) => {
      p.frame += 1;

      if (p.frame >= p.changeAfter) {
        p.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        p.frame = 0;
        p.changeAfter = Math.random() * 130 + 40;
      }

      ctx.font = `600 ${p.size}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(82, 98, 116, ${p.opacity})`;
      ctx.fillText(p.symbol, p.x, p.y);

      p.y += p.speedY;
      p.x += p.speedX + Math.sin(time + p.y * 0.01) * 0.06;

      if (p.y > window.innerHeight + 24) {
        p.y = -24;
        p.x = Math.random() * window.innerWidth;
        p.symbol = symbols[Math.floor(Math.random() * symbols.length)];
      }

      if (p.x < -24) p.x = window.innerWidth + 24;
      if (p.x > window.innerHeight + 24) p.x = -24;
    });
  }

  function animate(now) {
    const time = now * 0.001;
    drawParticles(time);
    requestAnimationFrame(animate);
  }

  resizeCanvas();
  createParticles();
  createCells();
  requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
    createCells();
  });
}