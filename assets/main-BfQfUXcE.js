(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.querySelector(`.page-header`);function t(){let e=window.innerHeight*.01;document.documentElement.style.setProperty(`--vh`,`${e}px`)}function n(){e&&document.documentElement.style.setProperty(`--page-header-height`,`${e.offsetHeight}px`)}function r(){t(),n()}r(),e&&new ResizeObserver(n).observe(e),window.addEventListener(`resize`,t)}function t(){let e=document.querySelector(`.js-mobile-menu-container`),t=document.querySelector(`.js-open-mobile-menu`),n=document.querySelector(`.js-close-mobile-menu`);if(!e||!t||!n)return;let r=()=>{e.classList.contains(`is-open`)||(document.body.classList.add(`mobile-menu-open`),e.classList.add(`is-open`),t.setAttribute(`aria-expanded`,`true`))},i=()=>{document.body.classList.remove(`mobile-menu-open`),e.classList.remove(`is-open`),t.setAttribute(`aria-expanded`,`false`)};t.addEventListener(`click`,r),n.addEventListener(`click`,i),document.addEventListener(`keydown`,t=>{t.code===`Escape`&&e.classList.contains(`is-open`)&&i()}),window.matchMedia(`(min-width: 768px)`).addEventListener(`change`,e=>{e.matches&&i()})}function n(){return`
    <h2 class="modal__title">Contact us</h2>

    <form class="form">
      ...
    </form>
  `}function r(){return`
    <h2 class="modal__title">Login</h2>
    ...
  `}function i(){return`
    <h2 class="modal__title">All competitions</h2>

    <p class="modal__text">
      Browse all available competitions by category and status.
    </p>

    <a
      href="pages/competitions/"
      class="link-button link-button--primary"
    >
      Go to competitions
    </a>
  `}function a(){return`
        <!-- Contact Us Form -->
        <div class="callback-form">
          <h2 class="callback-form__title">Contact Us</h2>
          <p class="callback-form__call-to-action">Leave your message and we'll contact you back</p>

          <form class="js-speaker-form callback-form__form" autocomplete="off" data-form="callback">
            <!-- Name Field -->
            <label class="callback-form__field callback-form__field--floating-label">
              <input class="callback-form__input" type="text" name="user-name" placeholder=" " required />
              <span class="callback-form__label">Name</span>
              <svg class="callback-form__icon" width="16px" height="16px">
                <use href="assets/icons/sprite.svg#icon-ui-person"></use>
              </svg>
            </label>

            <!-- Phone Field -->
            <label class="callback-form__field callback-form__field--floating-label">
              <input class="callback-form__input" type="tel" name="user-phone" placeholder=" " required />
              <span class="callback-form__label">Phone</span>
              <svg class="callback-form__icon" width="16px" height="16px">
                <use href="assets/icons/sprite.svg#icon-ui-call"></use>
              </svg>
            </label>

            <!-- Email Field -->
            <label class="callback-form__field callback-form__field--floating-label">
              <input class="callback-form__input" type="email" name="user-email" placeholder=" " required />
              <span class="callback-form__label">Email</span>
              <svg class="callback-form__icon" width="16px" height="16px">
                <use href="assets/icons/sprite.svg#icon-ui-mail"></use>
              </svg>
            </label>

            <!-- Message Field -->
            <label class="callback-form__field callback-form__field--stacked-label">
              <span class="callback-form__label">Comment</span>
              <textarea class="callback-form__textarea" name="user-comment" placeholder="Message"></textarea>
            </label>

            <!-- Policy Checkbox -->
            <label class="callback-form__field callback-form__field--inline-label">
              <input class="callback-form__checkbox" type="checkbox" name="user-policy" required />
              <span class="callback-form__checkbox-custom"></span>
              <span class="callback-form__checkbox-label">
                I agree to the <a class="callback-form__link" href="">Privacy Policy</a>
              </span>
            </label>

            <button class="button button--primary callback-form__submit" type="submit">Send Message</button>
          </form>
        </div>
  `}function o(){return`
    <p class="modal__text">Template not found</p>
  `}var s=Object.freeze({competitions:i,contact:n,login:r,callback:a,default:o});function c(){let e={modalContainer:document.querySelector(`[data-modal-content]`),backdrop:document.querySelector(`[data-backdrop]`),closeBtn:document.querySelector(`[data-modal-close]`),body:document.body};if(!e.modalContainer||!e.backdrop)return;function t(e){return s[e]||s.default}function n(n){let r=t(n);e.modalContainer.innerHTML=r()}function r(t){n(t),e.body.classList.add(`modal-open`),window.addEventListener(`keydown`,o)}function i(){e.body.classList.remove(`modal-open`),window.removeEventListener(`keydown`,o)}function a(e){let t=e.target.closest(`[data-modal-open]`);if(!t)return;let n=t.dataset.modalType;n&&r(n)}function o(e){e.code===`Escape`&&i()}function c(t){t.target===e.backdrop&&i()}document.addEventListener(`click`,a),e.closeBtn?.addEventListener(`click`,i),e.backdrop.addEventListener(`click`,c)}function l(){e(),t(),c()}function u(){console.log(`Home page init`)}function d(){document.body.classList.contains(`page-contacts`)&&console.log(`Contacts page init`)}function f(){console.log(`Athletes page init`)}var p={home:u,contacts:d,athletes:f};function m(){let e=document.body.dataset.page;if(!e){console.error(`Відсутній атрибут data-page на body`);return}let t=p[e];t&&t()}function h(){l(),m()}h(),console.log(`Hello Bro!`);