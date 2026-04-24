const themes = [...document.querySelectorAll('.theme-color')];

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme')) {
    document.documentElement.classList.add('theme-dark');
  }
});

themes.forEach((theme) => {
  theme.addEventListener('click', (e) => {
    if (e.target.classList.contains('light')) {
      document.documentElement.classList.remove('theme-dark');
      localStorage.clear('theme');
    }
    if (e.target.classList.contains('dark')) {
      document.documentElement.classList.add('theme-dark');
      localStorage.setItem('theme', 'theme-dark');
    }
  });
});
