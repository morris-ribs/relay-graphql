import Relay from 'react-relay';

class DeleteDrinkRelayMutation extends Relay.Mutation {

    // the mutation that is going to be executed
    getMutation() {
        return Relay.QL`
            mutation { DeleteDrink }
        `;
    }

    // here we define the input variables that are going to be used to invoke the mutation
    getVariables() {
        return {
            id: this.props.id
        };
    }
    
    // here we indicate what will be impacted by the mutation
  getFatQuery() {
    return Relay.QL`
      fragment on DeleteDrinkPayload {
        drinkEdge,
        store { drinkConnection },
      }
    `;
  }

  // here we say that a node is going to be deleted from the store
  getConfigs() {
    return [{
      type: 'NODE_DELETE',
      parentID: this.props.store.id,
      parentName: 'store',
      connectionName: 'drinkConnection',
      deletedIDFieldName: 'drinkEdge {node { id }}',
    }];
  }

}

export default DeleteDrinkRelayMutation;