/* Respect reduced-motion users */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fog = document.querySelector('.fog');
if (prefersReduced && fog) {
  fog.remove(); // remove motion for reduced-motion users
}

/* Reveal on load */
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const toReveal = document.querySelectorAll('.reveal');
  toReveal.forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), 140 + i * 120);
  });
});

/* Optional: pause fog video if tab hidden to save battery */
document.addEventListener('visibilitychange', () => {
  const vid = document.querySelector('.fog');
  if (!vid) return;
  if (document.hidden) vid.pause(); else vid.play().catch(()=>{});
});