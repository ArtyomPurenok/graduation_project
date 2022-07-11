import React, { useEffect, useState } from "react"
import './FilterPage.scss'
import { useDispatch, useSelector } from "react-redux"

import { Button } from "../../Button"
import { Input } from "../../Input"

import { setFilter } from "../../../redux/reducer/filterReducer"

export const Filter = () => {
    const postsData = useSelector((state: any) => state.filters);
    const dispatch = useDispatch();
    
    const [sort, setSort] = useState('')
    const [movieName, setMovieName] = useState('')


    //function set filters
    const setSortYear = () => {
        setSort('year')
    }
    const setSortRating = () => {
        setSort('rating')
    }
    const setMovName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMovieName(event.target.value)
    } 





    const addFilters = () => {
        const arrDataFilter = {
            sort: '',
            movieName: '',
        };

        if (sort) {
            arrDataFilter.sort = `${sort}`;
        }
        if (movieName) {
            arrDataFilter.movieName = `${movieName}`
        }

        dispatch(setFilter(arrDataFilter))
    }





    //test
    useEffect(() => {
        console.log(postsData);
        
    }, [postsData])



    return <div className="filter">
        <div className="filter_close">
            <h1>Filter</h1>
            <Button/>
        </div>
        
        <div className="filter_sort">
            <p>Sort by</p>
            <div className="filter_content--buttons">
                <Button onClick={setSortRating} text="Rating"/>
                <Button onClick={setSortYear} text="Year"/>
            </div>
        </div>

        <div className="filter_all-filter">
            <div className="filter_movie-name">
                <p>Full or short movie name</p>
                <Input onChange={setMovName}/>
            </div>
            <div className="filter_genre"></div>
            {/* <div className="filter_years">
                <Input/>
                <Input/>
            </div> */}
            {/* <div className="filter_ratig">
                <Input/>
                <Input/>
            </div> */}
        </div>

        <div className="filter_clear-show">
            <Button text="clear"/>
            <Button onClick={addFilters} text="show"/>
        </div>
    </div>
}