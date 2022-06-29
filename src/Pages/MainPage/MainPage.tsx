import React, { useEffect, useState } from "react"
import "./MainPage.scss"
import { useDispatch, useSelector } from "react-redux"

import { Card } from "../../components/Card"
import { postsFetch } from "../../thunkAction/postsFetch"




export const MainPage = () => {
    const postsData = useSelector((state: any) => state.posts);
    const dispatch = useDispatch();


    const [posts, setPosts] = useState('No content')


    useEffect(() => {
        if (postsData.data === null) {
            dispatch(postsFetch())          
        }
    }, [])

    useEffect(() => {
        if (postsData.data != null) {
            setPosts(postsData.data.map((el: any) => {
                return <Card img={el.Poster} filmName={el.Title} year={el.Year}/>
            }))
        }
    }, [postsData.data])
    

    return <div className="main-page">
        {posts}
        </div>
}