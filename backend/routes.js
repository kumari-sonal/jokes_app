const express = require('express');
const router = express.Router();
const { searchJokes, saveFavourite, getFavourites } = require('./controllers/jokeController');

// Route for searching jokes
router.post('/search-jokes', searchJokes);

// Route for saving a joke as a favourite
router.post('/favourite-joke', saveFavourite);

// Route for getting all favourited jokes from the database
router.get('/favourites', getFavourites);

module.exports = router;
