import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getId } from '../store/slices/idSlice';
import { Link } from 'react-router-dom';

export default function MainForm() {

    const [state, setState] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const putId = () => {
        state.length ? dispatch(getId(state)) : setError(true);
    }

    return (
        <div className="main">
            <form className="main__form">
            {error && <span className="main__error-message">Поле пустое</span>}
                <input
                    onChange={(e) => setState(e.target.value.trim())}
                    className="main__input" 
                    placeholder="Введите id"
                />
                <Link to={state.length === 0 ? '/' : '/results'} className="main__button button" onClick={putId}>Получить результаты</Link>
            </form>
        </div>
    )
}