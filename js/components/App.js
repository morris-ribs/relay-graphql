import React, {PropTypes} from 'react';
import Relay from 'react-relay';
import Drink from './Drink';
import CreateDrinkRelayMutation from '../mutations/CreateDrinkRelayMutation';

// the application
class App extends React.Component {
  setLimit = (e) => {
    let newLimit = Number(e.target.value);
    this.props.relay.setVariables({limit: newLimit});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    Relay.Store.commitUpdate(
      new CreateDrinkRelayMutation({
        name: this.refs.newName.value,
        type1: this.refs.newType.value,
        type2: this.refs.newSubtype.value,
        price: this.refs.newPrice.value,
        stock: this.refs.newStock.value,
        store: this.props.store
      })
    );

    this.refs.newName.value = "";
    this.refs.newType.value = "";
    this.refs.newSubtype.value = "";
    this.refs.newPrice.value = "";
    this.refs.newStock.value = "";
  }

  render() {
    let content = this.props.store.drinkConnection.edges.map(edge => {
      return <Drink key={edge.node.id} drink={edge.node} store={this.props.store} />;
    });
    
    return (
      <div>
        <h1>Drink list</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref="newName" />
          <input type="text" placeholder="Type" ref="newType" />
          <input type="text" placeholder="Subtype" ref="newSubtype" />
          <input type="text" placeholder="Price" ref="newPrice" />
          <input type="text" placeholder="Stock" ref="newStock" />
          <button type="Submit">Add</button>
        </form>
        <select onChange={this.setLimit} defaultValue="10">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  initialVariables: {
    limit:10
  }, 
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
        id,
        drinkConnection (first: $limit) {
          edges {
            node {
              id,
              ${Drink.getFragment('drink')}
            }
          }
        }
      }
    `,
  },
});
