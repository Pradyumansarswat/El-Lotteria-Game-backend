const express = require('express');
const { startGame, getRandomNumber } = require('../controllers/gameController');

const router = express.Router();

router.post('/start', startGame);
router.get('/random-number', getRandomNumber);

module.exports = router;