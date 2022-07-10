import React from "react"
import { Link } from "react-router-dom"
import './NavigationButton.scss'

type ButtonProps = {
    className?: string
    onClick?: any
    text?: string
    route?: string | number
    Icon?: any
}

export const NavigationButton = ({className, onClick, text, route, Icon}: ButtonProps) => {
    return <Link to={`${route}`}><button className={className} onClick={onClick}>{text}{Icon && <Icon/>}</button></Link>
}