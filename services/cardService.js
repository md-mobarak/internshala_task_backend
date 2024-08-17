// services/cardService.js
const Card = require('../models/cardModel');

const createCard = async (title, description) => {
    const card = new Card({ title, description });
    return await card.save();
};

const getAllCards = async () => {
    return await Card.find({});
};

const getCardByTitle = async (title) => {
    return await Card.findOne({ title });
};

module.exports = {
    createCard,
    getAllCards,
    getCardByTitle,
};
