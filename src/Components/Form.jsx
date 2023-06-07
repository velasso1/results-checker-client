import React from 'react';

const input = document.querySelector('.main__input');

export default class Form extends React.Component {

    getInfo = async function(e) {
        e.preventDefault();

        try {
            const info = await fetch('http://localhost:3000/db.json').then(resp => resp.json());

            console.log(info[`${input.value}`]);

        } catch(e) {
            console.log("Ошибка" + e.message);
        }
    }

    render() {
        return (
            <div className="section">
                <form className="main__form">
                    <input className="main__input" placeholder="Введите id"/>
                    <button className="main__button" onClick={this.getInfo}>Получить результаты</button>
                </form>
            </div>
        )
    }
}