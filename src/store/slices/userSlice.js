import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        id: null,
        token: null,
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
        },

        removeUser(state) {
            state.email = null
            state.id = null
            state.token = null
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;