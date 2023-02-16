import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import localSlice from "./slices/location";
import authSlice from "./slices/auth";
import orderSlice from "./slices/order";

const reducers = combineReducers({
	auth: authSlice.reducer,
	local: localSlice.reducer,
	order: orderSlice.reducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "local", "order"],
};

const reducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
