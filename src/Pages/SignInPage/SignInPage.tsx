import React, { useEffect, useState } from "react"
import './SignInPage.scss'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { InputBox } from "../../components/Input/InputBox"
import { Button } from "../../components/Button"
import { NavigationButton } from "../../components/Button/NavigationButton"
import { tokenFetch } from '../../thunkAction/tokenFetch'
import { userFeatch } from "../../thunkAction/userFetch"

import { ReactComponent as IconLogo } from '../../components/Icons/IconLogo.svg'




export const SignInPage = () => {
    const userData = useSelector((state: any) => state.user);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }  
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }


    const submitForm = (event: any) => {
        event.preventDefault();
        const formData = {email, password};
        dispatch(tokenFetch(formData))
          .then((data: any) => dispatch(userFeatch(data.payload.access)))
    }


    useEffect(() => {
        if (userData.userName != null) {
            navigate('/main')
        }  
    }, [userData])



    return <div className="sign-in">
        <NavigationButton className="sign-in_logo" Icon={IconLogo} route='/main'/>


        <div className="sign-in_center">
            <h1>Sign In</h1>
            <form className="sign-in_center--inputs">
                <InputBox onChange={onEmailChange} name='Email' className="sign-in_email" text="Email" placeholder="Your email"/>
                <InputBox onChange={onPasswordChange} name='Password' text="Password" placeholder="Your password"/>
                <a className="sign-in_center--forgot-password" href="/resetPassword">Forgot password?</a>
            </form>

            <Button onClick={submitForm} className="sign-in_button" text="Sign in"/>

            <p className="sign-in_sign-up">Don’t have an account? <a href="/signUp">Sign Up</a></p>
        </div>

    </div>
}