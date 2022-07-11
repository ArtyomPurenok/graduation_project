import React, { useEffect, useState } from "react"
import "./Menu.scss"

import {Button} from '../../components/Button'
import { NavigationButton } from "../Button/NavigationButton"

import { ReactComponent as IconLogo } from '../../components/Icons/IconLogo.svg'
import { ReactComponent as IconHome } from '../../components/Icons/IconHome.svg'
import { ReactComponent as IconTrends } from '../../components/Icons/IconTrends.svg'
import { ReactComponent as IconBookmark } from '../../components/Icons/IconBookmark.svg'
import { ReactComponent as IconSetting } from '../../components/Icons/IconSetting.svg'

export const Menu = () => {
    const [active, setActive] = useState(1);

    const openPage = (el: any) => {      
        setActive(el.target.dataset.index);
    };




    return <div className="menu">

        <div className="menu_navigation">
            <div className="menu_logo"><IconLogo/></div>

            <div className="menu_buttons">
                <NavigationButton className={`${1 == active ? 'menu_buttons--active' : ''}`} Icon={IconHome} onClick={openPage} dataIndex={'1'} text="Home" route='/main'/>
                <NavigationButton className={`${2 == active ? 'menu_buttons--active' : ''}`} Icon={IconTrends} onClick={openPage} dataIndex={'2'} text="Trends" route='/trends'/>
                <NavigationButton className={`${3 == active ? 'menu_buttons--active' : ''}`} Icon={IconBookmark} onClick={openPage} dataIndex={'3'} text="Favorites" route='/favorites'/>
                <NavigationButton className={`${4 == active ? 'menu_buttons--active' : ''}`} Icon={IconSetting} onClick={openPage} dataIndex={'4'} text="Settings"/>
            </div>
        </div>

        <div className="menu_user-rights">
            <p>© All Rights Reserved</p>
        </div>
    </div>
}