import React from 'react'

import Aux from '../../hoc/Aux'
import classes from './lauout.css'
const layout=(props)=>
(   <div className="layout">
    <div className="margin">Toolbar,SideDrwer,Backdrop</div>
    <main>{props.children}</main>
    </div>
)

export default layout