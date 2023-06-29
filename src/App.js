import {Routes, Route} from 'react-router-dom';

import Header from "./Components/Header";
import StartPage from "./pages/StartPage";
import ResultsPage from "./pages/ResultsPage";

import './css/style.css';

function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route  path="/" element={<StartPage/>}/>
          <Route path="/results" element={<ResultsPage/>}/>
        </Routes>
      </>
  );
}

export default App;
