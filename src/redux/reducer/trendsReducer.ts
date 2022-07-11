import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { trendsFetch } from "../../thunkAction/trendsFetch"

const initialState: any = {
    data: null,
    isLoading: false,
}

const trends: any = createSlice({
    name: 'Trends posts',
    initialState,
    extraReducers: {
        [trendsFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [trendsFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {
            state.data = action.payload.Search;
            state.isLoading = false;
        },
        [trendsFetch.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
    reducers: {},

})

export const {} = trends.actions
export default trends.reducer