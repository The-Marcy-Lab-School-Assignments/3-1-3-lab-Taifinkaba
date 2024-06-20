export const getFirstThreeFantasyBooks = () => {
    const url = 'https://openlibrary.org/subjects/fantasy.json';

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to get fantasy books');
        }
        return response.json();
      })
      .then(data => {
        const firstThreeBooks = data.works.slice(0, 3).map(work => {
          const title = work.title;
  
          let author = {};
          if (work.authors && work.authors.length > 0) {
            author.name = work.authors[0].name;
            author.urlKey = work.authors[0].key;
          }
  
          const coverId = work.cover_id;
          const coverUrl = `https://covers.openlibrary.org/a/id/${coverId}-M.jpg`;
  
          return {
            title,
            author,
            coverUrl
          };
        });
  
        return firstThreeBooks;
      })
      .catch(error => {
        // errors and unsuccessful requests
        console.warn('Error fetching fantasy books:', error.message);
        return null;
      });
};

export const getAuthor = () => {
};

export const createNewUser = () => {
}