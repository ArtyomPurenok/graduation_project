import React, { useState } from "react"
import "./Header.scss"

import { Input } from "../Input"
import { Button } from "../Button"
import { Filter } from "./Filter"

import { ReactComponent as IconArrow } from '../../components/Icons/IconArrow.svg'
import { ReactComponent as IconUser } from '../../components/Icons/IconUser.svg'
import { useNavigate } from "react-router-dom"




export const Header = () => {
    const navigate = useNavigate();
    const [userIcon, setUserIcon] = useState();
    const [filterActive, setFilterActive] = useState('');

    const OpenFilter = () => {
        if (!filterActive) {
            setFilterActive('active')
        }else {setFilterActive('')}
    }

    const authorization = () => {
        navigate('/signIn')
    }




    return <div className="header_general">

        {filterActive && <Filter/>}

        <div className="header">
            <div className="header_seach">
                <Input placeholder="Seach"/>
                <Button onClick={OpenFilter}/>
            </div>

                <button onClick={authorization} className="header_user">
                    {/* {userData.name ? <div className="header_user--icon">{userData.name}</div> : <IconUser/>} */}
                    <div className="header_user--icon"><IconUser/></div>
                    <p>Aretem</p>
                    <div className="header_user--arrow"><IconArrow/></div>
                </button>
        </div>



    </div>
}