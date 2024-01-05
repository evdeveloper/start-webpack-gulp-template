import enquire from 'enquire.js';

(() => {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const mobileMenu = document.querySelector('.mobileMenu');
  const mobileMenuClose = mobileMenu?.querySelector('.mobileMenu__close');
  const hamburger = document.querySelector('.js-hamburger');
  let headerHeight = header?.offsetHeight;

  mobileMenu?.insertAdjacentHTML('afterbegin', `
    <div class="mobileMenu__back hide"> 
      <svg class="svg-sprite-icon icon-arrow-left mobileMenu__back-icon">
        <use xlink:href="../static/images/sprite.svg#arrow-left"></use>
      </svg>
    </div>`);

  document.addEventListener('click', e => { 
    if(e.target.closest('.mobileMenu__tab')) {
      const parent = e.target.closest('.mobileMenu');
      parent.querySelector('.js-tabs__content').classList.add('show');
      enquire.register('screen and (max-width: 481px)', {
        deferSetup : true,
        match() {
          parent.querySelector('.mobileMenu__back').classList.remove('hide');
        },
        unmatch : function() {
          parent.querySelector('.mobileMenu__back').classList.add('hide');
        }
      });
    }
    if(e.target.closest('.mobileMenu__back')) {
      const parent = e.target.closest('.mobileMenu');
      parent.querySelector('.js-tabs__content').classList.remove('show');
      enquire.register('screen and (max-width: 481px)', {
        deferSetup : true,
        match() {
          parent.querySelector('.mobileMenu__back').classList.add('hide');
        },
        unmatch : function() {
          parent.querySelector('.mobileMenu__back').classList.remove('hide');
        }
      });
    }
  });

  window.addEventListener('scroll', e => {
    if(headerHeight < window.scrollY) {
      header.classList.add('fixed');
      header.closest('.wrapper').style.paddingTop = `${headerHeight}px`;
    } else {
      header.classList.remove('fixed');
      header.closest('.wrapper').style.paddingTop = 0;
    }
    if (window.matchMedia("(min-width: 1100px)").matches) {
      if(headerHeight < window.scrollY) {
        header.classList.add('fixed');
        header.closest('.wrapper').style.paddingTop = `${headerHeight}px`;
      } else {
        header.classList.remove('fixed');
        header.closest('.wrapper').style.paddingTop = 0;
      }
    }
    enquire.register('screen and (max-width: 481px)', {
      match() {
        console.log('sdsdsds');
        // mobileMenu.innerHTML += `
        //   <div class="mobileMenu__back"> 
        //     <svg class="svg-sprite-icon  icon-arrow-left mobileMenu__back-icon">
        //       <use xlink:href="../static/images/sprite.svg#arrow-left"></use>
        //     </svg>
        //   </div>
        // `;
        // mobileMenu.insertAdjacentHTML('afterbegin', `
        // <div class="mobileMenu__back"> 
        //   <svg class="svg-sprite-icon  icon-arrow-left mobileMenu__back-icon">
        //     <use xlink:href="../static/images/sprite.svg#arrow-left"></use>
        //   </svg>
        // </div>`);
      }
    });
  });

  hamburger?.addEventListener('click', function(){
    mobileMenu.classList.add('active');
    body.classList.add('hidden');
  });

  mobileMenuClose?.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
    body.classList.remove('hidden');
  });

})();