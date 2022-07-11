import React, { useEffect, useState } from "react"
import './FavoritesPage.scss'
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { useFilterFunction } from "../../components/Header/Filter/useFilterFunction"



export const FavoritesPage = () => {
    const postsFavorites = useSelector((state: any) => state.persist.favorites.data);


    //sort function
    const dataFilter = useSelector((state: any) => state.filters);
    const filter = useFilterFunction;

        //изменение фильтра для хука
        const objFilter = {
        sort: '',
        movieName: '',
        };

        useEffect(() => {
            if (dataFilter.sort) {
                objFilter.sort = dataFilter.sort
            }
            if (dataFilter.movieName) {
                objFilter.movieName = dataFilter.movieName
            }
        }, [dataFilter])

        
    //отфильтрованный массив
    const [sortedArray, setSortedArray] = useState([])

    useEffect(() => {
        if (postsFavorites) {
            setSortedArray(filter(postsFavorites, objFilter));
        }
    }, [postsFavorites, dataFilter])
    




    return <div className="favorites-page">
        {sortedArray?.map((el: any) => {
                return <Link key={el.imdbID} to={`/posts/${el.imdbID}`}>
                            <Card img={el.Poster} filmName={el.Title} rating={el.imdbRating} genre={el.Genre.split(', ').join(' · ')}/>
                    </Link>
            })}
    </div>
}