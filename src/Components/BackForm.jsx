// import RenderTable from "./RenderTable"

export default function BackForm({onClick}) {

    const getBack = (e) => {
        e.preventDefault();

        let tableMounting = false;
        let userId = null;
        // передача tableMounting and userId в родительский компонент
        onClick(tableMounting, userId);
    }


    return (
        <div className="back">
            <form className="back__form">
                <button className="back__button" onClick={getBack}>Назад</button>
            </form>
        </div>
    )
}