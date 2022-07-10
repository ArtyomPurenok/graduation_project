import {configureStore, combineReducers} from "@reduxjs/toolkit"
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
     PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import posts from "./reducer/postsReducer"
import OnePost from "./reducer/onePostReducer"
import favorites from "./reducer/favoritesReducer"
import filters from "./reducer/filterReducer"

const rootReduser = combineReducers({
    favorites: favorites,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReduser = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
    reducer: {
        posts: posts,
        onePost: OnePost,
        favorites: persistedReduser,
        filters: filters,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)