
import { createSlice } from "@reduxjs/toolkit";

const authenticationState = {
    isAuthenticated: false,
    accessToken: '',
    tokenExpiresIn: '',
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: authenticationState,
    reducers: {
        login(state, action) {
            const data = action.payload;

            localStorage.setItem('accessToken', `${data.grantType} ${data.accessToken}`);
            state.accessToken = `${data.grantType} ${data.accessToken}`;
            state.tokenExpiresIn = data.tokenExpiresIn;
            state.isAuthenticated = true;
        },
        profileUpdate(state, action) {
            const photo = action.payload;
            if(state.member) state.member.memberProfileImg = photo;
        },
        appPushUpdate(state, action) {
            const appPush = action.payload;
            if(state.member) state.member.appPush = appPush;
        },
        update(state, action) {
            const newMember = action.payload;
            state.member = newMember;
        },
        logout(state) {
            localStorage.removeItem('accessToken');
            state.accessToken = '';
            state.tokenExpiresIn = '';
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice