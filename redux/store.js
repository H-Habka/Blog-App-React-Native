import { configureStore, combineReducers } from "@reduxjs/toolkit";
import blogSlice from "./features/bolgSlice"

const rootReducer = combineReducers({
    blogSlice
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});
