/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Components/Loading';
import UserNotFound from '../Components/UserNotFound';
import { getRequestStatus } from '../store/slices/dataSlice';

function DataChecker (Component) {
    return function() {
        const requestStatus = useSelector(getRequestStatus());
        const userId = useSelector(state => state.id.id);
        const userData = useSelector(state => state.data.data);

        if (requestStatus) {
            return (<Loading/>)
        } 

        return !userData || !userData[`${userId}`] ? <UserNotFound/> : <Component userId={userId} userData={userData}/> 
    }
}

export default DataChecker;