import { GraphQLObjectType } from 'graphql';
import CreateDrinkMutation from '../mutations/CreateDrinkMutation';
import UpdateDrinkMutation from '../mutations/UpdateDrinkMutation';
import DeleteDrinkMutation from '../mutations/DeleteDrinkMutation';

let MutationType = new GraphQLObjectType({
    name:'MutationType',
    fields: () => ({
        CreateDrink: CreateDrinkMutation,
        UpdateDrink: UpdateDrinkMutation,
        DeleteDrink: DeleteDrinkMutation
    })
});

export default MutationType;