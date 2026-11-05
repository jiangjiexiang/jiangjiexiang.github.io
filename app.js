const dlg = document.getElementById('player');
const vid = dlg.querySelector('video');
const title = dlg.querySelector('.dlg-title');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('.card-link')) return;
    const src = card.dataset.video;
    if (!src) return;
    title.textContent = card.dataset.title || '';
    vid.src = src;
    dlg.showModal();
    vid.play().catch(() => {});
  });
});

const close = () => { vid.pause(); vid.removeAttribute('src'); vid.load(); dlg.close(); };
dlg.querySelector('.close').addEventListener('click', close);
dlg.addEventListener('click', e => { if (e.target === dlg) close(); });
dlg.addEventListener('cancel', e => { e.preventDefault(); close(); });
