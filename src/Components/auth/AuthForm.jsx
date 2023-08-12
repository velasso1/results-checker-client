import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';

export default function AuthForm() {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [state, setState] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logInput = useRef();
    const passInput = useRef();

    const signIn = (e) => {
        e.preventDefault();
        const auth = getAuth();

        signInWithEmailAndPassword(auth, login, pass)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/authorized');
            })
            .catch((error) => {
                if (error) {
                    passInput.current.classList.add('main__input_error');
                    logInput.current.classList.add('main__input_error');
                    setState(true);
                }
            });
    }

    return (
        <div className="auth">
            <form className="auth__form">
            {state && <span className='main__error-message'>Неверный логин или пароль</span>}
                <input
                    type='email' 
                    value={login}
                    ref={logInput}
                    onChange={(e) => setLogin(e.target.value)}
                    className="auth-login__input" 
                    placeholder="Введите логин"
                />
                <input 
                    type='password'
                    value={pass}
                    ref={passInput}
                    onChange={(e) => setPass(e.target.value)}
                    className="auth-pass__input" 
                    placeholder="Введите пароль"
                />
                <button onClick={signIn} className="auth__button button">Войти</button>
                
            </form>
        </div>
    )
}