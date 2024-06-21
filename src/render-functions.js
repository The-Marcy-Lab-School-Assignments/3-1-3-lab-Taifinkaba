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
}

export const renderNewUser = (newUserEl, newUser) => {
}