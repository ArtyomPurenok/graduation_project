import React from "react"
import './Button.scss'

type ButtonProps = {
    className?: string
    onClick?: any
    text?: string
    Icon?: any
    dataIndex?: string | number
}

export const Button = ({className, onClick, text,Icon, dataIndex}: ButtonProps) => {
    return <button className={className} onClick={onClick} data-index={dataIndex}>
        {Icon && <Icon height='100%'/>}
        {text}
        </button>
}