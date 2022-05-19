import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/users.slice';
import authSlice from '../slices/auth.slice';

const rootReducer = combineReducers({
    users: userReducer,
    auth: authSlice
});

const store = configureStore({
    reducer: rootReducer
});

export default store;