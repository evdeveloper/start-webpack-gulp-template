import { fadeIn } from '../fade/fade';

const TABS = '.js-tabs';
const TABS_ACTIVE = 'active';
const TABS_ITEM = '.js-tabs__item';
const TABS_TAB = '.js-tabs__tab';
const TAB_DEFAULT_OPEN = 0;


export default class Tabs {
  constructor(elem, open) {
    this.elem = elem.querySelector(TABS);
    this.open = open || TAB_DEFAULT_OPEN;
    this.init(elem);
  }
  
  onClick(elem) {
    this.elem.addEventListener('click', (e) => {
      e.preventDefault();
      if(e.target.closest(TABS_TAB)) {
        const itemContent = this.elem.querySelector(`.js-tabs__item[data-index="${e.target.getAttribute('data-index')}"]`);
        elem.querySelectorAll(TABS_TAB).forEach(tab => tab.classList.remove(TABS_ACTIVE));
        elem.querySelectorAll(TABS_ITEM).forEach(item => {
          item.classList.remove(TABS_ACTIVE);
          item.setAttribute('style', '');
        });
        e.target.classList.add(TABS_ACTIVE);
        itemContent.classList.add(TABS_ACTIVE);
        fadeIn(itemContent);
      }
    });
  }
  
  render(elem) {
    elem.querySelectorAll(TABS_TAB).forEach((tab, i) => {
      tab.setAttribute('data-index', i);
      setTimeout(() => {
        elem.querySelector(`.js-tabs__tab[data-index="${this.open}"]`).classList.add(TABS_ACTIVE);
      }, 100);
    });
    elem.querySelectorAll(TABS_ITEM).forEach((item, i) => {
      item.setAttribute('data-index', i);
      setTimeout(() => {
        fadeIn(elem.querySelector(`.js-tabs__item[data-index="${this.open}"]`));
        elem.querySelector(`.js-tabs__item[data-index="${this.open}"]`).classList.add(TABS_ACTIVE);
      }, 100);
    });
  }

  init(elem) {
    this.render(elem);
    this.onClick(elem);
  }
};