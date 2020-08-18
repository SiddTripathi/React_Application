import React from 'react'

import classes from './Logo.module.css'
import burgerLogo from '../../Assets/images/burger-logo.png'

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Burger Icon"></img>
    </div>
);

export default logo;