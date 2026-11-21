// Shared behaviour for all pages.

// Navbar shadow once the page is scrolled
const navbar = document.querySelector('.navbar');
const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 12);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuBtn = document.getElementById('mobileMenuBtn');
const menu = document.getElementById('mobileMenu');

if (menuBtn && menu) {
  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Menü schliessen' : 'Menü öffnen');
  };

  menuBtn.addEventListener('click', () => setOpen(!menu.classList.contains('open')));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      setOpen(false);
      menuBtn.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !navbar.contains(e.target)) setOpen(false);
  });

  window.matchMedia('(min-width: 1024px)').addEventListener('change', () => setOpen(false));
}

// Scroll reveals
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-scale-lg');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

// FitCoach Section 2: Goals 3-Card Carousel cycling
const goalsTrack = document.getElementById('goalsTrack');
const goalsPrev = document.getElementById('goalsPrev');
const goalsNext = document.getElementById('goalsNext');

if (goalsTrack && goalsPrev && goalsNext) {
  const cards = Array.from(goalsTrack.querySelectorAll('.goal-card'));
  let startIdx = 0;

  const renderGoals = () => {
    const visibleCount = 3;
    cards.forEach((card) => {
      card.hidden = true;
      card.classList.add('visible');
    });
    for (let i = 0; i < Math.min(visibleCount, cards.length); i++) {
      const idx = (startIdx + i) % cards.length;
      cards[idx].hidden = false;
      goalsTrack.appendChild(cards[idx]);
    }
  };

  goalsNext.addEventListener('click', () => {
    startIdx = (startIdx + 1) % cards.length;
    renderGoals();
  });

  goalsPrev.addEventListener('click', () => {
    startIdx = (startIdx - 1 + cards.length) % cards.length;
    renderGoals();
  });
}

// FitCoach Section 5: Reviews / Transformation Pillars Slider
const reviewsContainer = document.getElementById('reviewsSlides');
const reviewsPrev = document.getElementById('reviewsPrev');
const reviewsNext = document.getElementById('reviewsNext');

if (reviewsContainer && reviewsPrev && reviewsNext) {
  const slides = Array.from(reviewsContainer.querySelectorAll('.review-slide'));
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  reviewsNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  reviewsPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
}

// Hero background diashow (slow, smooth crossfade; respects reduced motion)
const heroSlides = document.querySelectorAll('#heroSlideshow .hero-slide');

if (heroSlides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let heroIndex = 0;

  window.setInterval(() => {
    heroSlides[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
  }, 6000);
}

// Studio image scroll parallax (GPU-accelerated, respects reduced motion)
const parallaxFrame = document.querySelector('.studio-parallax-frame');
const parallaxImg = document.querySelector('.studio-parallax-img');

if (parallaxFrame && parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let ticking = false;

  const updateParallax = () => {
    const rect = parallaxFrame.getBoundingClientRect();
    const viewH = window.innerHeight || 1;
    if (rect.bottom > 0 && rect.top < viewH) {
      // Normalized -1 (entering bottom) to +1 (leaving top)
      const progress = ((viewH - rect.top) / (viewH + rect.height)) * 2 - 1;
      const maxShift = rect.height * 0.14;
      parallaxImg.style.transform = `translate3d(0, ${(progress * maxShift).toFixed(2)}px, 0)`;
    }
    ticking = false;
  };

  const onParallaxScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onParallaxScroll, { passive: true });
  window.addEventListener('resize', onParallaxScroll, { passive: true });
  updateParallax();
}

// Contact form: validate on blur and on submit.
const form = document.getElementById('contactForm');

if (form) {
  const fields = form.querySelectorAll('.input-field[required]');
  const status = document.getElementById('formStatus');

  const validate = (field) => {
    const ok = field.checkValidity();
    field.setAttribute('aria-invalid', String(!ok));
    return ok;
  };

  fields.forEach((field) => {
    field.addEventListener('blur', () => validate(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validate(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const invalid = [...fields].filter((field) => !validate(field));
    if (invalid.length) {
      status.hidden = true;
      invalid[0].focus();
      return;
    }
    status.hidden = false;
  });
}
