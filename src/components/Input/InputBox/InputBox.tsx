import React from "react"
import './InputBox.scss'

import { Input } from "../Input"

type InputBoxProps = {
    className?: string
    text?: string
    placeholder?: string
    value?: string
    name?: string
    type?: string
    onChange?: any
}

export const InputBox = ({text, placeholder, className, value, name, type, onChange}: InputBoxProps) => {
    return <div className={`input-box ${className}`}>

        <p>{text}</p>
        <Input onChange={onChange} type={type} name={name} value={value} className="input-box_input" placeholder={placeholder}/>

    </div>
}