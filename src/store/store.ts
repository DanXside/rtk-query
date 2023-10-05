import { combineReducers } from "redux";
import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import { postsAPI } from "../services/PostsService";

export const rootReducer = combineReducers({
    userReducer,
    [postsAPI.reducerPath]: postsAPI.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postsAPI.middleware)
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];