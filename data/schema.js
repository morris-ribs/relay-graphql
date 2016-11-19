import { GraphQLSchema } from 'graphql';
import QueryType from './types/QueryType';
import MutationType from './types/MutationType';


export var Schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});
