import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean } from 'graphql';
import DrinkType from '../types/drinktype';
import Drink from '../../databasemodel/Drink';
import StoreType from '../types/storetype';
import DrinkConnection from '../connections/DrinkConnection';
import mongoose from 'mongoose';


import {mutationWithClientMutationId} from 'graphql-relay';

let storeObj = {};

/* eslint-disable no-alert, no-console */
let UpdateDrinkMutation = mutationWithClientMutationId({
  name: "UpdateDrink",
  inputFields:{
    id: { type: new GraphQLNonNull(GraphQLString) }
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
  mutateAndGetPayload:({id, name, type1, type2, price, stock}) => {
      let promise = Drink.findByIdAndUpdate(mongoose.Types.ObjectId(id), { name: name, type1: type1, type2: type2, price: price, stock: stock });
      return promise.then(function(doc) {
          return doc;
      });
  }
});

export default UpdateDrinkMutation;