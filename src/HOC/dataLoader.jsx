import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchingData } from '../store/slices/dataSlice';
import { getId } from '../store/slices/idSlice';

const DataLoader = (Children) => {
    
    const [state, setState] = useState('');
    const [error, setError] = useState(false);
    // const data = useSelector(state => state.data.data);
    const dispatch = useDispatch();


    return function () {
        const getUserData = () => {
            dispatch(fetchingData());
            dispatch(getId(state));
        }

        const putData = (e) => {
            state.length ? getUserData() : setError(true);
        }

        return (
            <Children
            state={state} 
            error={error}
            setState={setState}
            putData={putData}
            />
        )
    }

}

export default DataLoader;

















