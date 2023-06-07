import React from 'react';

function Table () {
    return (
        <div className="results">
        <table className="results__table">
            <tbody>
            <tr>
                <td rowSpan="2">ФИО</td>
                <td colSpan="3">ЭКЗАМЕНЫ</td>
                <td rowSpan="2">СУММА БАЛЛОВ</td>
            </tr>
            <tr>
                <td>ФИЛОСОФИЯ</td>
                <td>ГРАЖДАНСКОЕ ПРАВО</td>
                <td>УГОЛОВНОЕ ПРАВО</td>
            </tr>
            <tr>
                <td>ПЕРЕСКОКОВ ИГОРЬ ЕВГЕНЬЕВИЧ</td>
                <td>90</td>
                <td>50</td>
                <td>60</td>
                <td>200</td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}

export default Table;