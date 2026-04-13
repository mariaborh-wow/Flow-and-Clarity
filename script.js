const intro = document.getElementById("intro");
const revealElements = document.querySelectorAll(".reveal");
const langButtons = document.querySelectorAll(".lang-btn");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.getElementById("contactForm");
const faqItems = document.querySelectorAll(".faq-item");
const scrollProgress = document.getElementById("scrollProgress");
const heroBg = document.getElementById("heroBg");
const heroStack = document.getElementById("heroStack");
const sasVisual = document.getElementById("sasVisual");

const magneticElements = document.querySelectorAll(".magnetic");
const tiltCards = document.querySelectorAll(".tilt-card");
const spotlightCards = document.querySelectorAll(".spotlight-card");

const translations = {
  de: {
    introTitle: "Ich mache Ihre Wirkung sichtbar.",

    navServices: "Leistungen",
    navCase: "SAS PARTS",
    navPricing: "Preise",
    navAbout: "Über mich",
    navFaq: "FAQ",
    navContact: "Kontakt",

    heroEyebrow: "Websites ab 280 € • klar • stark • modern",
    heroTitle: "Websites, die nicht nur da sind — sondern hängen bleiben.",
    heroSubtitle:
      "Für Selbstständige und kleine Businesses, die online professionell, modern und auffallend auftreten wollen — ohne billig oder chaotisch zu wirken.",
    heroBtn1: "Projekt anfragen",
    heroBtn2: "SAS PARTS ansehen",
    heroChip1: "Premium Look",
    heroChip2: "Scroll-Effekte",
    heroChip3: "klare Nutzerführung",
    heroCard2: "soll sitzen",

    trust1Title: "Auffälliger erster Eindruck",
    trust1Text:
      "Nicht generisch. Nicht langweilig. Sondern visuell klar und mit Charakter.",
    trust2Title: "Struktur, die verkauft",
    trust2Text:
      "Besucher verstehen schneller, was angeboten wird und was der nächste Schritt ist.",
    trust3Title: "Modern statt “08/15”",
    trust3Text:
      "Scroll, Tiefe, Dynamik und hochwertige Details — aber ohne nervige Überladung.",

    servicesOverline: "Leistungen",
    servicesTitle: "Was Ihre Website bei mir bekommen kann.",
    service1Title: "Individuelle Website",
    service1Text:
      "Eine Website, die nicht nach Baukasten aussieht, sondern nach echter Marke.",
    service2Title: "Klare Nutzerführung",
    service2Text:
      "Aufbau, Texte und Call-to-Actions so, dass Besucher schneller handeln.",
    service3Title: "Google Sheets optional",
    service3Text:
      "Wenn gewünscht, ergänze ich die Website mit sinnvoller digitaler Struktur für Ihren Alltag.",
    service3Price: "ab 75 €",

    sasOverline: "Featured Showcase",
    sasTitle: "SAS PARTS — direkt, maskulin, modern und auf Kontakt gebaut.",
    sasText:
      "Statt das Projekt wie ein klassisches Portfolio zu zeigen, wird es hier wie ein starker Referenz-Case inszeniert: visuell, präsent und mit echtem Zug nach vorn.",
    sasPoint1: "klare Hero-Wirkung",
    sasPoint2: "WhatsApp-Fokus für direkte Anfragen",
    sasPoint3: "dunkle, hochwertige Performance-Optik",
    sasBtn: "So etwas will ich auch",

    pricingOverline: "Preise",
    pricingTitle: "Klar. Direkt. Ohne unnötiges Theater.",
    websiteTag: "Website",
    websiteTitle: "ab 280 €",
    websitePriceNote: "einmalige Zahlung",
    websiteText:
      "Für Selbstständige und kleine Businesses, die online hochwertiger wirken wollen.",
    websiteList1: "individuelles Design",
    websiteList2: "mobil & Desktop optimiert",
    websiteList3: "klare Struktur",
    websiteList4: "Kontakt / WhatsApp Integration",
    websiteList5: "moderne visuelle Wirkung",
    websiteBtn: "Website anfragen",

    sheetsTag: "Google Sheets",
    sheetsTitle: "ab 75 €",
    sheetsPriceNote: "je nach Aufwand",
    sheetsText:
      "Struktur, Ordnung und Übersicht für Tabellen, Abläufe und Alltag.",
    sheetsList1: "klare Tabellenstruktur",
    sheetsList2: "individuelle Lösungen",
    sheetsList3: "besserer Überblick",
    sheetsList4: "einfach aufgebaut",
    sheetsBtn: "Hilfe anfragen",

    aboutOverline: "Über mich",
    aboutTitle:
      "Ich erstelle Websites, die nicht nur ordentlich aussehen — sondern wirken.",
    aboutLead:
      "Ich bin Maria und verbinde Design, Klarheit und moderne Nutzerführung für Selbstständige.",
    aboutText1:
      "Das Ziel ist nicht einfach “eine Website zu haben”, sondern online so aufzutreten, dass Vertrauen, Qualität und Stil sofort spürbar werden.",
    aboutStrip1: "individuelle Websites",
    aboutStrip2: "klare Struktur",
    aboutStrip3: "leichter Kontakt",
    aboutFloat1Label: "Website",
    aboutFloat1Value: "klar & modern",
    aboutFloat2Label: "Google Sheets",
    aboutFloat2Value: "optional dazu",
    aboutFloat3Label: "Ziel",
    aboutFloat3Value: "mehr Wirkung",

    faqOverline: "FAQ",
    faqTitle: "Fragen, die wirklich zählen.",
    faq1Q: "Was kostet eine Website?",
    faq1A:
      "Eine einfache Website startet ab 280 €. Der Endpreis hängt vom Umfang und den gewünschten Funktionen ab.",
    faq2Q: "Kann die Website später erweitert werden?",
    faq2A:
      "Ja. Sie kann später ergänzt, angepasst und weiterentwickelt werden.",
    faq3Q: "Helfen Sie bei Texten und Struktur?",
    faq3A:
      "Ja. Wenn nötig, helfe ich bei Aufbau, Klarheit und Nutzerführung.",
    faq4Q: "Helfen Sie auch mit Domain und Technik?",
    faq4A:
      "Ja. Je nach Projekt unterstütze ich auch bei Domain und technischer Einrichtung.",

    contactOverline: "Kontakt",
    contactTitle: "Schreiben Sie mir direkt.",
    contactText:
      "Wenn Sie etwas Moderneres, Auffälligeres und Klareres für Ihr Business wollen, schreiben Sie mir direkt.",
    contactMailLabel: "E-Mail",
    contactPhoneLabel: "Telefon",
    contactWhatsappValue: "Nachricht senden",
    chatTitle: "Frage direkt senden",
    formName: "Name",
    formEmail: "E-Mail oder WhatsApp",
    formMessage: "Nachricht",
    formBtn: "Anfrage vorbereiten",
    formNote: "Beim Klick wird Ihre Anfrage als E-Mail vorbereitet.",

    footerText: "Websites mit Wirkung für Selbstständige"
  },

  ru: {
    introTitle: "Я делаю вашу подачу заметной.",

    navServices: "Услуги",
    navCase: "SAS PARTS",
    navPricing: "Цены",
    navAbout: "Обо мне",
    navFaq: "FAQ",
    navContact: "Контакт",

    heroEyebrow: "Сайты от 280 € • ясно • сильно • современно",
    heroTitle: "Сайты, которые не просто существуют — а запоминаются.",
    heroSubtitle:
      "Для предпринимателей и малого бизнеса, которые хотят выглядеть в интернете профессионально, современно и заметно — без ощущения дешёвого или хаотичного сайта.",
    heroBtn1: "Обсудить проект",
    heroBtn2: "Посмотреть SAS PARTS",
    heroChip1: "Премиум-подача",
    heroChip2: "Scroll-эффекты",
    heroChip3: "понятная структура",
    heroCard2: "должен цеплять",

    trust1Title: "Сильное первое впечатление",
    trust1Text:
      "Не шаблонно. Не скучно. А визуально чётко и с характером.",
    trust2Title: "Структура, которая продаёт",
    trust2Text:
      "Посетители быстрее понимают, что ты предлагаешь и куда им нажать дальше.",
    trust3Title: "Современно, а не “как у всех”",
    trust3Text:
      "Скролл, глубина, динамика и сильные детали — без визуального бардака.",

    servicesOverline: "Услуги",
    servicesTitle: "Что может получить ваш сайт у меня.",
    service1Title: "Индивидуальный сайт",
    service1Text:
      "Сайт, который выглядит не как шаблон, а как настоящий бренд.",
    service2Title: "Понятная логика для клиента",
    service2Text:
      "Структура, тексты и блоки выстроены так, чтобы посетитель быстрее действовал.",
    service3Title: "Google Sheets дополнительно",
    service3Text:
      "При желании я дополняю сайт понятной цифровой структурой для повседневной работы.",
    service3Price: "от 75 €",

    sasOverline: "Главный showcase",
    sasTitle: "SAS PARTS — прямо, брутально, современно и с упором на контакт.",
    sasText:
      "Вместо классического “портфолио” этот проект показан как сильный референс-кейс: визуально, уверенно и с правильным акцентом.",
    sasPoint1: "сильный hero-экран",
    sasPoint2: "фокус на WhatsApp для быстрых заявок",
    sasPoint3: "тёмная дорогая performance-эстетика",
    sasBtn: "Хочу что-то такое же",

    pricingOverline: "Цены",
    pricingTitle: "Чётко. Прямо. Без лишнего цирка.",
    websiteTag: "Сайт",
    websiteTitle: "от 280 €",
    websitePriceNote: "разовая оплата",
    websiteText:
      "Для предпринимателей и малого бизнеса, которые хотят выглядеть в интернете дороже и сильнее.",
    websiteList1: "индивидуальный дизайн",
    websiteList2: "адаптация под телефон и компьютер",
    websiteList3: "понятная структура",
    websiteList4: "контакт / WhatsApp интеграция",
    websiteList5: "современная визуальная подача",
    websiteBtn: "Заказать сайт",

    sheetsTag: "Google Sheets",
    sheetsTitle: "от 75 €",
    sheetsPriceNote: "зависит от задачи",
    sheetsText:
      "Структура, порядок и удобство для таблиц, процессов и ежедневной работы.",
    sheetsList1: "понятная структура таблиц",
    sheetsList2: "индивидуальные решения",
    sheetsList3: "лучший обзор",
    sheetsList4: "простая логика",
    sheetsBtn: "Запросить помощь",

    aboutOverline: "Обо мне",
    aboutTitle:
      "Я создаю сайты, которые не просто выглядят аккуратно — а реально работают на впечатление.",
    aboutLead:
      "Я Мария и соединяю дизайн, ясность и современную логику для предпринимателей.",
    aboutText1:
      "Цель не в том, чтобы просто “иметь сайт”, а в том, чтобы онлайн сразу чувствовались доверие, качество и стиль.",
    aboutStrip1: "индивидуальные сайты",
    aboutStrip2: "понятная структура",
    aboutStrip3: "лёгкий контакт",
    aboutFloat1Label: "Сайт",
    aboutFloat1Value: "ясно и современно",
    aboutFloat2Label: "Google Sheets",
    aboutFloat2Value: "дополнительно",
    aboutFloat3Label: "Цель",
    aboutFloat3Value: "больше эффекта",

    faqOverline: "FAQ",
    faqTitle: "Вопросы, которые действительно важны.",
    faq1Q: "Сколько стоит сайт?",
    faq1A:
      "Простой сайт начинается от 280 €. Финальная цена зависит от объёма и нужных функций.",
    faq2Q: "Можно ли расширить сайт позже?",
    faq2A:
      "Да. Его можно дополнять, менять и развивать дальше.",
    faq3Q: "Вы помогаете с текстами и структурой?",
    faq3A:
      "Да. Если нужно, я помогаю с логикой, ясностью и подачей.",
    faq4Q: "Вы помогаете с доменом и технической частью?",
    faq4A:
      "Да. В зависимости от проекта я могу помочь и с доменом, и с базовой настройкой.",

    contactOverline: "Контакт",
    contactTitle: "Напишите мне напрямую.",
    contactText:
      "Если вы хотите для бизнеса что-то современнее, заметнее и сильнее — напишите мне сразу.",
    contactMailLabel: "Почта",
    contactPhoneLabel: "Телефон",
    contactWhatsappValue: "Отправить сообщение",
    chatTitle: "Отправить вопрос",
    formName: "Имя",
    formEmail: "E-Mail или WhatsApp",
    formMessage: "Сообщение",
    formBtn: "Подготовить запрос",
    formNote: "При нажатии откроется подготовленное письмо.",

    footerText: "Сайты с эффектом для предпринимателей"
  }
};

/* language */
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
  }, 1500);
});

/* reveal observer */
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
function setActiveNavLink() {
  const scrollY = window.scrollY + 160;

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

/* scroll progress */
function updateScrollProgress() {
  if (!scrollProgress) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  scrollProgress.style.width = `${Math.min(progress, 100)}%`;
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

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

/* faq - only one open */
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

/* magnetic buttons */
magneticElements.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});

/* tilt cards */
tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* spotlight cards */
spotlightCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  });
});

/* hero + sas parallax */
function updateParallax() {
  const scrollY = window.scrollY;

  if (heroBg) {
    heroBg.style.transform = `scale(1.06) translateY(${scrollY * 0.16}px)`;
  }

  if (heroStack && window.innerWidth > 900) {
    heroStack.style.transform = `translateY(${scrollY * -0.05}px)`;
  }

  if (sasVisual && window.innerWidth > 900) {
    const sasRect = sasVisual.getBoundingClientRect();
    const offset = sasRect.top / window.innerHeight;

    sasVisual.style.transform = `translateY(${offset * -22}px)`;
  }
}

window.addEventListener("scroll", updateParallax, { passive: true });
window.addEventListener("resize", updateParallax);
updateParallax();

/* smoother entrance for hero stack */
window.addEventListener("load", () => {
  if (heroStack) {
    heroStack.animate(
      [
        { opacity: 0, transform: "translateY(28px) scale(0.96)" },
        { opacity: 1, transform: "translateY(0) scale(1)" }
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
        delay: 350
      }
    );
  }
});

/* prevent weird stuck transforms on touch devices */
window.addEventListener("touchstart", () => {
  if (window.innerWidth < 900) {
    tiltCards.forEach((card) => (card.style.transform = ""));
    magneticElements.forEach((el) => (el.style.transform = ""));
  }
}, { passive: true });