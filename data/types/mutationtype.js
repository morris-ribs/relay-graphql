import { GraphQLObjectType } from 'graphql';
import CreateDrinkMutation from '../mutations/CreateDrinkMutation';
import DeleteDrinkMutation from '../mutations/DeleteDrinkMutation';

let MutationType = new GraphQLObjectType({
    name:'MutationType',
    fields: () => ({
        CreateDrink: CreateDrinkMutation,
        DeleteDrink: DeleteDrinkMutation
    })
});

export default MutationType;