import React, { useState } from "react"
import './NewPasswordPage.scss'
import { useNavigate } from "react-router-dom"

import { InputBox } from "../../components/Input/InputBox"
import { Button } from "../../components/Button"
import { NavigationButton } from "../../components/Button/NavigationButton"
import { newPasswordFetch } from "../../thunkAction/newPasswordFetch"

import { ReactComponent as IconLogo } from '../../components/Icons/IconLogo.svg'



export const NewPasswordPage = () => {
    const navigate = useNavigate();

    const [uid, setUid] = useState('');
    const [token, setToken] = useState('');
    const [new_password, setNewPassword] = useState('');


    const onUidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUid(event.target.value)
    } 
    const onTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value)
    } 
    const onNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value)
    } 


    const SetNewPassword = (event: any) => {
        event.preventDefault();
        const formData = {uid, token, new_password};
        newPasswordFetch(formData)
        .then((data: any) => {
            if (data == 'ok') {
                alert('You changed your password')
                navigate('/main')
            }
        })
    }


    return <div className="new-password">
        <NavigationButton className="new-password_logo" Icon={IconLogo} route='/main'/>


        <div className="new-password_center">
            <h1>New Password</h1>
            <form className="new-password_center--inputs">
                <InputBox onChange={onUidChange} name='Uid' className="new-password_input" text="Uid" placeholder="Your uid"/>
                <InputBox onChange={onTokenChange} name='Token' className="new-password_input" text="Token" type="password" placeholder="Your token"/>
                <InputBox onChange={onNewPasswordChange} name='Password' text="Password" type="password" placeholder="Your password"/>
            </form>

            <Button onClick={SetNewPassword} className="new-password_button" text="Set password"/>
        </div>

    </div>
}