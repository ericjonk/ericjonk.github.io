function setupHeader() {
  // Dark mode button
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}   // remembered for the next visit
  });

  // Hamburger menu (phones)
  var menuButton = document.getElementById('menu-toggle');
  var menuIcon = menuButton.querySelector('.menu-icon');
  var nav = document.getElementById('main-nav');

  // Open (true) or close (false) the menu
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuIcon.textContent = open ? '✕' : '☰';   // cross when open, three lines when closed
  }
  menuButton.addEventListener('click', function () {
    setMenu(!nav.classList.contains('is-open'));
  });
}

setupHeader();
