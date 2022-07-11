import { createAsyncThunk } from '@reduxjs/toolkit'

export const postsFetch: any  = createAsyncThunk (
    'Posts from serwer',
    async (page) => {
        const response = await fetch(`https://omdbapi.com/?apikey=ed02d785&s=star&page=${page}`);
        const dataFromFeatch = await response.json();
        
        if (response.ok) {
        return dataFromFeatch
        }

    }
)