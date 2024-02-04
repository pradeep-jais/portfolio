const themes = [...document.querySelectorAll('.theme-color')];

themes.forEach((theme) => {
  theme.addEventListener('click', (e) => {
    if (e.target.classList.contains('light')) {
      document.documentElement.classList.remove('theme-dark');
    }
    if (e.target.classList.contains('dark')) {
      document.documentElement.classList.add('theme-dark');
    }
  });
});
