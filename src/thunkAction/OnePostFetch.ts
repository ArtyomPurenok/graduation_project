import { createAsyncThunk } from '@reduxjs/toolkit'

export const OnePostFetch: any  = createAsyncThunk (
    'One post from serwer',
    
    async (id) => {
        const response = await fetch(`https://omdbapi.com/?apikey=ed02d785&i=${id}`);
        const dataFromFeatch = await response.json();
        
        if (response.ok) {
        return dataFromFeatch
        }

    }

)