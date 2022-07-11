import React, { useEffect, useState } from "react"
import './SinglePage.scss'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { Card } from "../../components/Card"
import { Button } from "../../components/Button"
import { RatingPanel } from "./components/RatingPanel/RatingPanel"
import { CardDataTable } from "./components/CardDataTable/CardDataTable"

import { OnePostFetch } from "../../thunkAction/OnePostFetch"
import { addPost, deletePost } from "../../redux/reducer/favoritesReducer"
import { ReactComponent as IconBookmark } from '../../components/Icons/IconBookmark.svg'
import { ReactComponent as IconShare } from '../../components/Icons/IconShare.svg'




export const SinglePage = () => {
    const {id} = useParams();

    const OnePostData = useSelector((state: any) => state.onePost.data);
    const ArrFavorites = useSelector((state: any) => state.persist.favorites.data);
    const dispatch = useDispatch();
    

    //bookmark function
    const [active, setActive] = useState('')

    useEffect(() => {
        dispatch(OnePostFetch(id))
    }, [id])

    useEffect(() => {
        if (ArrFavorites.length >= 1) {           
            const element = ArrFavorites.findIndex((el: any) => el.imdbID == OnePostData?.imdbID)

            if (element != -1) {
                setActive('active');
            }
        }
    }, [OnePostData])


    const checkFavorites = () => {
        if (!active) {
            dispatch(addPost(OnePostData));
            setActive('active');
        }else {
            dispatch(deletePost(OnePostData.imdbID));
            setActive('');
        }
    }


    //check
    useEffect(() => {
        console.log(ArrFavorites);
        
        // if (OnePostData) {
        //     console.log(OnePostData);
        // }
    }, [ArrFavorites])




    return <div className="film-description">

         <div className="film-description_img">
             <img src={OnePostData?.Poster}/>
    
             <div className="film-description_img--buttons">
             <Button onClick={checkFavorites} className={`film-description_img--button-bookmark ${active && 'film-description_active'}`} Icon={IconBookmark}/>
             <Button className="film-description_img--button-forward" Icon={IconShare}/>
             </div>
         </div>
    
    
         <div className="film-description_film-data">
             <div className="film-description_film-data--base">
                 <p className="film-description_film-data--genre">{OnePostData?.Genre.split(',').join(' ·')}</p>
                 <p className="film-description_film-data--name">{OnePostData?.Title}</p>
                 <p className="film-description_film-data--rating"><RatingPanel cardData={OnePostData}/></p>
             </div>
    
             <div className="film-description_film-data--additional">
                 <p className="film-description_film-data--about">{OnePostData?.Plot}</p>
                 <CardDataTable dataForDescription={OnePostData}/>
             </div>
    
    
             {/* <div>
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
             </div> */}
         </div>
     </div>
}