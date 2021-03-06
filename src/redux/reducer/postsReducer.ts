import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { postsFetch } from "../../thunkAction/postsFetch"

const initialState: any = {
    data: null,
    isLoading: false,
}

const posts: any = createSlice({
    name: 'New posts',
    initialState,
    extraReducers: {
        [postsFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [postsFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {
            state.data = action.payload.Search;
            state.isLoading = false;
        },
        [postsFetch.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
    reducers: {},

})

export const {bookmark} = posts.actions
export default posts.reducer
