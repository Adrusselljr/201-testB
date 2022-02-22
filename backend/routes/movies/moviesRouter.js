const express = require('express');
const router = express.Router();
const { createMovie, getAll, getOne, updateOne, deleteOne } = require('./controller/movieController')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hello World!');
});

router.post('/create-movie', createMovie)
router.get('/get-all-movies', getAll)
router.get('/get-one-movie/:id', getOne)
router.put('/update-movie', updateOne)
router.delete('/delete-movie', deleteOne)

module.exports = router