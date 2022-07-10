import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
// import { OnePostFetch } from "../../thunkAction/OnePostFetch";

const initialState: any = {
    sort: null,
    isLoading: false,
}

const filters: any = createSlice({
    name: 'All favorites',
    initialState,
    reducers: {
        filterSort: (state: any, action: PayloadAction<any>) => {
            if (action.payload?.sort) {
                state.sort = action.payload.sort;  
            }
        },
    },

})

export const {filterSort} = filters.actions
export default filters.reducer