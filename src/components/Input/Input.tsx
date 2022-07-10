import React from "react"
import './Input.scss'

type InputProps = {
    className?: string
    onChange?: any
    placeholder?: string
    value?: string
    name?: string
    type?: string
}

export const Input = ({className, onChange, placeholder, value, name, type}: InputProps) => {
    return <input type={type} name={name} value={value} className={className} onChange={onChange} placeholder={placeholder}></input>
}