import { createSlice } from "@reduxjs/toolkit";

const orderState = {
	items: [],
	to: "",
};

const orderSlice = createSlice({
	name: "order",
	initialState: orderState,
	reducers: {
		save(state, action) {
			state.items = action.payload.items;
			state.to = action.payload.to;
		},
		remove(state) {
			state.items = [];
			state.to = "";
		},
	},
});

export const orderActions = orderSlice.actions;

export default orderSlice;
