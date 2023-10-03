import React from 'react';
import BackForm from './BackForm';
import DataChecker from '../hoc/dataChecker';

function Table({userData, userId}) {

    const user = userData[`${userId}`];

        return (
            <>
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
                                <td>{user.SurName +' '+ user.Name +' '+ user.MidName}</td>
                                <td>{user.Exams.Philosophy}</td>
                                <td>{user.Exams.CivilLaw}</td>
                                <td>{user.Exams.CriminalLaw}</td>
                                <td>{+user.Exams.Philosophy + +user.Exams.CriminalLaw + +user.Exams.CivilLaw}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <BackForm/>
            </>
        )
    }

    export default DataChecker(Table);

