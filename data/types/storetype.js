import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import Drink from '../../databasemodel/Drink';
import DrinkType from './drinktype';

let StoreType = new GraphQLObjectType({
    name:'Store',
    fields:() => ({
        drinks: {
            type: new GraphQLList(DrinkType),
            args: { // for filtering
                name: {
                    name: 'name',
                    type: GraphQLString
                }
            },
            resolve: (root, {name}) => 
            { 
                if (name != null && name != "")
                    return Drink.find({'name': name}).exec();
                
                return Drink.find().exec(function(err, drinksArr){
                    if(err) console.log(err);
                    else console.log('no errors');
                    console.log(drinksArr);
                    return drinksArr;
                });
            }
            // function that GraphQL will execute in order to resolve the field
            // here we get all the candidates from the DB
        }
    })
    
});

export default StoreType;