import React from 'react';
import Relay from 'react-relay';
import DeleteDrinkRelayMutation from '../mutations/DeleteDrinkRelayMutation';

let onSuccess = () => location.reload();

class Drink extends React.Component {     
    handleDelete = () => {
        Relay.Store.commitUpdate(
            new DeleteDrinkRelayMutation({
                id: this.props.drink.id,
                store: this.props.store
            })
        ,{onSuccess});
    }
    
    render() {
        let {drink} = this.props;
        return (
            <li key={drink.id}>{drink.name} - Price: ({drink.price}) x {drink.stock} <button onClick={this.handleDelete}>Delete</button></li>            
        );
    }
}

// create the Relay container related to each drink
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