import React, { useState } from "react"
import './VerifyPage.scss'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { InputBox } from "../../components/Input/InputBox"
import { Button } from "../../components/Button"
import { NavigationButton } from "../../components/Button/NavigationButton"
import { verifyFetch } from "../../thunkAction/VerifyFetch"

import { ReactComponent as IconLogo } from '../../components/Icons/IconLogo.svg'


export const VerifyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [uid, setUid] = useState('')
    const [token, setToken] = useState('')


    const onUidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUid(event.target.value)
    } 
    const onTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value)
    } 
    

    const submitForm = (event: any) => {
        event.preventDefault()
        const verifyData = {uid, token}       
        dispatch(verifyFetch(verifyData))
          .then((data: any) => {
            if (data.payload == 'ok') {
                navigate('/')
            }
          })
    }


    return <div className="verify">
        <NavigationButton className="verify_logo" Icon={IconLogo} route='/main'/>


        <div className="verify_center">
            <h1>Verify</h1>
            <form className="verify_center--inputs">
                <InputBox onChange={onUidChange} name='uid' className="verify_uid" text="Uid" placeholder="Your uid"/>
                <InputBox onChange={onTokenChange} name='token' text="Token" placeholder="Your token"/>
            </form>

            <Button onClick={submitForm} className="verify_button" text="Verify"/>
        </div>

    </div>
}