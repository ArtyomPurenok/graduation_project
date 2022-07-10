import { createAsyncThunk } from '@reduxjs/toolkit'


export const tokenFetch: any  = createAsyncThunk (
    'Tokens request',
    async (formData: any) => {
        
        try {
            const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                },
            });
            const tokens = await response.json();
            
            if (response.ok) {
                return tokens
            }


        } catch (err: any) {            
              return err.response.json();
        }

   

    }
)