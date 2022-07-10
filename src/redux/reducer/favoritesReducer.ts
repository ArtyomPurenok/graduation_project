import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
    data: [{
        Title: "Star Wars: Episode I - The Phantom Menace",
        Type: "movie",
        Website: "N/A",
        Writer: "George Lucas",
        Year: "1999",
        imdbID: "tt0120915",
        imdbRating: "6.5",
        imdbVotes: "788,351",
    }],
    isLoading: false,
}

const favorites: any = createSlice({
    name: 'All favorites',
    initialState,
    reducers: {
        addPost: (state: any, action: PayloadAction<string>) => {            
            state = state.data.push(action.payload);           
        },
        deletePost: (state: any, action: PayloadAction<string>) => {
            const objForDalete = state.data.findIndex((el: any) => el.imdbID == action.payload);
            if (objForDalete != -1) {
                state = state.data.splice(objForDalete, 1);
            }             
        },
    },
})

export const {addPost, deletePost} = favorites.actions
export default favorites.reducer