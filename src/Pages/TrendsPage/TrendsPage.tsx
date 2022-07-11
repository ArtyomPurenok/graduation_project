import React, { useEffect } from "react"
import './TrendsPage.scss'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { trendsFetch } from "../../thunkAction/trendsFetch";
import { Card } from "../../components/Card";




export const TrendsPage = () => {
    const trendsData = useSelector((state: any) => state.trends.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trendsFetch())
    }, [])


    useEffect(() => {
        console.log(trendsData);
        
    }, [trendsData])


    return <div className="trends">
        {trendsData?.map((el: any) => {
                return <Link key={el.imdbID} to={`/posts/${el.imdbID}`}>
                            <Card img={el.Poster} filmName={el.Title} year={el.Year}/>
                    </Link>
        })}
    </div>
}