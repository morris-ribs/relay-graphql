import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean } from 'graphql';
import DrinkType from '../types/drinktype';
import Drink from '../../databasemodel/Drink';
import StoreType from '../types/storetype';
import DrinkConnection from '../connections/DrinkConnection';
import mongoose from 'mongoose';


import {mutationWithClientMutationId} from 'graphql-relay';

let storeObj = {};

/* eslint-disable no-alert, no-console */
let DeleteDrinkMutation = mutationWithClientMutationId({
  name: "DeleteDrink",
  inputFields:{ // here is what the server is going to receive from the client
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: { // here is what the server is going to send to the client
    drinkEdge: {
      type: DrinkConnection.edgeType,
      resolve: (obj) => ({node: obj, cursor: obj.id })
    },
    store: {
      type: StoreType,
      resolve: () => storeObj
    }
  },
  mutateAndGetPayload:({id}) => {
      // we use a promise to retrieve the deleted document
      let promise = Drink.findByIdAndRemove(mongoose.Types.ObjectId(id));
      return promise.then(function(doc) {
          return doc;
      });
  }
});

export default DeleteDrinkMutation;
