const btn = document.createElement('button');
btn.textContent = localStorage.getItem('theme') === 'dark' ? '☀️' : '🌙';
btn.style.cssText = 'position:fixed;bottom:1rem;right:1rem;padding:0.5rem;font-size:1.2rem;z-index:999;';
document.body.appendChild(btn);
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
btn.onclick = () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};
