//burger menu
document.getElementById('toggleBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    this.classList.toggle('menu-open');
    if (menu.style.right === '0%') {
      menu.style.right = '-300px';
    } else {
      menu.style.right = '0%';
    }
  });
  
  document.getElementById('menu').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.right = '-300px';
      document.getElementById('toggleBtn').classList.remove('menu-open');
    }
  });
  document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var toggleBtn = document.getElementById('toggleBtn');
    
    if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
      menu.style.right = '-300px';
      toggleBtn.classList.remove('menu-open');
    }
  });

  //header scrolling 
  window.addEventListener('scroll', function() {
    const divElement = document.getElementById('headerScroll');
    var aElement = document.getElementById('logo');
    var aElement = document.getElementById('toggleBtn');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= 15) {
      divElement.classList.add('header-row_scroll');
      aElement.classList.add('header__logo__link_scroll');
      aElement.classList.add('burger-menu_scroll');
    } else {
      divElement.classList.remove('header-row_scroll');
      aElement.classList.remove('header__logo__link_scroll');
      aElement.classList.remove('burger-menu_scroll');
    }
  });

  //up arrow
  window.addEventListener('scroll', function() {
    var aElement = document.getElementById('upArrow');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= 300) {
      aElement.classList.add('up-arrow_active');
    } else {
      aElement.classList.remove('up-arrow_active');
    }
  });
//section accordion faq
  var acc = document.getElementsByClassName("accordion-btn");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("accordion-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

