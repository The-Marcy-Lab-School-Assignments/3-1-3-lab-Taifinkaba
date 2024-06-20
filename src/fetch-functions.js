// export const getFirstThreeFantasyBooks = () => {
//     const url = 'https://openlibrary.org/subjects/fantasy.json';

//     return fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to get fantasy books');
//         }
//         return response.json();
//       })
//       .then(data => {
//         const firstThreeBooks = data.works.slice(0, 3).map(work => {
//           const title = work.title;
  
//           let author = {};
//           if (work.authors && work.authors.length > 0) {
//             author.name = work.authors[0].name;
//             author.urlKey = work.authors[0].key;
//           }
  
//           const coverId = work.cover_id;
//           const coverUrl = `https://covers.openlibrary.org/a/id/${coverId}-M.jpg`;
  
//           return {
//             title,
//             author,
//             coverUrl
//           };
//         });
  
//         return firstThreeBooks;
//       })
//       .catch(error => {
//         // errors and unsuccessful requests
//         console.warn("Failed to get fantasy books", error.message);
//         return null;
//       });
// };

export const getFirstThreeFantasyBooks = async () => {
    const url = 'https://openlibrary.org/subjects/fantasy.json';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to get fantasy books');
        }

        const jsonData = await response.json();
        const firstThreeBooks = jsonData.works.slice(0, 3).map((work) => ({
            title: work.title,
            author: {
                name: work.authors[0]?.name,
                urlKey: work.authors[0]?.key,
            },
            coverUrl: `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`,
        }));

        return firstThreeBooks;
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};

export const getAuthor = (urlKey) => {
    const baseUrl = 'https://openlibrary.org';
    const endpoint = `${baseUrl}${urlKey}.json`;
  
    return fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to get author');
        }
        return response.json();
      })
      .then(data => {
        const formattedAuthor = {
          birthDate: data.birth_date,
          bio: data.bio,
          wikipediaLink: data.wikipedia,
          name: data.name,
          pictureUrl: data.photos && data.photos.length > 0
            ? `https://covers.openlibrary.org/b/id/${data.photos[0]}-M.jpg`
            : null
        };
        return formattedAuthor;
      })
      .catch(error => {
        console.warn(error.message);
        return null;
      });
};

export const createNewUser = () => {
}