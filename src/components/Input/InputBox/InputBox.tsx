import React from "react"
import './InputBox.scss'

import { Input } from "../Input"

type InputBoxProps = {
    className?: string
    text?: string
    placeholder?: string
}

export const InputBox = ({text, placeholder, className}: InputBoxProps) => {
    return <div className={`input-box ${className}`}>

        <p>{text}</p>
        <Input className="input-box_input" placeholder={placeholder}/>

    </div>
}