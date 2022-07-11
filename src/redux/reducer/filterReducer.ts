import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
// import { OnePostFetch } from "../../thunkAction/OnePostFetch";

const initialState: any = {
    open: '',
    sort: null,
    movieName: null,
    isLoading: false,
}

const filters: any = createSlice({
    name: 'All favorites',
    initialState,
    reducers: {
        open: (state: any, action: PayloadAction<any>) => {
            state.open = action.payload;
        },
        setFilter: (state: any, action: PayloadAction<any>) => {
            if (action.payload?.sort) {
                state.sort = action.payload.sort;  
            }else {state.sort = null}
            if (action.payload?.movieName) {
                state.movieName = action.payload.movieName;  
            }else {state.movieName = null}
        },
    },

})

export const {setFilter, open} = filters.actions
export default filters.reducer