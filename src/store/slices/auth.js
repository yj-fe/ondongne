
import { createSlice } from "@reduxjs/toolkit";

const authenticationState = {
    isAuthenticated: false,
    accessToken: '',
    tokenExpiresIn: '',
    member: {}
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: authenticationState,
    reducers: {
        login(state, action) {
            const data = action.payload;

            state.isAuthenticated = true;
            state.accessToken = data.accessToken;
            state.refreshToken = data.refreshToken;
            state.tokenExpiresIn = data.tokenExpiresIn;
            localStorage.setItem('refreshToken', data.refreshToken);
        },
        save(state, action) {
            const member = action.payload;
            state.member = member;
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
            localStorage.removeItem('refreshToken');
            state.accessToken = '';
            state.refreshToken = '';
            state.tokenExpiresIn = '';
            state.isAuthenticated = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice