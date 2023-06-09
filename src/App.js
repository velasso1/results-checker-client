import Header from "./Components/Header";
import Form from "./Components/Form";
import RenderTab from "./Components/RenderTable";
import GetData from './Components/GetData';

import './App.css';

function App() {
  return (
      <>

        <Header />
        <GetData/>
        <RenderTab/>
        {/* <Form /> */}
      </>
  );
}

export default App;
