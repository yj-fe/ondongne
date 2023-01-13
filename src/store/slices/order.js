import { createSlice } from "@reduxjs/toolkit";

const orderState = {
	items: [],
};

const orderSlice = createSlice({
	name: "order",
	initialState: orderState,
	reducers: {
		save(state, action) {
			state.items = action.payload;
		},
		remove(state) {
			state.items = [];
		},
	},
});

export const orderActions = orderSlice.actions;

export default orderSlice;
