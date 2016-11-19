import mongoose from 'mongoose';


var drinkModel = new mongoose.Schema({
    name: {
        type: String
    },
    type1: {
        type: String
    },
    type2: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    }
});

module.exports = mongoose.model('Drink', drinkModel);
