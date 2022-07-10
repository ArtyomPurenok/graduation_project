import React from "react"
import { useSelector } from "react-redux"
import './CardDataTable.scss'

type DataProps = {
    dataForDescription?: any
}

export const CardDataTable = ({dataForDescription}: DataProps) => {
    const arrTabData = ['Year', 'Released', 'BoxOffice', 'Country', 'Production', 'Actors', 'Director', 'Writer']
    
    const tab = arrTabData.map((el: string) => {
        return <tr>
            <td>{el}</td>
            <td>{dataForDescription?.[el]}</td>
        </tr>
    })

    return <table>
        <thead>
            {tab}
    </thead>
</table>
}