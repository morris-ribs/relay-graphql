import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import Drink from '../../databasemodel/Drink';
import DrinkType from './drinktype';
import { globalIdField, connectionDefinitions, connectionArgs, connectionFromPromisedArray } from 'graphql-relay';
import DrinkConnection from '../connections/DrinkConnection';

/* eslint-disable no-alert, no-console */

let StoreType = new GraphQLObjectType({
    name:'Store',
    fields:() => ({
        id: globalIdField("Store"),
        drinkConnection: {            
            type: DrinkConnection.connectionType,
            args:  connectionArgs,
            resolve: (root, args) => 
            { 
                return connectionFromPromisedArray(Drink.find().exec(function(err, drinksArr){
                    if(err) console.log(err);
                    else console.log('no errors');
                    console.log(drinksArr);
                    return drinksArr;
                }),
                args);
            }
            // function that GraphQL will execute in order to resolve the field
            // here we get all the candidates from the DB
        }
    })
    
});

export default StoreType;