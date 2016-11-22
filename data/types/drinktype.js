 import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLNonNull, GraphQLID } from 'graphql';
 
  // declaration of our type Drink
  let DrinkType = new GraphQLObjectType({
      name: "Drink",
      fields: () => ({ // description of the fields { name_of_the_field: type_of_the_field }
          id: {
             type: new GraphQLNonNull(GraphQLID),
             resolve: (obj) => obj._id 
          },
          name: { type: GraphQLString },
          type1: { type: GraphQLString },
          type2: { type: GraphQLString },
          price: { type: GraphQLFloat },
          stock: { type: GraphQLInt }
      })
  });

  export default DrinkType;