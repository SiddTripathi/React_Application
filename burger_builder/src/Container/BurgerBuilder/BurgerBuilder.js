import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <Burger></Burger>
                <div>Build Control</div>

            </Auxiliary>

        );
    }
}


export default BurgerBuilder;