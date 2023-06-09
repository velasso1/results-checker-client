import React, {useState} from 'react';
import GetData from './GetData';

export default function Form(props) {

    const [state, setState] = useState(0);

    return (
        <div className="section">
            <form className="main__form">
                <input className="main__input" placeholder="Введите id"/>
                <button className="main__button" onClick={GetData}>Получить результаты</button>
            </form>
        </div>
    )
}


