import { configureStore } from "@reduxjs/toolkit";
import localSlice from "./slices/location";
import authSlice from "./slices/auth";

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		local: localSlice.reducer,
	},
});

export default store;
