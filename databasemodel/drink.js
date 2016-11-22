import mongoose from 'mongoose';


let drinkModel = new mongoose.Schema({
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

let Drink = mongoose.model('Drink', drinkModel);
export default Drink;
