

(() => {
  const search = document.querySelector('.search');
  document.addEventListener('click', (e) => {
    if(e.target.closest('.js-search-open')) { e.preventDefault(); search.classList.add('open'); }
    if(e.target.closest('.search__close')) { search.classList.remove('open'); }
  });

})();  