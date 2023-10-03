import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    data: null,
    error: false,
    loading: false,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        dataRequested(state) {
            state.data = null;
            state.loading = true;
        },

        dataReceived(state, action) {
            state.data = action.payload;
            state.loading = false;
        },

        failedRequest(state) {
            state.error = true;
            state.loading = false;
        }
    }
})

// Actions

export function fetchingData() {
    return (dispatch) => {
        dispatch(dataRequested())
        fetch('http://localhost:3000/db.json')
        .then(resp => resp.json()
        .then((data) => {
            dispatch(dataReceived(data));
        }))
        .catch((error) => {
            dispatch(failedRequest())
            console.error(error.message);
        });
    }
}

// Selectors

export const getRequestStatus = () => {
    return (state) => {
        return state.data.loading;
    }
}

export const getRequestError = () => {
    return (state) => {
        return state.data.error;
    }
}

export const {dataRequested, dataReceived, failedRequest} = dataSlice.actions;

export default dataSlice.reducer;