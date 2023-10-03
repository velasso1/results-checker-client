import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Components/Loading';
import UserNotFound from '../Components/UserNotFound';
import { getRequestStatus, getRequestError } from '../store/slices/dataSlice';

function DataChecker (Component) {
    return function() {

        // const [currentUser, setCurrentUser] = useState(null);
        const requestStatus = useSelector(getRequestStatus());
        const requestError = useSelector(getRequestError());

        const userId = useSelector(state => state.id.id);
        const userData = useSelector(state => state.data.data);

        // if (!currentUser) {
        //     return (<UserNotFound/>)
        // }

        return requestStatus ? <Loading/> : <Component userId={userId} userData={userData}/> 
    }
}

export default DataChecker;