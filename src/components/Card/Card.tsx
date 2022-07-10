import React from "react"
import './Card.scss'

type CardProps = {
    className?: string
    img?: string
    filmName?: string
    genre?: string
    year?: string | number
    rating?: string
}


export const Card = ({className, img, filmName, genre, year, rating}: CardProps) => {
    return <div className={`card ${className}`}>
        {rating && <div className="card_rating">{rating}</div>}
        <img src={img}/>
        {filmName && <p className="card_film-name">{filmName}</p>}       
        {genre && <p className="card_genre">{genre}</p>} 
        {year && <p className="card_year">{year}</p>}
    </div>
}