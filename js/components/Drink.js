import React from 'react';
import Relay from 'react-relay';
import DeleteDrinkRelayMutation from '../mutations/DeleteDrinkRelayMutation';

class Drink extends React.Component {
    handleDelete = () => {
        Relay.Store.commitUpdate(
            new DeleteDrinkRelayMutation({
                id: this.props.drink.id
            })
        );
    }
    
    render() {
        let {drink} = this.props;
        return (
            <li key={drink.id}>{drink.name} - Price: ({drink.price}) x {drink.stock} <button onClick={this.handleDelete}>Delete</button></li>
            
        );
    }
}

Drink = Relay.createContainer(Drink, {
    fragments: {
        drink:() => Relay.QL`
            fragment on Drink {
                id,
                name,
                price,
                stock
            }
        `
    }
});

export default Drink;