import { createAsyncThunk } from '@reduxjs/toolkit'

export const trendsFetch: any  = createAsyncThunk (
    'Trends from serwer',
    async () => {
        const response = await fetch(`https://omdbapi.com/?apikey=ed02d785&s=all&y=2022`);
        const dataFromFeatch = await response.json();
        
        if (response.ok) {
        return dataFromFeatch
        }

    }
)