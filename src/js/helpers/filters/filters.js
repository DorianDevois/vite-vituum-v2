export class Filters {
  constructor({ containerSelector, toggleSelector, panelSelector }) {
    this.refs = {
      container: document.querySelector(containerSelector),
      toggle: document.querySelector(toggleSelector),
      panel: document.querySelector(panelSelector),
    };

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.refs.toggle?.addEventListener("click", this.handleToggleClick);
    this.refs.container?.addEventListener("click", this.handleFilterClick);
  }

  // ========================
  // Handlers
  // ========================

  handleToggleClick = () => {
    this.refs.toggle.classList.toggle("is-active");
    this.refs.panel.classList.toggle("is-open");
  };

  handleFilterClick = (evt) => {
    const filter = evt.target.closest(".js-filter");

    if (!filter) {
      return;
    }

    const isClearBtn = evt.target.closest(".filters__btn");

    if (isClearBtn) {
      this.deactivateFilter(filter);
      return;
    }

    if (this.isActive(filter)) {
      return;
    }

    this.activateFilter(filter);
  };

  // ========================
  // Filter logic
  // ========================

  activateFilter(filter) {
    filter.classList.add("is-active");
    this.appendClearButton(filter);
  }

  deactivateFilter(filter) {
    filter.classList.remove("is-active");
    this.removeClearButton(filter);
  }

  isActive(filter) {
    return filter.classList.contains("is-active");
  }

  // ========================
  // DOM helpers
  // ========================

  appendClearButton(filter) {
    if (filter.querySelector(".filters__btn")) {
      return;
    }

    filter.insertAdjacentHTML("beforeend", this.getClearButtonMarkup());
  }

  removeClearButton(filter) {
    const btn = filter.querySelector(".filters__btn");
    if (btn) {
      btn.remove();
    }
  }

  getClearButtonMarkup() {
    return `
      <button class="filters__btn" type="button">
        <svg class="filters__btn-icon">
          <use href="/assets/icons/sprite.svg#icon-ui-clear"></use>
        </svg>
      </button>
    `;
  }
}
