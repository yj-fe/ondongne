import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { client } from "service";

const authenticationState = {
    isAuthenticated: false,
    id: "",
    role: "",
    bizId: "",
    storeId: "",
    category: "",
};

const authSlice = createSlice({
    name: "authentication",
    initialState: authenticationState,
    reducers: {
        login(state, action) {
            const data = action.payload;
            const token = {
                accessToken: data.accessToken,
                expiry: data.expiresIn,
            };
            const member = jwtDecode(token.accessToken);

            localStorage.setItem("accessToken", JSON.stringify(token));
            client.defaults.headers.common["Authorization"] = token.accessToken;

            state.isAuthenticated = true;
            state.id = member.sub;
            state.role = member.auth;
        },
        save(state, action) {
            state.id = action.payload;
        },
        biz(state, action) {
            const data = action.payload;
            state.bizId = data.bizId;
            state.storeId = data.storeId;
            state.category = data.category;
        },
        logout(state) {
            localStorage.removeItem("accessToken");
            delete client.defaults.headers.common["Authorization"];
            state.isAuthenticated = false;
            state.id = "";
            state.bizId = "";
            state.storeId = "";
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;
