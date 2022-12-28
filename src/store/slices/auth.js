
import { createSlice } from "@reduxjs/toolkit";
import { client } from "service";

const authenticationState = {
    isAuthenticated: false,
    member: {}
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: authenticationState,
    reducers: {
        login(state, action) {
            const data = action.payload;
            state.isAuthenticated = true;
            
            const token = {
                accessToken: data.accessToken,
                expiry: data.expiresIn
            }

            localStorage.setItem('accessToken', JSON.stringify(token));
            client.defaults.headers.common['Authorization'] = data.accessToken;
        },
        save(state, action) {
            const member = action.payload;
            state.member = member;
        },
        logout(state) {
            localStorage.removeItem('accessToken');
            delete client.defaults.headers.common['Authorization']
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice