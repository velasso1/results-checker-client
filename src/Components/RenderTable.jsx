import React, {useState} from 'react';
import GetData from './GetData';
import BackForm from './BackForm';
import MainForm from './MainForm';

export default function RenderTable(props) {

    const [state, setState] = useState({tableIsMount: false});
    const [user, setUser] = useState({inputValue: null});

    // запись полученного в компоненте MainForm значения из инпута в стейт
    const writeId = (id) => {
        setUser({
            inputValue: id
        })
    }
    // проверка инпута на пустое значение
    const checkInput = (tableMounting) => {
        setState({tableIsMount: tableMounting});
    }
    // изменение стейта для возвращение исходного состояния приложения
    const getBack = (tableMounting, userId) => {
        setState({tableIsMount: tableMounting})
        setUser({inputValue: userId})
    }  

    if (state.tableIsMount) {
        return (
            <>
                <GetData user={user.inputValue}/>
                <BackForm onClick={getBack}/>
            </>
        )
    }

    return (
        <MainForm tableMounting={state.tableIsMount} getRes={checkInput} getId={writeId}/>
    )
}