import icons from 'url:../../img/icons.svg';

import view from './view.js';
class PagiationView extends view {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goto = +btn.dataset.goto;

      handler(goto);
    });
  }

  _generateMarkup() {
    const curretPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //   Page1 and there are other pages
    if (curretPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curretPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curretPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    //   last page
    if (curretPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curretPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curretPage - 1}</span>
        </button>
      `;
    }
    //   other pages
    if (curretPage < numPages) {
      return `
        <button data-goto="${
          curretPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curretPage - 1}</span>
        </button>

         <button data-goto="${
           curretPage + 1
         }" class="btn--inline pagination__btn--next">
            <span>Page ${curretPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }
    //   page1 and there are no pages
    return '';
  }
}

export default new PagiationView();
