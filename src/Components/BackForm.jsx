// import RenderTable from "./RenderTable"

export default function BackForm({userId, tableMounting, onClick}) {

    const getBack = (e) => {
        e.preventDefault();

        tableMounting = false;
        userId = null;

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