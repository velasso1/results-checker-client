import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <a href="https://xn--l1aeji.xn--b1aew.xn--p1ai/">
            <img className="header__logo" src="logo.png" alt="logo"/>
            </a>
            <h1 className="header__title">проверка результатов вступительных испытаний адьюнктов</h1>
            <NavLink to="/login" className="login">Войти</NavLink>
        </header>
    )
}