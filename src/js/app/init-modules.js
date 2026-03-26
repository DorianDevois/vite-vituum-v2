import { initLayoutVars } from '../modules/layout-vars.js';
import { initMobileMenu } from '../modules/mobile-menu.js';
import { initModal } from '../modules/modal/modal.js';

export function initModules() {
  initLayoutVars();
  initMobileMenu();
  initModal();
}
