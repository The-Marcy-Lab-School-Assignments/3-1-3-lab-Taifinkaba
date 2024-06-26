export const renderBookList = (bookListEl, books) => {
    bookListEl.innerHTML = '';

    books.forEach((book) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const button = document.createElement('button');

        img.src = book.coverUrl;
        img.alt =  `An old cover  of ${book.title}`

        p.textContent = `Title: ${book.title}`

        button.textContent = `View ${book.author.name}`
        button.dataset.authorUrlKey = book.author.urlKey;

        li.append(img, p, button);
        bookListEl.append(li);
    })
}

export const renderAuthorInfo = (authorInfoEl, author) => {
    authorInfoEl.innerHTML = '';

    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const bornP = document.createElement('p');
    const bioP = document.createElement('p');
    const aTag = document.createElement('a');

    h2.textContent = author.name;

    img.src = author.picture;
    img.alt = `A picture of ${author.name}`;

    bornP.textContent = `Born: ${author.birthDate}`;

    bioP.textContent = author.bio;

    aTag.href = author.wikipediaUrl;
    aTag.textContent = 'Wikipedia Link';

    authorInfoEl.append(
        h2,
        img,
        bornP,
        bioP,
        aTag
    );
}

export const renderNewUserForm = (newUserFormEl) => {
    newUserFormEl.innerHTML = '';

    const usernameLabel = document.createElement('label');
    const usernameInput = document.createElement('input');
    const coolLabel = document.createElement('label');
    const coolInput = document.createElement('input');
    const languageLabel = document.createElement('label');
    const languageSelect = document.createElement('select');
    const languages = ['None', 'JavaScript', 'Python', 'Ruby'];
    const createUserButton = document.createElement('button');

    usernameLabel.textContent = 'Username';
    usernameInput.id = 'username';
    usernameInput.name = 'username';
    usernameLabel.append(usernameInput);

    coolLabel.textContent = 'Is this user cool?';
    coolInput.id = 'is-cool';
    coolInput.name = 'isCool';
    coolInput.type = 'checkbox';
    coolLabel.append(coolInput);

    languageLabel.textContent = 'Favorite Language';
    languageSelect.id = 'favorite-language';
    languageSelect.name = 'favoriteLanguage';

    languages.forEach(language => {
        const option = document.createElement('option');
        option.textContent = language;
        option.value = language.toLowerCase();
        languageSelect.append(option);
    });
    languageLabel.append(languageSelect);

    createUserButton.textContent = 'Create User';

    newUserFormEl.append(
        usernameLabel,
        coolLabel,
        languageLabel,
        createUserButton
    );
}

export const renderNewUser = (newUserEl, newUser) => {
    newUserEl.innerHTML = '';

    const usernameHeader = document.createElement('h2');
    const coolParagraph = document.createElement('p');
    const languageParagraph = document.createElement('p');

    usernameHeader.textContent = newUser.username;
    usernameHeader.dataset.userId = newUser.id;

    coolParagraph.textContent = newUser.isCool ? 'The hippest in the house!' : 'A real square.';

    languageParagraph.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

    newUserEl.append(
        usernameHeader,
        coolParagraph,
        languageParagraph
    );
}