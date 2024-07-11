import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  // Fetch the books!
  // const books =
  // render out the books
  // renderBookList

  // bookListEl.addEventListener('???', () => {})

  // newUserFormEl.addEventListener('???', () => {})
  
}
/*
  FEEDBACK:
    Make sure to run the render functions with the correct 
    arguments in order to render them on the page. 
    And for the bookListEl event listener,
    we want to first check if the specific element that was clicked on is a button, 
    
    if so, get the dataset from the button that was clicked and pass that through get author. 
    getAuthor would return a new author and you would pass this through renderAuthorInfo.

    And for the newUserFormEl, we would get the form data from the form, 
    with that, we would run it through createNewUser. 
    Then we would use renderNewUser to render them
*/