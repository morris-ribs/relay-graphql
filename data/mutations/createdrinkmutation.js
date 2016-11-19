import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLFloat, GraphQLInt } from 'graphql';
import DrinkType from '../types/drinktype';
import Drink from '../../databasemodel/Drink';

let CreateDrinkType = new GraphQLInputObjectType({
  name: 'CreateDrink',
  fields: () => ({ // description of the fields { name_of_the_field: type_of_the_field }
          name: { type: new GraphQLNonNull(GraphQLString) },
          type1: { type: new GraphQLNonNull(GraphQLString) },
          type2: { type: new GraphQLNonNull(GraphQLString) },
          price: { type: GraphQLFloat, defaultValue: 0 },
          stock: { type: GraphQLInt, defaultValue: 0 }
      })
});

export default {
    type: DrinkType,
    args:{              
      input: { 
        type: new GraphQLNonNull(CreateDrinkType) }
    },
    resolve: (obj, {input}) => {
      
      // insertion
      return Drink.create
      (
        { name: input.name, type1: input.type1, type2: input.type2, price: input.price, stock: input.stock }, 
          function (err, drink) {
            if (err)
                console.log("Error creating drink: " + err);
            else
                console.log("Successfully created: " + drink);
            
            return drink;
          }
      );
    }
  };