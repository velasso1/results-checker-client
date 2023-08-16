import React from 'react';
import useAuth from '../hooks/use-auth';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import { getAuth, signOut } from "firebase/auth"

export default function Header() {

    const dispatch = useDispatch();
    let {isAuth} = useAuth();
    const auth = getAuth();

    const handleExit = (e) => {
        e.preventDefault();
        dispatch(removeUser());
        signOut(auth);
    }    
    
    return (
        <header className="header">
            <a href="https://xn--l1aeji.xn--b1aew.xn--p1ai/">
            <img className="header__logo" src="logo.png" alt="logo"/>
            </a>
            <NavLink to='/' className="header__title">проверка результатов вступительных испытаний адьюнктов</NavLink>
            {isAuth ? <button className="header__exit" onClick={handleExit}>выйти</button> : 
            <NavLink to="/login" className="login">Войти</NavLink>}
        </header>
    )
}