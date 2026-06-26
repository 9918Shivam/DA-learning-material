// sidebar.js — inject shared sidebar
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  sidebar.innerHTML = `
    <div class="sidebar-brand">
      <div class="logo">🐍 PyAnalyst</div>
      <div class="sub">Data Analyst Bootcamp</div>
    </div>
    <div class="progress-wrap"><div class="progress-bar" id="progress-bar" style="width:0%"></div></div>
    <div class="sidebar-section-label">Python Programming</div>
    <nav>
      <a href="index.html"><span class="num">🏠</span> Home</a>
      <a href="01-python-basics.html"><span class="num">1</span> Python Basics</a>
      <a href="02-numpy.html"><span class="num">2</span> NumPy</a>
      <a href="03-pandas.html"><span class="num">3</span> Pandas</a>
      <a href="04-matplotlib.html"><span class="num">4</span> Matplotlib &amp; Seaborn</a>
      <a href="05-flask.html"><span class="num">5</span> Flask</a>
      <a href="06-jupyter.html"><span class="num">6</span> Jupyter Notebook</a>
    </nav>
  `;

  // mark active
  const page = location.pathname.split('/').pop() || 'index.html';
  sidebar.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // progress
  const pages = ['index.html','01-python-basics.html','02-numpy.html','03-pandas.html','04-matplotlib.html','05-flask.html','06-jupyter.html'];
  const idx = pages.indexOf(page);
  if (idx >= 0) {
    document.getElementById('progress-bar').style.width = (idx / (pages.length - 1) * 100) + '%';
  }
});
