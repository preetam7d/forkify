import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import view from './view.js';
class ResultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query. Please find again!';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultsView();
