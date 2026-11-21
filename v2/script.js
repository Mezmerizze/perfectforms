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

// ---------------------------------------------------------------------------
// Booking request form
// Set the endpoint on <form data-endpoint="..."> (e.g. a Formspree URL) to make
// it send. While it is empty, visitors are told to phone instead – the page
// never pretends a message was delivered.
// ---------------------------------------------------------------------------
const form = document.getElementById('contactForm');

if (form) {
  const status = document.getElementById('formStatus');
  const success = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  const fields = form.querySelectorAll('input.input-field, textarea.input-field');

  // Pre-select the plan chosen on the pricing cards (?anliegen=15er-abo)
  const wanted = new URLSearchParams(location.search).get('anliegen');
  const topic = form.querySelector('#anliegen');
  if (wanted && topic && [...topic.options].some((o) => o.value === wanted)) topic.value = wanted;

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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.hidden = true;

    const invalid = [...fields].filter((field) => !validate(field));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      status.hidden = false;
      return;
    }

    const label = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet…';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch {
      status.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = label;
    }
  });
}

// ---------------------------------------------------------------------------
// Live opening status (Mo–Fr 13–20 Uhr, Europe/Zurich)
// ---------------------------------------------------------------------------
const badge = document.getElementById('openBadge');

if (badge) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Zurich',
    weekday: 'short',
    hour: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const day = parts.find((p) => p.type === 'weekday').value;
  const hour = Number(parts.find((p) => p.type === 'hour').value);
  const isOpen = !['Sat', 'Sun'].includes(day) && hour >= 13 && hour < 20;

  badge.textContent = isOpen ? 'Jetzt geöffnet · bis 20 Uhr' : 'Gerade geschlossen · Mo–Fr 13–20 Uhr';
  badge.classList.toggle('is-closed', !isOpen);
  badge.hidden = false;
}

// ---------------------------------------------------------------------------
// Map: only contact Google after an explicit click
// ---------------------------------------------------------------------------
const mapBox = document.getElementById('mapBox');
const mapLoad = document.getElementById('mapLoad');

if (mapBox && mapLoad) {
  mapLoad.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = mapBox.dataset.src;
    frame.title = 'Karte: Perfect Forms Studio, Rychenbergstrasse 67, Winterthur';
    frame.loading = 'lazy';
    frame.referrerPolicy = 'no-referrer-when-downgrade';
    frame.allowFullscreen = true;
    mapBox.replaceChildren(frame);
  });
}
