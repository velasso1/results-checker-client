import React from 'react';
import { Link } from 'react-router-dom'

export default function BackForm() {

    return (
        <div className="back">
            <form className="back__form">
                <Link to="/" className="back__button">Назад</Link>
            </form>
        </div>
    )
}