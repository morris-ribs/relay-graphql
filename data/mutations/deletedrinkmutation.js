import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean } from 'graphql';
import DrinkType from '../types/drinktype';
import Drink from '../../databasemodel/Drink';

let DeleteDrinkType = new GraphQLInputObjectType({
  name: 'DeleteDrink',
  fields: () => ({ // description of the fields { name_of_the_field: type_of_the_field }
          _id:  { type: new GraphQLNonNull(GraphQLString) }
      })
});

export default {
    type: GraphQLString,
    args:{              
      input: { 
        type: new GraphQLNonNull(DeleteDrinkType) }
    },
    resolve: (obj, {input}) => {
      
      var query = {"_id": input._id};

      // remove the data
      Drink.remove
      ( query, // to search for the current data
          function (err) { // callback        
            if (err)
              throw(err);
          }
      );

      return "Successfully deleted!";
    }
  };