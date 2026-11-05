const dlg = document.getElementById('player');
const vid = dlg.querySelector('video');
const img = dlg.querySelector('.dlg-img');
const title = dlg.querySelector('.dlg-title');

function reset() {
  vid.pause();
  vid.removeAttribute('src');
  vid.load();
  img.removeAttribute('src');
  vid.hidden = true;
  img.hidden = true;
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const video = card.dataset.video;
    const image = card.dataset.image;
    if (!video && !image) return;
    title.textContent = card.dataset.title || '';
    if (video) {
      vid.hidden = false;
      img.hidden = true;
      vid.src = video;
      vid.play().catch(() => {});
    } else {
      vid.hidden = true;
      img.hidden = false;
      img.src = image;
    }
    dlg.showModal();
  });
});

const close = () => { reset(); dlg.close(); };
dlg.querySelector('.close').addEventListener('click', close);
dlg.addEventListener('click', e => { if (e.target === dlg) close(); });
dlg.addEventListener('cancel', e => { e.preventDefault(); close(); });
