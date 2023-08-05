import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthForm() {
    return (
        <div className="auth">
            <form className="auth__form">
                <input 
                    className="auth-login__input" 
                    placeholder="Введите логин"
                />
                <input 
                    className="auth-pass__input" 
                    placeholder="Введите пароль"
                />
                <Link to="/" className="auth__button">Войти</Link>
            </form>
        </div>
    )
}