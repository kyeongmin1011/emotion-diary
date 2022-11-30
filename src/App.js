import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LinkPage from 'components/LinkPage';
import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import Home from 'pages/Home';
import New from 'pages/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'}      element={<Home />} />
          <Route path={'/diary'} element={<Diary />} />
          <Route path={'/new'}   element={<New />} />
          <Route path={'/edit'}  element={<Edit />} />
        </Routes>

        <LinkPage />
      </div>
    </BrowserRouter>
  );
}

export default App;

