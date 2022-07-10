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
    reducers: {
        // bookmark: (state: any, action: PayloadAction<number>) => {
        //     console.log(action.payload);
        //     console.log(state.data);
            
            
        //     // if (state != null) {
        //     //     state.data = state.data?.map((el: any) => el.imdbID === action.payload ? {...el, bookmark: !el.bookmark}: el)
        //     // }
        // },
    },

})

export const {bookmark} = posts.actions
export default posts.reducer
