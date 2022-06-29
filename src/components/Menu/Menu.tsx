import React from "react"
import "./Menu.scss"

import {Button} from '../../components/Button'

export const Menu = () => {
    return <div className="menu">
        <div className="menu_navigation">
            <p className="logo"><span>pix</span>ema</p>
            <Button text="Home"/>
            <Button text="Trends"/>
            <Button text="Favorites"/>
            <Button text="Settings"/>
        </div>

        <div className="menu_user-rights">
            <p>© All Rights Reserved</p>
        </div>
    </div>
}