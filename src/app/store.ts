import { combineReducers, configureStore } from "@reduxjs/toolkit";

import socketMiddleware from "./middleware/socketEvents";
import chatSlice from "./slices/chat";
import clientSlice from "./slices/client";
import dialogSlice from "./slices/ui/dialog";
import snackSlice from "./slices/ui/snack";


const uiReducer = combineReducers({
	[dialogSlice.name]: dialogSlice.reducer,
	[snackSlice.name]: snackSlice.reducer,
});

const rootReducer = combineReducers({
	ui: uiReducer,
	[chatSlice.name]: chatSlice.reducer,
	[clientSlice.name]: clientSlice.reducer,
});

// we put this here so we don't get circular dependencies when typing middleware
export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
	middleware: gDM => gDM().concat([socketMiddleware]),
});

export type Store = typeof store;
export type AppDispatch = typeof store.dispatch;
export default store;
