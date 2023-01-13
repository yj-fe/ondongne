import { configureStore } from "@reduxjs/toolkit";
import localSlice from "./slices/location";
import authSlice from "./slices/auth";
import orderSlice from "./slices/order";

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		local: localSlice.reducer,
		order: orderSlice.reducer,
	},
});

export default store;
