import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLFloat, GraphQLInt } from 'graphql';
import DrinkType from '../types/drinktype';
import StoreType from '../types/storetype';
import Drink from '../../databasemodel/Drink';

import {mutationWithClientMutationId} from 'graphql-relay';
import DrinkConnection from '../connections/DrinkConnection';

let storeObj = {};

/* eslint-disable no-alert, no-console */
let CreateDrinkMutation = mutationWithClientMutationId({
  name: "CreateDrink",
  inputFields:{
    name: { type: new GraphQLNonNull(GraphQLString) },
    type1: { type: new GraphQLNonNull(GraphQLString) },
    type2: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLFloat, defaultValue: 0 },
    stock: { type: GraphQLInt, defaultValue: 0 }
  },
  outputFields: {
    drinkEdge: {
      type: DrinkConnection.edgeType,
      resolve: (obj) => ({node: obj, cursor: obj.id })
    },
    store: {
      type: StoreType,
      resolve: () => storeObj
    }
  },
  mutateAndGetPayload:({name, type1, type2, price, stock}) => {
    return Drink.create (
        { name: name, type1: type1, type2: type2, price: price, stock: stock }, 
          function (err, drink) {
            if (err)
                console.log("Error creating drink: " + err);
            else
                console.log("Successfully created: " + drink);
            
            return drink;
          }
      );
  }
});

export default CreateDrinkMutation;
