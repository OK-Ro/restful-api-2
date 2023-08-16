const express = require('express');
const router = express.Router();
const moviesController = require('./moviesController');

router.get('/', moviesController.getAllMovies);
router.get('/:title', moviesController.getMovieByTitle);
router.get('/:id', moviesController.getMovieById);
router.post('/', moviesController.createMovie);
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;
