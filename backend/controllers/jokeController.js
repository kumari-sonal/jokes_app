const axios = require('axios');
const db = require('../db');

// Search jokes from an external API
const searchJokes = async (req, res) => {
    const { query } = req.body;
    try {
        const response = await axios.get(`https://official-joke-api.appspot.com/jokes/search?term=${query}`);
        const jokes = response.data.map(joke => ({
            joke_id: joke.id,
            joke_text: joke.setup + ' ' + joke.punchline,
            image_url: `https://source.unsplash.com/400x300/?funny,joke`
        }));
        res.json(jokes);
    } catch (error) {
        res.status(500).send('Error fetching jokes.');
    }
};

// Save joke as favourite
const saveFavourite = (req, res) => {
    const { joke_id, joke_text, image_url } = req.body;

    db.query('INSERT INTO favourites (joke_id, joke_text, image_url) VALUES (?, ?, ?)',
        [joke_id, joke_text, image_url],
        (err, results) => {
            if (err) {
                res.status(500).send('Error saving favourite.');
                return;
            }
            res.status(200).send('Joke added to favourites.');
        }
    );
};

// Get all favourite jokes from DB
const getFavourites = (req, res) => {
    db.query('SELECT * FROM favourites', (err, results) => {
        if (err) {
            res.status(500).send('Error fetching favourites.');
            return;
        }
        res.json(results);
    });
};

module.exports = { searchJokes, saveFavourite, getFavourites };
