import React, { useEffect, useState } from "react"
import "./Header.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Input } from "../Input"
import { Button } from "../Button"
import { Filter } from "./Filter"
import { seachFetch } from "../../thunkAction/seachFetch"

import { ReactComponent as IconArrow } from '../../components/Icons/IconArrow.svg'
import { ReactComponent as IconUser } from '../../components/Icons/IconUser.svg'






export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userIcon, setUserIcon] = useState();


    //function seach
    const [seach, setSeach] = useState('');


    const makeSeach = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeach(event.target.value)
        
        if (seach.length >= 2) {
            dispatch(seachFetch(seach))
            navigate('/seach')
        }else {navigate('/main')}
    } 





    //function filter
    const [filterActive, setFilterActive] = useState('');

    const openFilter = () => {
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
                <Input onChange={makeSeach} placeholder="Seach"/>
                <Button onClick={openFilter}/>
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