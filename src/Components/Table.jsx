import React from 'react';

export default function Table({data, user}) {

    let userInfo = data[`${user}`];

    if (userInfo !== undefined && userInfo !== null) {
        return (
            <div className="results">
                <table className="results__table">
                    <tbody>
                        <tr>
                            <td rowSpan="2">ФИО
                            </td>
                            <td colSpan="3">ЭКЗАМЕНЫ</td>
                            <td rowSpan="2">СУММА БАЛЛОВ</td>
                        </tr>
                        <tr>
                            <td>ФИЛОСОФИЯ</td>
                            <td>ГРАЖДАНСКОЕ ПРАВО</td>
                            <td>УГОЛОВНОЕ ПРАВО</td>
                        </tr>
                        <tr>
                            <td>{userInfo.SurName +' '+ userInfo.Name +' '+ userInfo.MidName}</td>
                            <td>{userInfo.Exams.Philosophy}</td>
                            <td>{userInfo.Exams.CivilLaw}</td>
                            <td>{userInfo.Exams.CriminalLaw}</td>
                            <td>{+userInfo.Exams.Philosophy + +userInfo.Exams.CriminalLaw + +userInfo.Exams.CivilLaw}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div className="invalid-user">
                <p className="invalid-user__status">Пользователь не найден</p>
            </div>
        )
    }
}
