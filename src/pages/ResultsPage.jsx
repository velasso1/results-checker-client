import GetData from '../Components/GetData';

export default function ResultsPage(props) {

    console.log(props.user);

    return (
        <GetData user={props.user}/>
    )
}