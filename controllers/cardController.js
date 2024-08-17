// controllers/cardController.js
const cardService = require('../services/cardService');

const createCard = async (req, res) => {
    const { title, description } = req.body;
    try {
        const card = await cardService.createCard(title, description);
        res.status(201).json(card);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllCards = async (req, res) => {
    try {
        const cards = await cardService.getAllCards();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCardByTitle = async (req, res) => {
    const { title } = req.params;
    try {
        const card = await cardService.getCardByTitle(title);
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCard,
    getAllCards,
    getCardByTitle,
};
