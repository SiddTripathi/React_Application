import React from 'react';
import Auxiliary from '../../hoc/Auxiliary'

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Auxiliary >
        <Toolbar></Toolbar>
        <main className={classes.content}>
            {props.children}
        </main>

    </Auxiliary>

)

export default layout;