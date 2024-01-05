import { slideToggle } from './../slideToggle/slideToggle'

(() => {
  document.addEventListener('click', e => {
    if(e.target.closest('.collapse')) {
      e.target.closest('.collapse').classList.toggle('active');
      if(e.target.closest('.collapse__top')) {
        const collapse = new slideToggle(e.target.closest('.collapse').querySelector('.collapse__body'));
        collapse.toggle();
      }
    }
  });
})();