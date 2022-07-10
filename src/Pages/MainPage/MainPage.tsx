import React, { useEffect, useState } from "react"
import "./MainPage.scss"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { Card } from "../../components/Card"
import { postsFetch } from "../../thunkAction/postsFetch"
import { useFilterFunction } from "../../components/Header/Filter/useFilterFunction"





export const MainPage = () => {
    const postsData = useSelector((state: any) => state.posts);
    const dataFilter = useSelector((state: any) => state.filters);
    const dispatch = useDispatch();
    const filter = useFilterFunction;

    useEffect(() => {
        if (postsData.data === null) {
            dispatch(postsFetch())          
        }
    }, [])



    //изменение фильтра
    const objFilter = {
        sort: '',
    };

    useEffect(() => {
        if (dataFilter.sort) {
            objFilter.sort = dataFilter.sort
        }
    }, [dataFilter])


    //отфильтрованный массив
    const [sortedArray, setSortedArray] = useState([])




    useEffect(() => {
        if (postsData.data) {
            setSortedArray(filter(postsData.data, objFilter));
        }
    }, [postsData, dataFilter])


    //test
    useEffect(() => {
        if (sortedArray) {
            console.log(sortedArray);
        }      
    }, [sortedArray])


    return <div className="main-page">
        {sortedArray?.map((el: any) => {
                return <Link key={el.imdbID} to={`/posts/${el.imdbID}`}>
                            <Card img={el.Poster} filmName={el.Title} year={el.Year}/>
                    </Link>
            })}
        </div>
}