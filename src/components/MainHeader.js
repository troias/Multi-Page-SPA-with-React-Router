import React from 'react'
import classes from './MainHeader.module.css'
import {

    NavLink
} from "react-router-dom";
const MainHeader = () => {
    return (
        <header className={classes.header}>
           
            <nav>
                
                <ul >
                    <li >
                        <NavLink activeClassName={classes.active} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/Products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active }to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader