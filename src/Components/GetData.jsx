import React, {useState, useEffect} from 'react';
import Table from './Table';

export default function GetData(props) {

    const [state, setState] = useState({data: null});
    const [user] = useState({userId: props.user})

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
        .then(resp => resp.json()
        .then((data) => {
            setState({
                loading: false,
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
    } else {
        return (
            <div className="loading">
                <p className="loading__status">Подождите, идёт загрузка данных</p>
            </div>
        )
    }
} 