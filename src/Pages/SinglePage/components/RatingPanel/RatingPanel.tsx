import React from "react"
import './RatingPanel.scss'

type RaitingProps = {
    cardData: any
}

export const RatingPanel = ({cardData}: RaitingProps) => {
    return <div className="rating-panel">
        <div className="rating-panel_number">{cardData?.imdbRating}</div>
        <div className="rating-panel_IMDB"><span>IMDb</span> {cardData?.imdbRating}</div>
        <div className="rating-panel_runtime">{cardData?.Runtime}</div>
    </div>
}