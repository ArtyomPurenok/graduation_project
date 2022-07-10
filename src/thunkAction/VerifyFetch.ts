import { createAsyncThunk } from '@reduxjs/toolkit'


export const verifyFetch: any  = createAsyncThunk (
    'Verify',
    async (verifyData: any) => {
        const response = await fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
            method: "POST",
            body: JSON.stringify(verifyData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            return 'ok'
        }
    }

)