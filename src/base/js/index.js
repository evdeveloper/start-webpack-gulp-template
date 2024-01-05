import lozad from 'lozad';
import { openModal, closeModal } from '../../../src/components/popup/popup';
import Tabs from '../../../src/components/tabs/tabs';

document.querySelectorAll('[data-component="tabs"]').forEach((tabs => {
  const countOpenTab = +tabs.querySelector('.js-tabs').getAttribute('data-tabs-open');
  new Tabs(tabs, countOpenTab);
}));

const observer = lozad('.lozad', { rootMargin: '20px 0px', threshold: 0.4 });
observer.observe();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal(document.querySelector('.popup.show')?.getAttribute('data-popup-target'));
  }
});

// Vendor
import '../../vendor/vendor'

// Components
import '../../components/components'
