import React, {useState, useEffect} from 'react';
import Table from './Table';

export default function GetData() {

    const [state, setState] = useState({
        loading: false,
        data: null
    });

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
        .then(resp => resp.json()
        .then((data) => {
            setState({
                loading: false,
                data: data
            })

            console.log(data);
        }))
        .catch((error) => {
            console.log('Error' + error.message);
        });
    }, [setState])


    return (    
        <Table data={state.data}/>
    )
} 