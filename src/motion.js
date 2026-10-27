const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const runningAnimations = new Set();

function play(element, frames, options) {
  if (reducedMotion.matches || !element?.animate) return;
  const animation = element.animate(frames, options);
  runningAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => runningAnimations.delete(animation));
  return animation;
}

export function animateDialog(dialog) {
  dialog.getAnimations().forEach(animation => animation.cancel());
  play(dialog, [
    { opacity: 0, transform: 'translateY(18px) scale(.98)' },
    { opacity: 1, transform: 'translateY(0) scale(1)' },
  ], { duration: 280, easing: 'cubic-bezier(.22,1,.36,1)' });
}

export function initMotion() {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  let scrollFrame = 0;

  function updateScroll() {
    scrollFrame = 0;
    const distance = root.scrollHeight - root.clientHeight;
    const position = Math.max(0, window.scrollY);
    const progress = distance > 0 ? Math.min(position / distance, 1) : 0;
    root.style.setProperty('--reading-progress', progress.toFixed(4));
    header.classList.toggle('is-scrolled', position > 24);
    const drift = !reducedMotion.matches && finePointer.matches ? Math.min(position / 24, 12) : 0;
    hero.style.setProperty('--hero-drift', `${drift}px`);
  }

  function scheduleScroll() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  }

  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });
  window.addEventListener('load', scheduleScroll, { once: true });
  if ('ResizeObserver' in window) new ResizeObserver(scheduleScroll).observe(document.body);
  document.fonts?.ready.then(scheduleScroll);
  scheduleScroll();

  document.querySelectorAll('.mobile-nav > a').forEach((link, index) => {
    link.style.setProperty('--menu-order', index);
  });

  document.querySelectorAll('.reviews-grid > .review-card').forEach(card => card.classList.add('reveal'));
  document.querySelectorAll('.team-grid, .treatment-grid, .values-grid, .reviews-grid').forEach(grid => {
    [...grid.children].forEach((child, index) => child.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 85}ms`));
  });

  const revealElements = [...document.querySelectorAll('.reveal')];
  let observer;
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -20px 0px' });
    revealElements.forEach(element => {
      element.classList.add('will-reveal');
      observer.observe(element);
    });
  }

  document.querySelectorAll('.hero-copy > *').forEach((element, index) => {
    play(element, [
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ], { duration: 850, delay: index * 80, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
  });
  play(document.querySelector('.hero-image-frame'), [
    { opacity: 0, transform: 'translateY(18px) scale(.985)' },
    { opacity: 1, transform: 'translateY(0) scale(1)' },
  ], { duration: 1000, delay: 100, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });

  document.querySelectorAll('.treatment-image').forEach(card => {
    let pointerFrame = 0;
    function reset() {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      card.classList.remove('is-tilting');
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
    }
    card.addEventListener('pointermove', event => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType === 'touch') return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        if (reducedMotion.matches || !finePointer.matches) return;
        const bounds = card.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - .5) * 2));
        const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - .5) * 2));
        card.style.setProperty('--tilt-x', `${(-y * 2).toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${(x * 2).toFixed(2)}deg`);
        card.classList.add('is-tilting');
      });
    });
    card.addEventListener('pointerleave', reset);
    card.addEventListener('pointercancel', reset);
    reducedMotion.addEventListener('change', event => { if (event.matches) reset(); });
    finePointer.addEventListener('change', event => { if (!event.matches) reset(); });
  });

  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      observer?.disconnect();
      revealElements.forEach(element => element.classList.remove('will-reveal'));
      runningAnimations.forEach(animation => animation.cancel());
    }
    scheduleScroll();
  });
  finePointer.addEventListener('change', scheduleScroll);
}
