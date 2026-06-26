// Mark active sidebar link
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // copy code buttons
  document.querySelectorAll('.code-block').forEach(block => {
    const pre = block.querySelector('pre');
    const btn = block.querySelector('.copy-btn');
    if (btn && pre) {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(pre.innerText).then(() => {
          btn.textContent = '✓ Copied';
          setTimeout(() => btn.textContent = 'Copy', 1500);
        });
      });
    }
  });
});
