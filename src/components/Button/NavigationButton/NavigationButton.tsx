import React from "react"
import { Link } from "react-router-dom"
import './NavigationButton.scss'

type ButtonProps = {
    className?: string
    onClick?: any
    text?: string
    route?: string | number
    Icon?: any
    dataIndex?: any
}

export const NavigationButton = ({className, onClick, text, route, Icon, dataIndex}: ButtonProps) => {
    return <Link to={`${route}`}><button data-index={dataIndex} className={className} onClick={onClick}>{Icon && <Icon/>}{text}</button></Link>
}