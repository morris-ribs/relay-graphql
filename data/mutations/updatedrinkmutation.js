import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLFloat, GraphQLInt, GraphQLBoolean } from 'graphql';
import DrinkType from '../types/drinktype';
import Drink from '../../databasemodel/Drink';

let UpdateDrinkType = new GraphQLInputObjectType({
  name: 'UpdateDrink',
  fields: () => ({ // description of the fields { name_of_the_field: type_of_the_field }
          _id:  { type: new GraphQLNonNull(GraphQLString) },
          name: { type: GraphQLString },
          type1: { type: GraphQLString },
          type2: { type: GraphQLString },
          price: { type: GraphQLFloat, defaultValue: 0 },
          stock: { type: GraphQLInt, defaultValue: 0 }
      })
});

export default {
    type: GraphQLString,
    args:{              
      input: { 
        type: new GraphQLNonNull(UpdateDrinkType) }
    },
    resolve: (obj, {input}) => {      
      var query = {"_id": input._id};

      // updating...
      Drink.update
      ( query, // to search for the current data
        { name: input.name, type1: input.type1, type2: input.type2, price: input.price, stock: input.stock }, // the updates to be done
          function (err) { // callback            
            if (err)
              throw err;
          }
      );

      return "Successfully updated!";
    }
  };