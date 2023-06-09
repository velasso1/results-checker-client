import React, {useState} from 'react';
import GetData from './GetData';
import Form from './Form';

function RenderTable(props) {

    const [data, setData] = useState(1);

    return (
        <>
            {/* <GetData/> */}
            <div className="section">
            <form className="main__form">
                <input className="main__input" placeholder="Введите id"/>
                <button className="main__button" onClick={GetData}>Получить результаты</button>
            </form>
        </div>
        </>
    )
}

export default RenderTable