import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import view from './view.js';
class BookmarksView extends view {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No booksmarks yet. Find a nice recipe and bookmark it.';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmarks => previewView.render(bookmarks, false))
      .join('');
  }
}
export default new BookmarksView();
