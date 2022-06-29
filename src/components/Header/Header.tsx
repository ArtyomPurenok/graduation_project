import React from "react"
import "./Header.scss"

import { Input } from "../Input"


export const Header = () => {
    return <div className="header">

            <Input className="header_seach" placeholder="Seach"/>
            <div className="header_user">
                user
            </div>

    </div>
}