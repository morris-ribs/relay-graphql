import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import Drink from '../../databasemodel/Drink';
import StoreType from './storetype';

let storeObj = {};

// this represents all READ operations
let QueryType = new GraphQLObjectType({
    name:'Query',
    fields: () => ({
        store: {
            type: StoreType,
            resolve: () => storeObj
        }
    })
});

export default QueryType;
