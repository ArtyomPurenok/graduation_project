import React from "react"
import './Input.scss'

type InputProps = {
    className?: string
    onChange?: any
    placeholder?: string
}

export const Input = ({className, onChange, placeholder}: InputProps) => {
    return <input className={className} onChange={onChange} placeholder={placeholder}></input>
}