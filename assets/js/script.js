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
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 15) {
    divElement.classList.add('header-row_scroll');
    aElement.classList.add('header__logo__link_scroll');
  } else {
    divElement.classList.remove('header-row_scroll');
    aElement.classList.remove('header__logo__link_scroll');
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


//preloader
const preloader = document.querySelector('#preloader');
if (preloader) {
window.addEventListener('load', () => {
  preloader.remove();
});
}

//aos
function aos_init() {
AOS.init({
  duration: 700,
  easing: 'ease-in-out',
  mirror: false
});
}

window.addEventListener('load', () => {
aos_init();
});

// Numbers animation
window.addEventListener('load', () => {
const animationDuration = 3000;
const frameDuration = 1000 / 300;
const totalFrames = Math.round( animationDuration / frameDuration );
const easeOutQuad = t => t * ( 2 - t );
const animateCountUp = el => {
  let frame = 0;
  const countTo = parseInt( el.innerHTML, 10 );
  const counter = setInterval( () => {
    frame++;
    const progress = easeOutQuad( frame / totalFrames );
    const currentCount = Math.round( countTo * progress );
    if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
      el.innerHTML = currentCount;
    }
    if ( frame === totalFrames ) {
      clearInterval( counter );
    }
  }, frameDuration );
};
  const countupEls = document.querySelectorAll( '.number-animation' );
  countupEls.forEach( animateCountUp );
});


$(document).ready(function() {
  $('#user_phone').mask('+38999999999999');
});

//jquery form to telegram
$(document).ready(function() {
  $('.send-form').on('click', function(event) {
    event.preventDefault();

    var formValid = true;
    $('.form-control').each(function() {
      if ($(this).val() === '') {
        formValid = false;
        $(this).siblings('.error-message').css('display', 'block');
      } else {
        $(this).siblings('.error-message').css('display', 'none');
      }
    });

    var userPhone = $('#user_phone').val();
    var userEmail = $('#user_email').val();
    
    if (userPhone.length < 7 || userPhone.length > 15) {
      formValid = false;
      $('#user_phone').siblings('.phone-error-message').css('display', 'block');
    } else {
      $('#user_phone').siblings('.phone-error-message').css('display', 'none');
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      formValid = false;
      $('#user_email').siblings('.email-error-message').css('display', 'block');
    } else {
      $('#user_email').siblings('.email-error-message').css('display', 'none');
    }

    if (formValid) {
      var form = $('.form');
      form.css('display', 'none'); // Сховати форму перед AJAX-запитом
      $.ajax({
        type: "POST", 
        url: form.attr('action'),
        data: form.serialize(),
        success: function(response) {
          $(".status-good").css("display", "flex"); 
          setTimeout(function() {
            $('.loader-fill').css('animation', 'none');
            $('.status').css('opacity', '0');
            setTimeout(function() {
              $('.status').text('Готово!');
              $('.status').css('opacity', '1');
            }, 500);
          }, 3000);
        },
        error: function() {
          // Handle error here
        }
      });
    }
  });
});
