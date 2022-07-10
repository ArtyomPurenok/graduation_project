import React from "react"
import './Button.scss'

type ButtonProps = {
    className?: string
    onClick?: any
    text?: string
    Icon?: any
}

export const Button = ({className, onClick, text,Icon}: ButtonProps) => {
    return <button className={className} onClick={onClick}>
        {Icon && <Icon height='100%'/>}
        {text}
        </button>
}