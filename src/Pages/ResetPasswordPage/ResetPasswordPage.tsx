import React, { useState } from "react"
import './ResetPasswordPage.scss'
import { useNavigate } from "react-router-dom"

import { InputBox } from "../../components/Input/InputBox"
import { Button } from "../../components/Button"
import { NavigationButton } from "../../components/Button/NavigationButton"
import { resetPasswordFetch } from "../../thunkAction/resetPasswordFetch"

import { ReactComponent as IconLogo } from '../../components/Icons/IconLogo.svg'



export const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    } 


    const sendingData = (event: any) => {
        event.preventDefault();
        const formData = {email};
        resetPasswordFetch(formData)
        .then((data: any) => {
            if (data == 'ok') {
                navigate('/newPassword')
            }
        })

    }



    return <div className="reset-password">
        <NavigationButton className="reset-password_logo" Icon={IconLogo} route='/main'/>


        <div className="reset-password_center">
            <h1>Reset Password</h1>
            <form className="reset-password_center--inputs">
                <InputBox onChange={onEmailChange} name='Email' className="reset-password_password" text="Email" placeholder="Your email"/>
            </form>

            <Button onClick={sendingData} className="reset-password_button" text="Reset"/>
        </div>

    </div>
}