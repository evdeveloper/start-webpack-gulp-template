import { BODY } from '../variables/variables';
import Tabs  from "../../components/tabs/tabs";

document.addEventListener('click', e => {
  if(e.target.closest('[data-popup-open]')) {
    e.preventDefault();
    openModal(e.target.closest('[data-popup-open]').getAttribute('data-popup-open'));
    document.querySelector('.popup.show').insertAdjacentHTML('afterbegin', '<div class="lds-ripple"><div></div><div></div></div>');
    setTimeout(() => document.querySelector('.popup.show .lds-ripple').remove(), 450);
  }
  if(e.target.closest('.popup__close') || e.target.closest('.popup__button-close')) {
    closeModal(e.target.closest('.popup').getAttribute('data-popup-target'));
  }
  if(e.target.closest('.popup__backdrop')) {
    document.querySelector('.popup.show').classList.remove('show');
    BODY.classList.remove('hidden');
  }
});

export function openModal(id) {
  document.querySelectorAll('.popup').forEach(popup => popup.classList.remove('show'));
  document.querySelector(`[data-popup-target="${id}"]`).classList.add('show');
  BODY.classList.add('hidden');
}
export function closeModal(id) {
  document.querySelector(`[data-popup-target="${id}"]`).classList.remove('show');
  BODY.classList.remove('hidden');
}