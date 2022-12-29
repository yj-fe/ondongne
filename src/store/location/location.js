import { createSlice } from "@reduxjs/toolkit";
const localState = {
	address: "경기도 김포시 풍무동",
	x: "37.6022192",
	y: "126.7220389",
};

const localSlice = createSlice({
	name: "local",
	initialState: localState,
	reducers: {
		save(state, action) {
			const data = action.payload;
			state.address = data.address;
			state.x = data.x;
			state.y = data.y;

			localStorage.setItem("localState", JSON.stringify(data));
		},
	},
});

export const localActions = localSlice.actions;

export default localSlice;
