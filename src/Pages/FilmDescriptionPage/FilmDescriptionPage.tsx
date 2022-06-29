import React, { useEffect } from "react"
import './FilmDescriptionPage.scss'
import { useDispatch, useSelector } from "react-redux"

//components
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"

//functions call
import { postsFetch } from "../../thunkAction/postsFetch"





export const FilmDescriptionPage = () => {  



    return <div className="film-description">

        <div className="film-description_img">
            <img src=""/>

            <div className="film-description_img--buttons">
            <Button className="film-description_img--button-bookmark"/>
            <Button className="film-description_img--button-forward"/>
            </div>
        </div>


        <div className="film-description_film-data">
            <div className="film-description_film-data--base">
                <p className="film-description_film-data--genre">genre</p>
                <p className="film-description_film-data--name">name</p>
                <p className="film-description_film-data--rating">rating</p>
            </div>

            <div className="film-description_film-data--additional">
                <p className="film-description_film-data--about">In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum. With the memory of the brave U.S. pilot, Captain Steve Trevor, etched on her mind, Diana Prince becomes embroiled in a sinister conspiracy of global proportions when a transparent, golden-yellow citrine gemstone catches the eye of the power-hungry entrepreneur, Maxwell Lord. </p>
                
                {/* then you need to generate a table */}
                <table>
                    <tr>
                        <td>Year</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>Released</td>
                        <td>15 Jul 2011</td>
                    </tr>
                    <tr>
                        <td>BoxOffice</td>
                        <td>$381,409,310</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>United Kingdom, United States</td>
                    </tr>
                    <tr>
                        <td>Production</td>
                        <td>Heyday Films, Moving Picture Company, Warner Bros.</td>
                    </tr>
                </table>
            </div>


            <div>
                <div className="film-description_recommendations">
                    <p>Recommendations</p>

                    <div>
                    <Button className="film-description_recommendations--button-left"/>
                    <Button className="film-description_recommendations--button-right"/>
                    </div>
                </div>

                <div className="film-description_cards">
                <Card className=""/>
                </div>
            </div>
        </div>
    </div>
}