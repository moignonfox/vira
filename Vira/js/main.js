/* =========================================================
   VIRA — Front-end behavior
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* Scroll reveal */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* Mobile nav toggle */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('flex');
      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuBtn.querySelector('i').classList.toggle('fa-bars');
      menuBtn.querySelector('i').classList.toggle('fa-xmark');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelector('i').classList.add('fa-bars');
        menuBtn.querySelector('i').classList.remove('fa-xmark');
      });
    });
  }

  /* Nav shadow on scroll */
  const nav = document.getElementById('main-nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('shadow-sm');
      else nav.classList.remove('shadow-sm');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

});
