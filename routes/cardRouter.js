// routes/cardRouter.js
const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.post('/cards', cardController.createCard);
router.get('/cards', cardController.getAllCards);
router.get('/cards/:title', cardController.getCardByTitle);

module.exports = router;
