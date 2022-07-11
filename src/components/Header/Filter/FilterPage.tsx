import React, { useEffect, useState } from "react"
import './FilterPage.scss'
import { useDispatch, useSelector } from "react-redux"

import { Button } from "../../Button"
import { Input } from "../../Input"

import { setFilter } from "../../../redux/reducer/filterReducer"
import { open } from "../../../redux/reducer/filterReducer"

import { ReactComponent as IconCancel } from '../../../components/Icons/IconCancel.svg'

export const Filter = () => {
    // const postsData = useSelector((state: any) => state.filters);
    const dispatch = useDispatch();

    //active button
    const [active, setActive] = useState(2);


    //close filter
    const closeFilter = () => {
        dispatch(open('close'))
    }

    useEffect(() => {
        console.log(active);
        
    }, [active])


    //function set filters
    const [sort, setSort] = useState('')
    const [movieName, setMovieName] = useState('')


    const setSortYear = (el: any) => {
        console.log(el.target.dataset.index);
        
        setActive(el.target.dataset.index);
        setSort('year')
    }
    const setSortRating = (el: any) => {
        setSort('rating')
        setActive(el.target.dataset.index);
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






    return <div className="filter">
        <div className="filter_close">
            <h1>Filter</h1>
            <Button onClick={closeFilter} Icon={IconCancel}/>
        </div>
        
        <div className="filter_sort">
            <p>Sort by</p>
            <div className="filter_sort--buttons">
                <Button className={`filter_sort--rating ${1 == active ? 'filter_sort--rating-active' : ''}`} onClick={setSortRating} dataIndex={'1'} text="Rating"/>
                <Button className={`filter_sort--year ${2 == active ? 'filter_sort--rating-active' : ''}`} onClick={setSortYear} dataIndex={'2'} text="Year"/>
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
            <Button className="filter_button-clear" text="clear"/>
            <Button className="filter_button-show" onClick={addFilters} text="show"/>
        </div>
    </div>
}