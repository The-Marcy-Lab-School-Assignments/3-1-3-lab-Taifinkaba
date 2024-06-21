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
                name: work.authors[0].name,
                urlKey: work.authors[0].key,
            },
            coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`,
        }));

        return firstThreeBooks;
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};

export const getAuthor = async (urlKey) => {
    const baseUrl = 'https://openlibrary.org';
    const endpoint = `${baseUrl}${urlKey}.json`;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error('Failed to get author');
        }

        const data = await response.json();

        const formattedAuthor = {
            birthDate: data.birth_date,
            bio: data.bio,
            wikipediaUrl: data.wikipedia,
            name: data.name,
            pictureUrl: `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg`
        };

        return formattedAuthor;
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};

export const createNewUser = async (user) => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error('Failed to create new user');
        }

        const newUser = await response.json();
        return newUser; 
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};