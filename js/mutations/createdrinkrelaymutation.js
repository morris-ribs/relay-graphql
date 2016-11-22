import Relay from 'react-relay';

class CreateDrinkRelayMutation extends Relay.Mutation {
    // the mutation that is going to be invoked
    getMutation() {
        return Relay.QL`
            mutation { CreateDrink }
        `;
    }

    // input to the mutation (we can do some logic here before sending it to the server)
    getVariables() {
        return {
            name: this.props.name,
            type1: this.props.type1,
            type2: this.props.type2,
            price: this.props.price,
            stock: this.props.stock
        };
    }

    // a query with the fragments representing everything that could be impacted by the mutation
    getFatQuery() {
        return Relay.QL`
            fragment on CreateDrinkPayload {
                drinkEdge,
                store { drinkConnection }
            }
        `;
    }

    // instructions we give to relay of how to handle the data retrieved from the server
    getConfigs() {
        return [{
            type: 'RANGE_ADD',
            parentName: 'store',
            parentID: this.props.store.id,
            connectionName: 'drinkConnection',
            edgeName: 'drinkEdge',
            rangeBehaviors: {
                '': 'prepend'
            },
        }];
    }
}

export default CreateDrinkRelayMutation;