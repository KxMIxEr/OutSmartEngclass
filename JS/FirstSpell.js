document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.dropdown-toggle');
  toggles.forEach(function (toggle) {
    var menu = toggle.nextElementSibling;
    if (!menu || !menu.classList.contains('dropdown-menu')) return;
    menu.style.overflow = 'hidden';
    menu.style.maxHeight = '0px';
    menu.style.opacity = 0;
    menu.style.transition = 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.6s';
    menu.style.display = 'block';
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menu.style.maxHeight !== '0px' && menu.style.maxHeight !== '') {
        menu.style.maxHeight = '0px';
        menu.style.opacity = 0;
      } else {
        document.querySelectorAll('.dropdown-menu').forEach(function (otherMenu) {
          if (otherMenu !== menu) {
            otherMenu.style.maxHeight = '0px';
            otherMenu.style.opacity = 0;
          }
        });
        menu.style.maxHeight = menu.scrollHeight + 'px';
        menu.style.opacity = 1;
      }
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
      menu.style.maxHeight = '0px';
      menu.style.opacity = 0;
    });
  });
});
