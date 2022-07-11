import React from "react";
import { useSelector } from "react-redux";

export const useFilterFunction = (arr: any, filter: any) => {
    // console.log(arr);
    
    let newArray: any = [...arr];

    //sort to year
    if (filter.sort == 'year') {
        newArray = newArray.sort((a: any, b: any) => {
            return a.Year - b.Year
        })
    }

    //sort to rating
    if (filter.sort == 'rating') {
        newArray = newArray.sort((a: any, b: any) => {
            return a.imdbRating - b.imdbRating
        })
    }

    //sort to movie name
    if (filter.movieName) {
        newArray = newArray.filter((el: any) => {
            const name = el.Title.toLowerCase();
            const seachWord = filter.movieName.toLowerCase();
            const pattern = new RegExp( seachWord, 'g' );
            const qresult = name.match(pattern);
            
            if (qresult != null) {
              return el
            }
          });         
    }


    
    
    return newArray
}