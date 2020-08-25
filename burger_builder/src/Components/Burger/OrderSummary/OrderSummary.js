import React, { Component } from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

//this could be a functional component because componentDidUpdate is no longer needed here. 
//We added the validations in Modal Component (which is wrapping the OrderSummary)
class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[OrderSummary] will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li>)
            })
        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        )
    }
}

export default OrderSummary