import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { tokenFetch } from "../../thunkAction/tokenFetch"

export type TypeSignIn = {
    access: string | null
    refresh: string | null
    detail: string | null
    isLoading: boolean
    error: string | null
}

const initialState: TypeSignIn = {
    access: null,
    refresh: null,
    detail: null,
    isLoading: false,
    error: null,
}

const tokens = createSlice({
    name: 'Data signIn',
    initialState,
    reducers: {},
    extraReducers: {
        [tokenFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [tokenFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {       
            console.log(action.payload);
                

            if (action.payload.access) {                
                state.access = action.payload?.access;
                state.refresh = action.payload?.refresh;
                state.detail = null
            }
            state.detail = action.payload?.detail;
            state.error = null;
            state.isLoading = false;
        },
        [tokenFetch.rejected]: (state: any, action: any) => {            
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
})


export const {} = tokens.actions
export default tokens.reducer