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

    pricingTitle: "Klar. Direkt. Ohne unnötiges Theater.",
    pricingSubline: "Einmalige Zahlung • kein Abo • keine versteckten Kosten",

    websiteTitle: "ab 230 €",
    websitePriceNote: "einmalig",
    websiteText: "Moderner, klarer Auftritt für Selbstständige und kleine Businesses.",
    websiteList3: "klare Struktur, die besser verkauft",
    websiteList5: "moderne Effekte & Premium Look",
    websiteBtn: "Website anfragen",

    videoTag: "KI Video Werbung",
    videoTitle: "ab 80 €",
    videoPriceNote: "je nach Aufwand",
    videoText: "Kurze, moderne Werbevideos für Social Media.",
    videoList1: "individuelles Konzept",
    videoList2: "KI Visuals + Story",
    videoList3: "perfekt für Instagram & TikTok",
    videoList4: "Aufmerksamkeit in Sekunden",
    videoBtn: "Video anfragen",

    sheetsTitle: "ab 50 €",
    sheetsPriceNote: "je nach Aufgabe",
    sheetsText: "Ordnung, Struktur und Übersicht für Ihren Alltag.",
    sheetsBtn: "Hilfe anfragen",
  },

  ru: {
    introTitle: "Я делаю вашу подачу заметной.",

    pricingTitle: "Чётко. Просто. Без лишней путаницы.",
    pricingSubline: "Разовая оплата • без абонемента • без скрытых платежей",

    websiteTitle: "от 230 €",
    websitePriceNote: "разово",
    websiteText: "Современная и понятная подача для предпринимателей и малого бизнеса.",
    websiteList3: "понятная структура, которая лучше продаёт",
    websiteList5: "современные эффекты и премиум-вид",
    websiteBtn: "Запросить сайт",

    videoTag: "KI видео-реклама",
    videoTitle: "от 80 €",
    videoPriceNote: "зависит от сложности",
    videoText: "Короткие современные рекламные видео для соцсетей.",
    videoList1: "индивидуальная идея",
    videoList2: "KI-визуалы + история",
    videoList3: "под Instagram и TikTok",
    videoList4: "внимание за первые секунды",
    videoBtn: "Запросить видео",

    sheetsTitle: "от 50 €",
    sheetsPriceNote: "зависит от задачи",
    sheetsText: "Порядок, структура и обзор для вашей ежедневной работы.",
    sheetsBtn: "Запросить помощь",
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
  setTimeout(() => intro?.classList.add("hide"), 1200);
});

/* REVEAL */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => observer.observe(el));

/* MENU */
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

/* ACTIVE LINK */
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

/* SCROLL BAR */
function updateScrollProgress() {
  if (!scrollProgress) return;

  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / total) * 100;

  scrollProgress.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress);

/* FORM */
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name")?.value || "";
  const contact = document.getElementById("email")?.value || "";
  const message = document.getElementById("message")?.value || "";

  const lang = localStorage.getItem("flowClarityLang") || "de";

  const subject = lang === "ru"
    ? "Запрос с сайта"
    : "Anfrage von Website";

  const body = `Name: ${name}\nKontakt: ${contact}\n\n${message}`;

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

/* PARALLAX */
function updateParallax() {
  const scrollY = window.scrollY;

  if (heroBg) heroBg.style.transform = `scale(1.06) translateY(${scrollY * 0.15}px)`;
  if (heroStack && window.innerWidth > 900) heroStack.style.transform = `translateY(${scrollY * -0.05}px)`;
}

window.addEventListener("scroll", updateParallax);