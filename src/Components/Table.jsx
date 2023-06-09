import React from 'react';

export default function Table(props) {

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
                    <td>name</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>sum</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
