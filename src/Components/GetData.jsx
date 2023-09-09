import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import Loading from './Loading';

export default function GetData() {

    const id = useSelector(state => state.id.id);

    const [state, setState] = useState({data: null});
    const [user] = useState({userId: id})

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
        .then(resp => resp.json()
        .then((data) => {
            setState({
                data: data
            })
        }))
        .catch((error) => {
            console.log('Error' + error.message);
        });
    }, [])

    if (state.data) {
        return (
            <Table data={state.data} user={user.userId}/>
        )
    }

    return (
        <Loading/>
    )
} 