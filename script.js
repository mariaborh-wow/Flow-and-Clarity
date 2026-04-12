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
    navPortfolio: "Portfolio",
    navPricing: "Preise",
    navAbout: "Über mich",
    navFaq: "FAQ",
    navContact: "Kontakt",

    heroBadge: "Webseiten & digitale Struktur für Selbstständige",
    heroTitle: "Ich bringe Ihr Angebot näher an Ihre potenziellen Kunden.",
    heroText:
      "Individuelle Webseiten, klare Struktur und durchdachte Google Sheets für kleine Unternehmen, Selbstständige und lokale Dienstleistungen.",
    heroBtn1: "Projekt anfragen",
    heroBtn2: "Preise ansehen",
    meta2: "für Handy und Desktop",
    meta3: "klarer Einstieg für kleine Businesses",
    metaSheets: "Google Sheets Hilfe & Struktur",

    visualEyebrow: "Was ich für Ihr Business löse",
    visualTitle: "Mehr Klarheit. Mehr Wirkung. Weniger Distanz zum Kunden.",
    visualList1: "professioneller Online-Auftritt",
    visualList2: "leichter Kontakt für potenzielle Kunden",
    visualList3: "übersichtliche digitale Struktur",
    visualList4: "individuelle Umsetzung statt Standard-Vorlage",
    floatingPill1: "Webseiten",
    floatingPill2: "Google Sheets",
    floatingPill3: "Struktur",
    floatingPill4: "Klarheit",

    visualsOverline: "Vorteile",
    visualsTitle: "Klare visuelle Vorteile für einen starken ersten Eindruck.",
    visualCard1Title: "Mehr Vertrauen",
    visualCard1Text:
      "Ein moderner Auftritt wirkt professionell und macht Ihr Angebot glaubwürdiger.",
    visualCard2Title: "Mehr Klarheit",
    visualCard2Text:
      "Besucher verstehen schneller, was Sie anbieten und warum sie Sie wählen sollten.",
    visualCard3Title: "Mehr Ordnung",
    visualCard3Text:
      "Strukturierte Inhalte und Google Sheets helfen Ihnen auch intern sauberer zu arbeiten.",
    visualCard4Title: "Mehr Wirkung",
    visualCard4Text:
      "Design, Text und Logik greifen ineinander und bringen Ihr Business stärker nach vorn.",

    trustOverline: "Für wen",
    trustTitle:
      "Für Selbstständige, die professionell wirken wollen – ohne unnötigen Aufwand.",
    trustCard1Title: "Lokale Dienstleistungen",
    trustCard1Text:
      "Für Anbieter, die online klar, modern und vertrauenswürdig auftreten wollen.",
    trustCard2Title: "Beauty, Beratung, Handwerk",
    trustCard2Text:
      "Für kleine Businesses, die mehr Übersicht und einen besseren ersten Eindruck brauchen.",
    trustCard3Title: "Startende Selbstständige",
    trustCard3Text:
      "Für alle, die nicht bei null sichtbar bleiben möchten, sondern professionell starten wollen.",

    servicesOverline: "Leistungen",
    servicesTitle:
      "Ich helfe dabei, Ihr Angebot sichtbar, verständlich und geordnet zu machen.",
    service1Title: "Individuelle Websites",
    service1Text:
      "Moderne Webseiten für Selbstständige – abgestimmt auf Ihr Angebot, Ihre Zielgruppe und Ihre Wirkung.",
    service2Title: "Mobile & Desktop Optimierung",
    service2Text:
      "Ihr Auftritt funktioniert sauber auf dem Handy und am Computer – klar, schnell und angenehm.",
    service3Title: "Google Sheets Hilfe & Struktur",
    service3Text:
      "Ich helfe dabei, Ordnung in Tabellen zu bringen oder eine übersichtliche Arbeits-Tabelle für Ihren Alltag zu erstellen.",
    service3Price: "ab 75 €",
    service4Title: "Klare Kundenführung",
    service4Text:
      "Ich denke nicht nur an Design, sondern daran, wie Besucher schnell verstehen, was Sie anbieten.",

    portfolioOverline: "Portfolio",
    portfolioTitle: "Zwei Projekte, die bereits Wirkung zeigen.",
    portfolioSasText:
      "Moderner Auftritt für einen Autoteile-Anbieter mit klarer Struktur, WhatsApp-Anfrage und starker Wirkung.",
    portfolioKristinaText:
      "Eleganter, ruhiger und vertrauensvoller Auftritt mit femininem Stil und klarer Benutzerführung.",

    pricingOverline: "Preise",
    pricingTitle: "Zwei klare Pakete für einen professionellen Start.",
    starterTag: "Klarer Einstieg",
    starterTitle: "Starter",
    starterText:
      "Für kleine Businesses, die eine moderne, saubere und klare Online-Präsenz brauchen.",
    starterList1: "1 Landing Page",
    starterList2: "individuelles Design",
    starterList3: "mobile Optimierung",
    starterList4: "Kontakt / WhatsApp Integration",
    starterList5: "Basis-Animationen & ruhige Effekte",
    starterList6: "Preis klar ab 280 €",
    starterBtn: "Dieses Paket anfragen",

    businessTag: "Mehr Wirkung",
    businessTitle: "Business",
    businessText:
      "Für Selbstständige, die professioneller auftreten und ihr Angebot stärker präsentieren möchten.",
    businessList1: "mehrere Sektionen / erweiterte Struktur",
    businessList2: "individuelle visuelle Gestaltung",
    businessList3: "FAQ / Preise / Vertrauenselemente",
    businessList4: "stärkere Benutzerführung",
    businessList5: "Hilfe bei Struktur und Textaufbau",
    businessList6: "Hilfe bei Domain-Anbindung",
    businessList7: "Standort / Route / Lage einbauen",
    businessBtn: "Business anfragen",
    pricingNote:
      "Zusätzliche Google Sheets Unterstützung oder weitere Blöcke können individuell ergänzt werden.",

    aboutOverline: "Über mich",
    aboutTitle:
      "Ich arbeite nicht nur schön – sondern mit Blick auf Wirkung und Klarheit.",
    aboutText1:
      "Ich bin Maria und ich entwickle Webseiten für Selbstständige und kleine Businesses. Dabei achte ich nicht nur auf das Design, sondern auch darauf, wie Ihr Angebot nach außen wirkt.",
    aboutText2:
      "Ich nehme mir Zeit für Ihr Anliegen, denke mich in Ihren Bedarf hinein und entwickle Lösungen, die klar, modern und sinnvoll aufgebaut sind.",
    aboutText3:
      "Neben Webseiten helfe ich auch dabei, Ordnung in Google Sheets zu bringen oder eine passende Arbeits-Tabelle für Ihren Alltag zu erstellen.",
    aboutText4:
      "So wird es für Sie einfacher, Anfragen, Kunden oder interne Abläufe übersichtlich und praktisch zu organisieren.",
    aboutCard1Label: "Fokus",
    aboutCard1Value: "klarer Auftritt",
    aboutCard2Label: "Ansatz",
    aboutCard2Value: "individuell statt Standard",
    aboutCard3Label: "Ziel",
    aboutCard3Value: "Verbindung zu Ihren Kunden",
    aboutCard4Label: "Arbeitsweise",
    aboutCard4Value: "ruhig, klar und professionell",

    faqOverline: "FAQ",
    faqTitle: "Antworten auf die wichtigsten Fragen.",
    faq1Q: "Wie läuft die Zusammenarbeit ab?",
    faq1A:
      "Sie schreiben mir Ihr Anliegen, ich schaue mir Ihren Bedarf an und wir finden eine passende Lösung für Ihren Start.",
    faq2Q: "Arbeiten Sie nur mit großen Projekten?",
    faq2A:
      "Nein. Gerade kleine und mittlere Projekte für Selbstständige und lokale Businesses stehen im Fokus.",
    faq3Q: "Brauche ich schon fertige Texte?",
    faq3A:
      "Nicht unbedingt. Ich kann Ihnen auch bei Struktur, Formulierungen und klarer Darstellung helfen.",
    faq4Q: "Können auch Google Sheets Lösungen ergänzt werden?",
    faq4A:
      "Ja. Einfache Tabellen für Struktur, Übersicht und Arbeitsabläufe können zusätzlich umgesetzt werden.",
    faq5Q: "Was ist eine Domain und wofür braucht man sie?",
    faq5A:
      "Eine Domain ist Ihre Webadresse im Internet, zum Beispiel ihrname.de. Sie hilft dabei, dass Ihr Business professionell gefunden wird und Ihre Website leicht erreichbar ist.",

    contactOverline: "Kontakt",
    contactTitle: "Schreiben Sie mir direkt.",
    contactText:
      "Wenn Sie eine Website, mehr Struktur oder eine klare digitale Lösung für Ihr Business suchen, können Sie mir direkt schreiben.",
    contactMailLabel: "E-Mail",
    contactPhoneLabel: "Telefon",
    contactWhatsappValue: "Nachricht senden",
    chatTitle: "Frage direkt senden",
    formName: "Name",
    formEmail: "E-Mail oder WhatsApp",
    formMessage: "Nachricht",
    formBtn: "Anfrage vorbereiten",
    formNote: "Beim Klick wird Ihre Anfrage als E-Mail vorbereitet.",
    footerText: "Webseiten & digitale Struktur für Selbstständige"
  },

  ru: {
    introTitle: "Я покажу вашу ценность людям.",
    navServices: "Услуги",
    navPortfolio: "Портфолио",
    navPricing: "Цены",
    navAbout: "Обо мне",
    navFaq: "FAQ",
    navContact: "Контакт",

    heroBadge: "Сайты и цифровая структура для предпринимателей",
    heroTitle: "Я помогаю приблизить ваше предложение к вашим потенциальным клиентам.",
    heroText:
      "Индивидуальные сайты, понятная структура и продуманные Google Sheets для малого бизнеса, предпринимателей и локальных услуг.",
    heroBtn1: "Обсудить проект",
    heroBtn2: "Посмотреть цены",
    meta2: "для телефона и компьютера",
    meta3: "понятный старт для малого бизнеса",
    metaSheets: "помощь и порядок в Google Sheets",

    visualEyebrow: "Что я решаю для вашего бизнеса",
    visualTitle: "Больше ясности. Больше эффекта. Меньше дистанции с клиентом.",
    visualList1: "профессиональное онлайн-присутствие",
    visualList2: "удобный контакт для потенциальных клиентов",
    visualList3: "понятная цифровая структура",
    visualList4: "индивидуальная реализация вместо шаблона",
    floatingPill1: "Сайты",
    floatingPill2: "Google Sheets",
    floatingPill3: "Структура",
    floatingPill4: "Ясность",

    visualsOverline: "Преимущества",
    visualsTitle: "Понятные визуальные преимущества для сильного первого впечатления.",
    visualCard1Title: "Больше доверия",
    visualCard1Text:
      "Современная подача делает ваше предложение более профессиональным и убедительным.",
    visualCard2Title: "Больше ясности",
    visualCard2Text:
      "Посетитель быстрее понимает, что вы предлагаете и почему стоит выбрать именно вас.",
    visualCard3Title: "Больше порядка",
    visualCard3Text:
      "Структурированный контент и Google Sheets помогают и внутри бизнеса работать чище.",
    visualCard4Title: "Больше эффекта",
    visualCard4Text:
      "Дизайн, текст и логика работают вместе и сильнее продвигают ваш бизнес.",

    trustOverline: "Для кого",
    trustTitle:
      "Для предпринимателей, которые хотят выглядеть профессионально — без лишней сложности.",
    trustCard1Title: "Локальные услуги",
    trustCard1Text:
      "Для тех, кто хочет выглядеть в интернете ясно, современно и вызывать доверие.",
    trustCard2Title: "Beauty, консультации, услуги",
    trustCard2Text:
      "Для малого бизнеса, которому нужна лучшая подача и больше порядка.",
    trustCard3Title: "Начинающие предприниматели",
    trustCard3Text:
      "Для тех, кто не хочет оставаться невидимым и хочет стартовать профессионально.",

    servicesOverline: "Услуги",
    servicesTitle:
      "Я помогаю сделать ваше предложение заметным, понятным и структурированным.",
    service1Title: "Индивидуальные сайты",
    service1Text:
      "Современные сайты для предпринимателей — под ваш запрос, аудиторию и нужное впечатление.",
    service2Title: "Оптимизация под телефон и компьютер",
    service2Text:
      "Ваш сайт будет аккуратно и удобно работать и на телефоне, и на компьютере.",
    service3Title: "Помощь и структура в Google Sheets",
    service3Text:
      "Я могу помочь навести порядок в таблицах или сделать для вас удобную рабочую таблицу для повседневной работы.",
    service3Price: "от 75 €",
    service4Title: "Понятный путь для клиента",
    service4Text:
      "Я думаю не только о дизайне, но и о том, как посетитель быстро поймет, что вы предлагаете.",

    portfolioOverline: "Портфолио",
    portfolioTitle: "Два проекта, которые уже дают нужное впечатление.",
    portfolioSasText:
      "Современная подача для поставщика автозапчастей с чёткой структурой, WhatsApp-запросом и сильным образом.",
    portfolioKristinaText:
      "Элегантная, спокойная и вызывающая доверие подача с женственным стилем и понятной логикой.",

    pricingOverline: "Цены",
    pricingTitle: "Два понятных пакета для профессионального старта.",
    starterTag: "Чёткий старт",
    starterTitle: "Starter",
    starterText:
      "Для малого бизнеса, которому нужен современный, чистый и понятный онлайн-образ.",
    starterList1: "1 landing page",
    starterList2: "индивидуальный дизайн",
    starterList3: "адаптация под телефон",
    starterList4: "контакты / WhatsApp",
    starterList5: "базовые анимации и спокойные эффекты",
    starterList6: "чёткая цена от 280 €",
    starterBtn: "Выбрать этот пакет",

    businessTag: "Больше эффекта",
    businessTitle: "Business",
    businessText:
      "Для предпринимателей, которые хотят выглядеть профессиональнее и сильнее подать свои услуги.",
    businessList1: "несколько секций / расширенная структура",
    businessList2: "индивидуальный визуальный подход",
    businessList3: "FAQ / цены / блоки доверия",
    businessList4: "более сильная логика подачи",
    businessList5: "помощь со структурой и текстом",
    businessList6: "помощь с подключением домена",
    businessList7: "добавление локации / маршрута / адреса",
    businessBtn: "Запросить Business",
    pricingNote:
      "Поддержка по Google Sheets или дополнительные блоки могут добавляться индивидуально.",

    aboutOverline: "Обо мне",
    aboutTitle:
      "Я работаю не просто красиво — а с фокусом на результат и ясность.",
    aboutText1:
      "Я Мария, и я создаю сайты для предпринимателей и малого бизнеса. Я думаю не только о дизайне, но и о том, как ваше предложение воспринимается со стороны.",
    aboutText2:
      "Я внимательно вникаю в ваш запрос и создаю решения, которые выглядят современно, логично и профессионально.",
    aboutText3:
      "Помимо сайтов, я также могу помочь вам навести порядок в Google Sheets или сделать для вас удобную рабочую таблицу.",
    aboutText4:
      "Так вам будет проще организовать заявки, клиентов и внутренние процессы понятно и удобно.",
    aboutCard1Label: "Фокус",
    aboutCard1Value: "понятный образ бизнеса",
    aboutCard2Label: "Подход",
    aboutCard2Value: "индивидуально, а не шаблонно",
    aboutCard3Label: "Цель",
    aboutCard3Value: "связь с вашими клиентами",
    aboutCard4Label: "Стиль работы",
    aboutCard4Value: "спокойно, ясно и профессионально",

    faqOverline: "FAQ",
    faqTitle: "Ответы на важные вопросы.",
    faq1Q: "Как проходит работа?",
    faq1A:
      "Вы пишете мне ваш запрос, я смотрю, что вам нужно, и мы подбираем подходящее решение для старта.",
    faq2Q: "Вы работаете только с большими проектами?",
    faq2A:
      "Нет. Как раз небольшие и средние проекты для предпринимателей и локального бизнеса — в центре внимания.",
    faq3Q: "Нужны ли уже готовые тексты?",
    faq3A:
      "Не обязательно. Я могу помочь и со структурой, и с формулировками, и с подачей.",
    faq4Q: "Можно ли добавить Google Sheets решения?",
    faq4A:
      "Да. Простые таблицы для структуры, порядка и рабочих процессов тоже можно сделать.",
    faq5Q: "Что такое домен и зачем он нужен?",
    faq5A:
      "Домен — это адрес вашего сайта в интернете, например ihrname.de. Он помогает вашему бизнесу выглядеть профессионально, легче находиться и быть удобным для клиентов.",

    contactOverline: "Контакт",
    contactTitle: "Напишите мне напрямую.",
    contactText:
      "Если вам нужен сайт, больше структуры или понятное цифровое решение для вашего бизнеса — можете написать мне сразу.",
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
    if (intro) {
      intro.classList.add("hide");
    }
  }, 1700);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.16
  }
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

    const mailto = `mailto:Maria.webhilfe@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
}

/* Animated background: symbols + changing digits + light cells */
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
    const count = window.innerWidth < 768 ? 55 : 95;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 15 + 10,
        speedY: Math.random() * 0.22 + 0.06,
        speedX: (Math.random() - 0.5) * 0.14,
        opacity: Math.random() * 0.12 + 0.03,
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
          opacity: Math.random() * 0.028 + 0.008,
          pulse: Math.random() * Math.PI * 2
        });
      }
    }
  }

  function drawCells(time) {
    cells.forEach((cell) => {
      const pulseOpacity = cell.opacity + Math.sin(time * 1.2 + cell.pulse) * 0.008;
      ctx.fillStyle = `rgba(105, 118, 134, ${Math.max(0.006, pulseOpacity)})`;
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
