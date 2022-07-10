import React, { useEffect, useState } from "react"
import './SignUpPage.scss'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { InputBox } from "../../components/Input/InputBox"
import { Button } from "../../components/Button"
import { NavigationButton } from "../../components/Button/NavigationButton"
import { signUpFetch } from "../../thunkAction/signUpFetch"

import { ReactComponent as IconLogo } from '../../components/Icons/IconLogo.svg'



export const SignUpPage = () => {
    const userData = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    } 
    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    }  
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    }


    const submitForm  = (event: any) => {
        event.preventDefault();
        const formData = {username, email, password};
        dispatch(signUpFetch(formData))
          .then((data: any) => {        
            if (data.payload.username) {              
                navigate('/verify')
            }
          })
      }


    
    return <div className="sign-up">
        <NavigationButton className="sign-up_logo" Icon={IconLogo} route='/main'/>


        <div className="sign-up_center">
            <h1>Sign Up</h1>

            <form className="sign-up_center--inputs">
                <InputBox onChange={onNameChange} name='Name' className="sign-up_name" text="Name" placeholder="Your name"/>
                <InputBox onChange={onEmailChange} name='Email' className="sign-up_email" text="Email" placeholder="Your email"/>
                <InputBox onChange={onPasswordChange} name='Password' text="Password" type="password" placeholder="Your password"/>
            </form>

            <Button onClick={submitForm} className="sign-up_button" text="Sign Up"/>

            <p className="sign-up_sign-in">Don’t have an account? <a href="/signIn">Sign In</a></p>
        </div>

    </div>
}