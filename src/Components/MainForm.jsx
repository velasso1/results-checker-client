import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getId } from '../store/slices/idSlice';
import { Link } from 'react-router-dom';

export default function MainForm() {

    const [state, setState] = useState('');
    const [error, setError] = useState(false);

    const mainInput = useRef();
    const dispatch = useDispatch();

    const stateHandler = () => {
        setState(mainInput.current.value);
        setError(false);
        mainInput.current.classList.remove('main__input_error');
    }

    const putId = () => {
        if (!state.length) {
            setError(true);
            mainInput.current.classList.add('main__input_error');
        }
        dispatch(getId(state));
    }

    return (
        <div className="main">
            <form className="main__form">
            {(error) && <span className="main__error-message">Поле пустое</span>}
                <input 
                    ref={mainInput}
                    onChange={stateHandler}
                    className="main__input" 
                    placeholder="Введите id"
                />
                
                <Link to={state.length === 0 ? '/' : '/results'} className="main__button button" onClick={putId}>Получить результаты</Link>
            </form>
        </div>
    )
}