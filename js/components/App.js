import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Drink list</h1>
        <ul>
          {this.props.store.drinks.map(drink =>
            <li key={drink._id}>{drink.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
          drinks {
            _id,
            name
          }        
      }
    `,
  },
});
