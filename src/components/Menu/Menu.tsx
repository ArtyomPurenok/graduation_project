import React from "react"
import "./Menu.scss"

import {Button} from '../../components/Button'
import { NavigationButton } from "../Button/NavigationButton"

export const Menu = () => {
    return <div className="menu">
        <div className="menu_navigation">
            <p className="logo"><span>pix</span>ema</p>
            <NavigationButton text="Home" route='/main'/>
            <NavigationButton text="Trends"/>
            <NavigationButton text="Favorites" route='/favorites'/>
            <NavigationButton text="Settings"/>
        </div>

        <div className="menu_user-rights">
            <p>© All Rights Reserved</p>
        </div>
    </div>
}