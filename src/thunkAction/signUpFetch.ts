import { createAsyncThunk } from '@reduxjs/toolkit'


export const signUpFetch: any  = createAsyncThunk (
    'SignUP request',
    async (formData: any) => {
        const response = await fetch('https://studapi.teachmeskills.by/auth/users/', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        const signUpData = await response.json();

        
        if (response.ok) {
            return signUpData
        }
   

    }
)