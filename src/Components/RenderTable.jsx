import React, {useState, useRef} from 'react';
import GetData from './GetData';
import BackForm from './BackForm';

export default function RenderTable(props) {

    let mainInput = useRef();

    const [state, setState] = useState({tableIsMount: false});
    const [user, setUser] = useState({inputValue: null});

    const handleClick = (e) => {
        e.preventDefault();

        mainInput.current.value === '' ? setUser({inputValue: 'empty'}) : setState({tableIsMount: true});
    }

    const getBack = (tableMounting, userId) => {
        setState({tableIsMount: tableMounting})
        setUser({inputValue: userId})
    }  

    if (user.inputValue === 'empty') {  
        return (
            <div className="main">
                <form className="main__form">
                    <input 
                        ref={mainInput}
                        className="main__input main__input_error" 
                        onChange={(e) => {
                            mainInput.current.classList.remove('main__input_error');
                            setUser({
                                inputValue: e.target.value
                            })
                        }} placeholder="Введите id"
                    />
                    <span className="main__error-message">*Поле пустое*</span>
                    <button className="main__button" type="button" onClick={handleClick}>Получить результаты</button>
                </form>
            </div>
        )
    } else if (state.tableIsMount) {
        return (
            <>
                <GetData user={user.inputValue}/>
                <BackForm userId={user.inputValue} tableMounting={state.tableIsMount} onClick={getBack}/>
            </>
        )
    } else {
        return (
            <div className="main">
                <form className="main__form">
                    <input 
                        ref={mainInput}
                        className="main__input" 
                        onChange={(e) => {
                            setUser({
                                inputValue: e.target.value
                            })
                        }} placeholder="Введите id"
                    />
                    <button className="main__button" type="button" onClick={handleClick}>Получить результаты</button>
                </form>
            </div>
        )
    }
}