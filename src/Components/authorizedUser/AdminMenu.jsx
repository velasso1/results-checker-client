import React from 'react';

export default function AdminMenu() {

    return (
        <div className='admin-menu'>
            <input className='admin-menu__input'placeholder='Введите id или ФИО'/>
            <button className="admin-menu__button button">Добавить новые результаты</button>
        </div>
    )
}