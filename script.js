const intro = document.getElementById("intro");
const revealElements = document.querySelectorAll(".reveal");
const langButtons = document.querySelectorAll(".lang-btn");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const contactForm = document.getElementById("contactForm");

const translations = {
  de: {
    introTitle: "Ich mache Ihren Wert sichtbar.",
    navServices: "Leistungen",
    navPricing: "Preise",
    navAbout: "Über mich",
    navContact: "Kontakt",

    heroBadge: "Websites für Selbstständige",
    heroTitle: "Moderne Websites, die Ihr Business klar zeigen.",
    heroText:
      "Ich erstelle Websites für Selbstständige und helfe zusätzlich mit Google Sheets und digitaler Struktur.",
    heroBtn1: "Projekt anfragen",
    heroBtn2: "Preise ansehen",
    heroPoint1: "Webdesign",
    heroPoint2: "Google Sheets",
    heroPoint3: "klare Struktur",

    visualFloatingBadge: "Mehr Anfragen",
    visualEyebrow: "Was ich für Ihr Business löse",
    visualTitle: "Klarer auftreten. Leichter verstanden werden.",
    visualList1: "professioneller erster Eindruck",
    visualList2: "leichter Kontakt für potenzielle Kunden",
    visualList3: "übersichtliche digitale Struktur",
    visualList4: "individuelle Umsetzung statt Vorlage",
    chip1: "Websites",
    chip2: "Klarheit",
    chip3: "Struktur",

    quick1Title: "Modern",
    quick1Text: "Saubere, moderne Websites mit starker Wirkung.",
    quick2Title: "Verständlich",
    quick2Text: "Ihr Angebot wird klar und schnell erfassbar.",
    quick3Title: "Strukturiert",
    quick3Text: "Auch hinter den Kulissen mehr Ordnung und Übersicht.",

    servicesOverline: "Leistungen",
    servicesTitle: "Was ich für Ihr Business umsetzen kann.",
    service1Title: "Websites",
    service1Text:
      "Individuelle Websites für Selbstständige und kleine Businesses – modern, klar und passend zu Ihrem Angebot.",
    service2Title: "Google Sheets",
    service2Text:
      "Hilfe bei Tabellen, Struktur und praktischen Übersichten für den Alltag.",
    service2Price: "ab 75 €",
    service3Title: "Digitale Klarheit",
    service3Text:
      "Ich denke nicht nur an Design, sondern daran, wie Besucher schneller verstehen, was Sie anbieten – und wie der Kontakt leichter wird.",

    pricingOverline: "Preise",
    pricingTitle: "Zwei klare Pakete für einen professionellen Start.",
    starterTag: "Klarer Einstieg",
    starterTitle: "Starter",
    starterText:
      "Für kleine Businesses, die eine moderne und klare Website brauchen.",
    starterList1: "1 Landing Page",
    starterList2: "individuelles Design",
    starterList3: "mobile Optimierung",
    starterList4: "Kontakt / WhatsApp Integration",
    starterBtn: "Dieses Paket anfragen",

    businessTag: "Mehr Wirkung",
    businessTitle: "Business",
    businessText:
      "Für Selbstständige, die professioneller auftreten und ihr Angebot stärker zeigen möchten.",
    businessList1: "mehrere Sektionen",
    businessList2: "stärkere visuelle Gestaltung",
    businessList3: "FAQ / Preise / Vertrauenselemente",
    businessList4: "Hilfe bei Domain-Anbindung",
    businessList5: "Standort / Route / Lage einbauen",
    businessBtn: "Business anfragen",

    aboutOverline: "Über mich",
    aboutTitle: "Ich gestalte Websites, die Ihr Angebot klar und professionell zeigen.",
    aboutLead:
      "Ich bin Maria und ich unterstütze Selbstständige dabei, online moderner, verständlicher und sichtbarer aufzutreten.",
    aboutText1:
      "Ich verbinde Design, Struktur und klare Nutzerführung – damit Besucher schneller verstehen, was Sie anbieten und wie sie Sie kontaktieren können.",
    aboutStrip1: "individuelle Websites",
    aboutStrip2: "klare Struktur",
    aboutStrip3: "leichter Kontakt",
    aboutExtraTitle: "Zusätzliche Hilfe mit Google Sheets",
    aboutExtraText:
      "Wenn Sie möchten, kann ich Ihnen zusätzlich helfen, Tabellen übersichtlicher, praktischer und angenehmer für den Alltag zu machen.",
    aboutExtraPrice: "ab 75 €",
    aboutFloat1Label: "Website",
    aboutFloat1Value: "klar & modern",
    aboutFloat2Label: "Google Sheets",
    aboutFloat2Value: "optional dazu",
    aboutFloat3Label: "Ziel",
    aboutFloat3Value: "mehr Klarheit",

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
    navPricing: "Цены",
    navAbout: "Обо мне",
    navContact: "Контакт",

    heroBadge: "Сайты для предпринимателей",
    heroTitle: "Современные сайты, которые ясно показывают ваш бизнес.",
    heroText:
      "Я создаю сайты для предпринимателей и дополнительно помогаю с Google Sheets и цифровой структурой.",
    heroBtn1: "Обсудить проект",
    heroBtn2: "Посмотреть цены",
    heroPoint1: "Веб-дизайн",
    heroPoint2: "Google Sheets",
    heroPoint3: "понятная структура",

    visualFloatingBadge: "Больше заявок",
    visualEyebrow: "Что я решаю для вашего бизнеса",
    visualTitle: "Понятнее подача. Легче контакт.",
    visualList1: "профессиональное первое впечатление",
    visualList2: "удобный контакт для потенциальных клиентов",
    visualList3: "понятная цифровая структура",
    visualList4: "индивидуальная реализация вместо шаблона",
    chip1: "Сайты",
    chip2: "Ясность",
    chip3: "Структура",

    quick1Title: "Современно",
    quick1Text: "Чистые современные сайты с сильной подачей.",
    quick2Title: "Понятно",
    quick2Text: "Ваше предложение считывается быстро и ясно.",
    quick3Title: "Структурно",
    quick3Text: "Больше порядка и внутри бизнеса.",

    servicesOverline: "Услуги",
    servicesTitle: "Что я могу сделать для вашего бизнеса.",
    service1Title: "Сайты",
    service1Text:
      "Индивидуальные сайты для предпринимателей и малого бизнеса — современные, понятные и под ваш запрос.",
    service2Title: "Google Sheets",
    service2Text:
      "Помощь с таблицами, структурой и практичными рабочими обзорами.",
    service2Price: "от 75 €",
    service3Title: "Цифровая ясность",
    service3Text:
      "Я думаю не только о дизайне, но и о том, как посетитель быстрее поймёт ваше предложение — и как сделать контакт легче.",

    pricingOverline: "Цены",
    pricingTitle: "Два понятных пакета для профессионального старта.",
    starterTag: "Чёткий старт",
    starterTitle: "Starter",
    starterText:
      "Для малого бизнеса, которому нужен современный и понятный сайт.",
    starterList1: "1 landing page",
    starterList2: "индивидуальный дизайн",
    starterList3: "адаптация под телефон",
    starterList4: "контакты / WhatsApp",
    starterBtn: "Выбрать этот пакет",

    businessTag: "Больше эффекта",
    businessTitle: "Business",
    businessText:
      "Для предпринимателей, которые хотят выглядеть профессиональнее и сильнее показать свои услуги.",
    businessList1: "несколько секций",
    businessList2: "более сильная визуальная подача",
    businessList3: "FAQ / цены / блоки доверия",
    businessList4: "помощь с доменом",
    businessList5: "добавление адреса / маршрута",
    businessBtn: "Запросить Business",

    aboutOverline: "Обо мне",
    aboutTitle: "Я создаю сайты, которые ясно и профессионально показывают ваше предложение.",
    aboutLead:
      "Я Мария, и я помогаю предпринимателям выглядеть в интернете современнее, понятнее и заметнее.",
    aboutText1:
      "Я соединяю дизайн, структуру и понятную подачу — чтобы посетитель быстрее понимал, что вы предлагаете и как с вами связаться.",
    aboutStrip1: "индивидуальные сайты",
    aboutStrip2: "понятная структура",
    aboutStrip3: "лёгкий контакт",
    aboutExtraTitle: "Дополнительная помощь с Google Sheets",
    aboutExtraText:
      "Если хотите, я дополнительно могу помочь сделать таблицы более понятными, практичными и удобными для повседневной работы.",
    aboutExtraPrice: "от 75 €",
    aboutFloat1Label: "Сайт",
    aboutFloat1Value: "ясно и современно",
    aboutFloat2Label: "Google Sheets",
    aboutFloat2Value: "дополнительно",
    aboutFloat3Label: "Цель",
    aboutFloat3Value: "больше ясности",

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

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("flowClarityLang", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const savedLang = localStorage.getItem("flowClarityLang") || "de";
applyLanguage(savedLang);

window.addEventListener("load", () => {
  setTimeout(() => {
    if (intro) intro.classList.add("hide");
  }, 1600);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => observer.observe(element));

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

/* tilt + magnetic effect */
const interactiveCards = document.querySelectorAll(".tilt-card, .magnetic-card");

interactiveCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* animated background */
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
    const count = window.innerWidth < 768 ? 48 : 82;

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
      if (p.x > window.innerWidth + 24) p.x = -24;
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