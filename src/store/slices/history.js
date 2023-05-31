import { createSlice } from "@reduxjs/toolkit";

const historyState = {
    to: "",
    state: "",
};

const historySlice = createSlice({
    name: "history",
    initialState: historyState,
    reducers: {
        save(state, action) {
            state.to = action.payload.to;
            state.state = action.payload.state;
        },
        remove(state) {
            state.to = "";
            state.state = "";
        },
    },
});

export const historyActions = historySlice.actions;

export default historySlice;
