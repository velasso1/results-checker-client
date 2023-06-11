import React, {useState} from 'react';
import GetData from './GetData';

function RenderTable(props) {

    const [state, setState] = useState({tableIsMount: false});
    const [user, setUser] = useState({inputValue: null})

    const handleClick = (e) => {
        e.preventDefault();

        if (document.querySelector('.main__input').value === '') {

            setUser({
                inputValue: 'empty'
            })

        } else {
            setState({
                tableIsMount: true
            })
        }
    }

    const getBack = (e) => {
        e.preventDefault();

        setState({
            tableIsMount: false
        })

        setUser({
            inputValue: null
        })
    }  

    if (user.inputValue === 'empty') {
        return (
            <div className="main">
            <form className="main__form">
                <input 
                className="main__input main__input_error" 
                onChange={(e) => {
                    document.querySelector('.main__input').classList.remove('main__input_error');
                    setUser({
                        inputValue: e.target.value
                    })
                }} placeholder="Введите id"/>
                <span className="main__error-message">*Поле пустое*</span>
                <button className="main__button" type="button" onClick={handleClick}>Получить результаты</button>
            </form>
        </div>
        )
    } else if (state.tableIsMount) {
        return (
            <>
                <GetData user={user.inputValue}/>
                <div className="back">
                    <form className="back__form">
                        <button className="back__button" onClick={getBack}>Назад</button>
                    </form>
                </div>
            </>
        )
    } else {
        return (
            <div className="main">
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