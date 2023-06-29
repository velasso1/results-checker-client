import {useState, useRef} from 'react';
import {Link} from 'react-router-dom'
import GetData from './GetData';
import ResultsPage from '../pages/ResultsPage';

export default function MainForm() {

    let mainInput = useRef();

    const [state, setState] = useState({tableIsMount: false});
    const [userId, setId] = useState({id: null});

    // запись введенного в инпут id в стейт
    const writeId = (e) => {
        mainInput.current.classList.remove('main__input_error')

        setId({
            id: mainInput.current.value
        })
    }

    // проверка инпута на пустое значение
    const checkInput = (e) => {

        if (mainInput.current.value.trim() === '') {
            mainInput.current.classList.add('main__input_error');
        } else {
            setState({
                tableIsMount: true
            });
        }
    }

    if (state.tableIsMount) {
        <ResultsPage user={userId.id}/>
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
                <Link to="/results" className="main__button" onClick={checkInput}>Получить результаты</Link>
            </form>
        </div>
    )
}