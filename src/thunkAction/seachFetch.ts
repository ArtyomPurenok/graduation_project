import { createAsyncThunk } from '@reduxjs/toolkit'

export const seachFetch: any  = createAsyncThunk (
    'Seach posts',
    async (seach) => {
        const response = await fetch(`https://omdbapi.com/?apikey=ed02d785&s=${seach}`);
        const dataFromFeatch = await response.json();
      
        
        if (response.ok) {
        return dataFromFeatch
        }

    }
)