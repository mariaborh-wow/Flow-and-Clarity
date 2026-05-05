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
const sasVisual = document.getElementById("sasVisual");

const magneticElements = document.querySelectorAll(".magnetic");
const tiltCards = document.querySelectorAll(".tilt-card");
const spotlightCards = document.querySelectorAll(".spotlight-card");
const countUpElements = document.querySelectorAll(".count-up");

const translations = {
  de: {
    introTitle: "Ich mache Ihre Wirkung sichtbar.",

    navServices: "Leistungen",
    navCase: "Referenz",
    navPricing: "Preise",
    navAbout: "Über mich",
    navFaq: "FAQ",
    navContact: "Kontakt",

    pricingTitle: "Klar. Direkt. Auf Wirkung ausgelegt.",
    pricingSubline: "Einmalige Zahlung • kein Abo • keine versteckten Kosten",

    websiteTag: "Website",
    websiteTitle: "ab 230 €",
    websitePriceNote: "Preis abhängig von Umfang und Funktion",
    websiteText: "Für Selbstständige und kleine Businesses, die online moderner wirken und mehr Anfragen bekommen wollen.",
    websiteList1: "individuelles Design",
    websiteList2: "mobil & Desktop optimiert",
    websiteList3: "klare Struktur, die besser verkauft",
    websiteList4: "Kontakt / WhatsApp Integration",
    websiteList5: "moderne Effekte & Premium Look",
    websiteList6: "auf Anfragen optimiert",
    websiteBtn: "Website anfragen",

    videoTag: "KI Video Werbung",
    videoTitle: "ab 80 €",
    videoPriceNote: "je nach Aufwand und Länge",
    videoText: "Kurze, moderne Werbevideos für Instagram, TikTok und Social Media.",
    videoList1: "individuelles Konzept",
    videoList2: "KI Visuals + Story",
    videoList3: "perfekt für Instagram & TikTok",
    videoList4: "Aufmerksamkeit in Sekunden",
    videoBtn: "Video anfragen",

    bundleTag: "Website + KI Werbung",
    bundleTitle: "ab 280 €",
    bundlePriceNote: "Vorteilspaket",
    bundleText: "Für alle, die direkt stärker starten wollen: moderner Webauftritt plus KI Werbevideo für Social Media.",
    bundleList1: "Website ab 230 €",
    bundleList2: "1 KI Werbevideo inklusive",
    bundleList3: "stimmige visuelle Richtung",
    bundleList4: "ideal für Start & Sichtbarkeit",
    bundleBtn: "Paket anfragen",

    sheetsTag: "Google Sheets",
    sheetsTitle: "ab 50 €",
    sheetsPriceNote: "je nach Aufgabe",
    sheetsText: "Ordnung, Struktur und Übersicht für Tabellen, Abläufe, Kundenlisten oder den Arbeitsalltag.",
    sheetsList1: "klare Tabellenstruktur",
    sheetsList2: "individuelle Lösungen",
    sheetsList3: "besserer Überblick",
    sheetsList4: "einfach aufgebaut",
    sheetsBtn: "Hilfe anfragen",

    faq3Q: "Kann ich auch ein KI Werbevideo bestellen?",
    faq3A: "Ja. KI Werbevideos starten ab 80 €. Der Preis hängt von Länge, Stil, Aufwand und gewünschter Umsetzung ab.",

    footerText: "Websites, KI Videos & digitale Struktur für Selbstständige"
  },

  ru: {
    introTitle: "Я делаю вашу подачу заметной.",

    navServices: "Услуги",
    navCase: "Пример",
    navPricing: "Цены",
    navAbout: "Обо мне",
    navFaq: "FAQ",
    navContact: "Контакт",

    pricingTitle: "Чётко. Просто. На результат.",
    pricingSubline: "Разовая оплата • без абонемента • без скрытых платежей",

    websiteTag: "Сайт",
    websiteTitle: "от 230 €",
    websitePriceNote: "цена зависит от объёма и функций",
    websiteText: "Для предпринимателей и малого бизнеса, которые хотят выглядеть современнее и получать больше заявок.",
    websiteList1: "индивидуальный дизайн",
    websiteList2: "адаптация под телефон и компьютер",
    websiteList3: "понятная структура, которая лучше продаёт",
    websiteList4: "контакт / WhatsApp интеграция",
    websiteList5: "современные эффекты и премиум-вид",
    websiteList6: "ориентация на заявки",
    websiteBtn: "Запросить сайт",

    videoTag: "KI видео-реклама",
    videoTitle: "от 80 €",
    videoPriceNote: "зависит от сложности и длины",
    videoText: "Короткие современные рекламные видео для Instagram, TikTok и соцсетей.",
    videoList1: "индивидуальная идея",
    videoList2: "KI-визуалы + история",
    videoList3: "под Instagram и TikTok",
    videoList4: "внимание за первые секунды",
    videoBtn: "Запросить видео",

    bundleTag: "Сайт + KI реклама",
    bundleTitle: "от 280 €",
    bundlePriceNote: "выгодный пакет",
    bundleText: "Для тех, кто хочет стартовать сильнее: современный сайт плюс KI рекламное видео для соцсетей.",
    bundleList1: "сайт от 230 €",
    bundleList2: "1 KI рекламное видео включено",
    bundleList3: "единый визуальный стиль",
    bundleList4: "идеально для старта и видимости",
    bundleBtn: "Запросить пакет",

    sheetsTag: "Google Sheets",
    sheetsTitle: "от 50 €",
    sheetsPriceNote: "зависит от задачи",
    sheetsText: "Порядок, структура и обзор для таблиц, процессов, списков клиентов и ежедневной работы.",
    sheetsList1: "понятная структура таблиц",
    sheetsList2: "индивидуальные решения",
    sheetsList3: "лучший обзор",
    sheetsList4: "простая логика",
    sheetsBtn: "Запросить помощь",

    faq3Q: "Можно ли заказать KI рекламное видео?",
    faq3A: "Да. KI рекламные видео начинаются от 80 €. Цена зависит от длины, стиля, сложности и желаемой реализации.",

    footerText: "Сайты, KI видео и цифровая структура для предпринимателей"
  }
};

/* LANGUAGE */
function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : "de";
  document.documentElement.lang = safeLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (translations[safeLang][key]) {
      el.textContent = translations[safeLang][key];
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === safeLang);
  });

  localStorage.setItem("flowClarityLang", safeLang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang);
  });
});

applyLanguage(localStorage.getItem("flowClarityLang") || "de");

/* INTRO */
window.addEventListener("load", () => {
  setTimeout(() => {
    intro?.classList.add("hide");
  }, 1200);
});

/* REVEAL */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

/* COUNT UP */
function animateCountUp(element) {
  const target = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || "";
  const duration = 1400;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);

    element.textContent = `+${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        animateCountUp(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

countUpElements.forEach((el) => countObserver.observe(el));

/* MOBILE MENU */
menuToggle?.addEventListener("click", () => {
  nav?.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

/* ACTIVE NAV */
function setActiveNavLink() {
  const scrollY = window.scrollY + 160;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav a[href="#${id}"]`);

    if (!link) return;

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((l) => l.classList.remove("is-active"));
      link.classList.add("is-active");
    }
  });
}

window.addEventListener("scroll", setActiveNavLink);
setActiveNavLink();

/* SCROLL PROGRESS */
function updateScrollProgress() {
  if (!scrollProgress) return;

  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = total > 0 ? (window.scrollY / total) * 100 : 0;

  scrollProgress.style.width = `${Math.min(progress, 100)}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

/* CONTACT FORM */
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

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

  window.location.href = `mailto:Maria.webhilfe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* FAQ */
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      faqItems.forEach((el) => {
        if (el !== item) el.removeAttribute("open");
      });
    }
  });
});

/* MAGNETIC BUTTONS */
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

/* TILT CARDS */
tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = (y / rect.height - 0.5) * -8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* SPOTLIGHT */
spotlightCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  });
});

/* PARALLAX */
function updateParallax() {
  const scrollY = window.scrollY;

  if (heroBg) {
    heroBg.style.transform = `scale(1.06) translateY(${scrollY * 0.15}px)`;
  }

  if (sasVisual && window.innerWidth > 900) {
    const rect = sasVisual.getBoundingClientRect();
    const offset = rect.top / window.innerHeight;
    sasVisual.style.transform = `translateY(${offset * -20}px)`;
  }
}

window.addEventListener("scroll", updateParallax, { passive: true });
window.addEventListener("resize", updateParallax);
updateParallax();

/* TOUCH FIX */
window.addEventListener(
  "touchstart",
  () => {
    if (window.innerWidth < 900) {
      tiltCards.forEach((card) => (card.style.transform = ""));
      magneticElements.forEach((el) => (el.style.transform = ""));
    }
  },
  { passive: true }
);