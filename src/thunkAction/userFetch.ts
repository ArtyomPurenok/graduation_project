import { createAsyncThunk } from '@reduxjs/toolkit'


export const userFeatch: any  = createAsyncThunk (
    'User data',
    async (access: any) => {
        console.log(access);
             

        const response = await fetch('https://studapi.teachmeskills.by/auth/users/me/', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access}`,
            },
        });
        const userData = await response.json();

        if (response.ok) {
            return userData
        }
   
    } 
)