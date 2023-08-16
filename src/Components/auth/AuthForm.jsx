import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';

export default function AuthForm() {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logInput = useRef();
    const passInput = useRef();

    const signIn = (e) => {
        
        e.preventDefault();
        setLoading(true);
        const auth = getAuth();

        signInWithEmailAndPassword(auth, login, pass)
            .then(({user}) => {
                console.log(user);
                navigate('/authorized');
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                // sessionStorage.setItem('userEmail', `${user.email}`);
            })
            .catch((error) => {
                console.log(error.code);
                passInput.current.classList.add('main__input_error');
                logInput.current.classList.add('main__input_error');
                setHasError(true);
                setLoading(false);
            });
    }

    return (
        <div className="auth">
            <form className="auth__form" action="post">
                {hasError && <span className='main__error-message'>Неверный логин или пароль</span>}
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
                    // value={pass}
                    ref={passInput}
                    onChange={(e) => setPass(e.target.value)}
                    className="auth-pass__input" 
                    placeholder="Введите пароль"
                />
                <button 
                    type='submit' 
                    onClick={signIn} 
                    className="auth__button button">
                    {loading ? 'Подождите, идет загрузка..' : 'Войти'}
                </button>
            </form>
        </div>
    )
}