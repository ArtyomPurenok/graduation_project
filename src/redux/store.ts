import {configureStore, combineReducers} from "@reduxjs/toolkit"

import posts from "./reducer/posts"


export const store = configureStore({
    reducer: {
        posts: posts,
    },
})
