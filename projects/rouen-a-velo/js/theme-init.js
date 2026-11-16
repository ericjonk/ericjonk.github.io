(function () {
  // Tell the CSS that JavaScript works. Without JS the menu simply stays visible.
  document.documentElement.classList.add('js');
  // Looks for theme
  var theme = null;
  try { theme = localStorage.getItem('theme'); } catch (e) {}
  if (theme !== 'dark' && theme !== 'light') {
    var hour = new Date().getHours();   // visitor's local time, 0 to 23
    theme = (hour >= 19 || hour < 7) ? 'dark' : 'light';   // dark from 19:00 until 6:59
  }
  document.documentElement.setAttribute('data-theme', theme);
})();
