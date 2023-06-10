import React, {useState} from 'react';
import GetData from './GetData';

function RenderTable(props) {

    const [state, setState] = useState({tableIsMount: false});
    const [user, setUser] = useState({inputValue: null})

    const handleClick = (e) => {
        e.preventDefault();

        setState({
            tableIsMount: true
        })
    }

    const getBack = (e) => {
        e.preventDefault();

        setState({
            tableIsMount: false
        })
    }   

    if (state.tableIsMount) {
        return (
            <>
                <GetData user={user.inputValue}/>
                <div className="section">
                    <form className="main__form">
                        <button className="main__button" onClick={getBack}>Назад</button>
                    </form>
                </div>
            </>
        )
    } else {
        return (
            <div className="section">
                <form className="main__form">
                    <input 
                    className="main__input" 
                    onChange={(e) => {
                        setUser({
                            inputValue: e.target.value
                        })
                    }} placeholder="Введите id"/>
                    <button className="main__button" type="button" onClick={handleClick}>Получить результаты</button>
                </form>
            </div>
        )
    }
}

export default RenderTable