// /assets/js/darkmode.js

// Create and insert the toggle button
const btn = document.createElement('button');
btn.textContent = localStorage.getItem('theme') === 'dark' ? '☀️' : '🌙';
btn.id = 'dark-toggle';
btn.style.cssText = `
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
  padding: 0.5rem 0.75rem;
  font-size: 1.2rem;
  cursor: pointer;
  background: #444;
  color: #fff;
  border: none;
  border-radius: 6px;
`;

document.body.appendChild(btn);

// Apply theme on load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Toggle handler
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
  btn.textContent = mode === 'dark' ? '☀️' : '🌙';
});
