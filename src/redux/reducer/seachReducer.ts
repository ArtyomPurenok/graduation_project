import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { seachFetch } from "../../thunkAction/seachFetch"

const initialState: any = {
    data: null,
    isLoading: false,
}

const seachPosts: any = createSlice({
    name: 'Seach posts',
    initialState,
    extraReducers: {
        [seachFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [seachFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {           
            state.data = action.payload.Search;
            state.isLoading = false;
        },
        [seachFetch.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
    reducers: {},

})

export const {} = seachPosts.actions
export default seachPosts.reducer