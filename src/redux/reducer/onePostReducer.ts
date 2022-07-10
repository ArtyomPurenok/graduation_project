import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { OnePostFetch } from "../../thunkAction/OnePostFetch";

const initialState: any = {
    data: null,
    isLoading: false,
}

const onePost: any = createSlice({
    name: 'One post',
    initialState,
    reducers: {},
    extraReducers: {
        [OnePostFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [OnePostFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [OnePostFetch.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },

})

export const {} = onePost.actions
export default onePost.reducer