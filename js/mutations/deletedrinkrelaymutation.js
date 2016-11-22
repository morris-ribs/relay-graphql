import Relay from 'react-relay';

class DeleteDrinkRelayMutation extends Relay.Mutation {
  

    getMutation() {
        return Relay.QL`
            mutation { DeleteDrink }
        `;
    }


    getVariables() {
        return {
            id: this.props.id
        };
    }
    
  getFatQuery() {
    return Relay.QL`
      fragment on DeleteDrinkPayload {
        drinkEdge,
        store { drinkConnection },
      }
    `;
  }
  getConfigs() {
    return [{
      type: 'RANGE_DELETE',
      parentName: 'store',
      connectionName: 'drinkConnection',
      deletedIDFieldName: 'drinkEdge { node { id } }',
      pathToConnection: ['store', 'drinkConnection'],
    }];
  }

}

export default DeleteDrinkRelayMutation;