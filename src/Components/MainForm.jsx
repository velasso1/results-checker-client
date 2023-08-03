import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getId } from '../store/idSlice';
import { Link } from 'react-router-dom';

export default function MainForm() {

    const [state, setState] = useState({path: ''});

    const mainInput = useRef();
    const dispatch = useDispatch();

    // запись введенного в инпут id в стейт
    const writeId = () => {
        dispatch(getId(mainInput.current.value));
    }

    // проверка инпута на пустое значение
    const checkInput = () => {
        if (mainInput.current.value.trim() === '') {
            mainInput.current.classList.add('main__input_error');
        } else {
            mainInput.current.classList.remove('main__input_error');
            setState({path: '/results'});
            writeId();
        }
    }

    return (
        <div className="main">
            <form className="main__form">
                <input 
                    ref={mainInput}
                    onChange={checkInput}
                    className="main__input" 
                    placeholder="Введите id"
                />
                <Link to={state.path} className="main__button" onClick={checkInput}>Получить результаты</Link>
            </form>
        </div>
    )
}