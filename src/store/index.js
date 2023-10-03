import { configureStore } from "@reduxjs/toolkit"; 
import idReducer from './slices/idSlice';
import userReducer from './slices/userSlice';
import dataReducer from './slices/dataSlice';

export default configureStore({
    reducer: {
        id: idReducer, 
        user: userReducer,
        data: dataReducer,
    }
});