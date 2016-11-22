import DrinkType from '../types/drinktype';
import { connectionDefinitions } from 'graphql-relay';

let DrinkConnection = connectionDefinitions ({
    name: 'Drink',
    nodeType: DrinkType
});

export default DrinkConnection;