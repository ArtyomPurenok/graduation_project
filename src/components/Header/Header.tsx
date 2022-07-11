import React, { useEffect, useState } from "react"
import "./Header.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Input } from "../Input"
import { Button } from "../Button"
import { Filter } from "./Filter"
import { seachFetch } from "../../thunkAction/seachFetch"
import { open } from "../../redux/reducer/filterReducer"

import { ReactComponent as IconArrow } from '../../components/Icons/IconArrow.svg'
import { ReactComponent as IconUser } from '../../components/Icons/IconUser.svg'
import { ReactComponent as IconFilter } from '../../components/Icons/IconFilter.svg'






export const Header = () => {
    const dataUser = useSelector((state: any) => state.user);
    const dataFilter = useSelector((state: any) => state.filters.open);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userIcon, setUserIcon] = useState();


    //Seach
    const [seach, setSeach] = useState('');


    const makeSeach = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeach(event.target.value)
        
        if (seach.length >= 2) {
            dispatch(seachFetch(seach))
            navigate('/seach')
        }else {navigate('/main')}
    } 


    //User
    useEffect(() => {
        if (dataUser.userName) {
            console.log(dataUser.userName);     
        }
    }, [dataUser])



    //function filter
    const [filterActive, setFilterActive] = useState('');

    const openFilter = () => {
        dispatch(open('open'))
    }

    
    useEffect(() => {
        if (dataFilter === 'open') {
            setFilterActive('open')
        }else if (dataFilter === 'close') {
            setFilterActive('')
        }
    }, [dataFilter])

    const authorization = () => {
        navigate('/signIn')
    }




    return <div className="header_general">

        {filterActive && <Filter/>}

        <div className="header">
            <div className="header_seach">
                <Input onChange={makeSeach} placeholder="Seach"/>
                <Button onClick={openFilter} Icon={IconFilter}/>
            </div>

                <button onClick={authorization} className="header_user">
                    <div className="header_user--icon">{dataUser.userName ? dataUser.userName.slice(0, 2) : <IconUser/>}</div>
                    {dataUser.userName ? <p>{dataUser.userName}</p> : <p>Log In</p>}
                    {dataUser.userName ? <div className="header_user--arrow"><IconArrow/></div> : ''}
                </button>
        </div>



    </div>
}