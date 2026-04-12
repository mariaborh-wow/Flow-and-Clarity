const navLinks = document.querySelectorAll('.nav a');
const heroBadges = document.querySelectorAll('.hero__badges span');

/* smooth active feel on nav click */
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});

/* simple floating randomness for hero badges */
heroBadges.forEach((badge, index) => {
  badge.style.animationDelay = `${index * 0.8}s`;
});

/* reveal on scroll */
const revealItems = document.querySelectorAll(
  '.card, .service-card, .portfolio-item, .price-card, .about__text, .about__img, .contact'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  },
  {
    threshold: 0.14
  }
);

revealItems.forEach((item) => {
  item.classList.add('reveal-start');
  revealObserver.observe(item);
});

/* subtle tilt effect for cards on desktop */
const tiltItems = document.querySelectorAll('.card, .service-card, .price-card, .portfolio-item');

tiltItems.forEach((item) => {
  item.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 900) return;

    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 5;
    const rotateX = ((y / rect.height) - 0.5) * -5;

    item.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});