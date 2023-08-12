import { configureStore } from "@reduxjs/toolkit"; 
import idReducer from './slices/idSlice';
import userReducer from './slices/userSlice';

export default configureStore({
    reducer: {
        id: idReducer, 
        user: userReducer,
    }
});