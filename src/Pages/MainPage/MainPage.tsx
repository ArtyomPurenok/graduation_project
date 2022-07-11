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
            dispatch(postsFetch(1))          
        }
    }, [])



    //изменение фильтра
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
        if (postsData.data) {
            setSortedArray(filter(postsData.data, objFilter));
        }
    }, [postsData, dataFilter])



    //Pagination
    const numberPages = [1,2,3,4,5,6,7];
    const [active, setActive] = useState(0);

    const openPage = (el: any) => {
        setActive(el.target.dataset.index);
    };

    useEffect(() => {
        dispatch(postsFetch(active + 1));  
    }, [active])

    const buttonsPages = numberPages.map((el,index) => {
        return <button
        key={el} 
        className={`main-page_pagination--button ${index == active ? 'main-page_pagination--button-active' : ''}`}
        onClick={openPage}
        data-index={index}
        >{el}</button>
    })

    //test
    // useEffect(() => {
    //     if (sortedArray) {
    //         console.log(sortedArray);
    //     }      
    // }, [sortedArray])


    return <div className="main-page">

        <div className="main-page_content">
        {sortedArray?.map((el: any) => {
                return <Link key={el.imdbID} to={`/posts/${el.imdbID}`}>
                            <Card img={el.Poster} filmName={el.Title} year={el.Year}/>
                    </Link>
            })}
        </div>

        
        <div className="main-page_pagination">
            {buttonsPages}
        </div>
    </div>
}