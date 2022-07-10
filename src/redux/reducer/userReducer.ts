import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { userFeatch } from "../../thunkAction/userFetch";

export type TypeUser = {
    id: number | null
    email: string | null
    userName: string | null
    
    isLoading: boolean
}

const initialState: TypeUser = {
    id: null,
    email: null,
    userName: null,
    isLoading: false,
}

const userReducer = createSlice({
    name: 'User data',
    initialState,
    reducers: {},
    extraReducers: {
        [userFeatch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [userFeatch.fulfilled]: (state: any, action: PayloadAction<any>) => {         
            state.id = action.payload?.id;
            state.email = action.payload?.email;
            state.userName = action.payload?.username;
            state.isLoading = false;
        },
        [userFeatch.rejected]: (state: any) => {
            state.isLoading = false;
        },
    },
})


export const {} = userReducer.actions
export default userReducer.reducer