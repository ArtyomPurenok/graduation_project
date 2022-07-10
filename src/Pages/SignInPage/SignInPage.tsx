import React from "react"
import './SignInPage.scss'

import { InputBox } from "../../components/Input/InputBox"
import { Button } from "../../components/Button"
import { NavigationButton } from "../../components/Button/NavigationButton"

import { ReactComponent as IconLogo } from '../../components/Icons/IconLogo.svg'


export const SignInPage = () => {
    return <div className="sign-in">
        <NavigationButton className="sign-in_logo" Icon={IconLogo} route='/main'/>


        <div className="sign-in_center">
            <h1>Sign In</h1>
            <div className="sign-in_center--inputs">
                <InputBox className="sign-in_email" text="Email"/>
                <InputBox text="Password"/>
                <a href="">Forgot password?</a>
            </div>

            <Button className="sign-in_button" text="Sign in"/>

            <p className="sign-in_sign-up">Don’t have an account? <a href="">Sign Up</a></p>
        </div>

    </div>
}