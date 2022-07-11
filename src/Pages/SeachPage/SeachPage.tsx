import React from "react"
import './SeachPage.scss'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";



export const SeachPage = () => {
    const seachPasts = useSelector((state: any) => state.seach.data);



    return <div className="seach-page">

        <div className="seach-page_content">
            {seachPasts?.map((el: any) => {
                return <Link key={el.imdbID} to={`/posts/${el.imdbID}`}>
                            <Card img={el.Poster} filmName={el.Title} year={el.Year}/>
                    </Link>
            })}
        </div>

    </div>
}