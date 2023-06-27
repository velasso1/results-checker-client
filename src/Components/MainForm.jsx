import {useRef} from 'react';

export default function MainForm({tableMounting, getRes, getId}) {

    let mainInput = useRef();

    // проверка инпута на пустое значение
    const checkInput = (e) => {
        e.preventDefault();

        if (mainInput.current.value.trim() === '') {
            mainInput.current.classList.add('main__input_error');
        } else {
            tableMounting = true;
        }
        // передаача userId and tableMounting в родительский компонент
        getRes(tableMounting);
    }

    
    const writeId = (e) => {
        e.preventDefault();
        mainInput.current.classList.remove('main__input_error')
        // вызов функции getId для передачи введенного в инпут значения в родительский компонент

        getId(mainInput.current.value)
    }

    return (
        <div className="main">
            <form className="main__form">
                <input 
                    ref={mainInput}
                    className="main__input" 
                    onChange={writeId} 
                    placeholder="Введите id"
                />
                <a href="/page" className="main__button" onClick={checkInput}>Получить результаты</a>
            </form>
        </div>
    )
}