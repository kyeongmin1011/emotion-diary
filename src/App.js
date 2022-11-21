import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from 'pages/Home';
import New from 'pages/New';
import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import NotFound from 'pages/NotFound';

import RouteTest from "./components/RouteTest";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>app</h2>
        <RouteTest />

        <Routes>
          <Route path='/'      element={ <Home /> } />
          <Route path='/new'   element={ <New /> } />
          <Route path='/diary' element={ <Diary /> } />
          <Route path='/edit/*'  element={ <Edit /> } />
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path='*'  element={ <NotFound /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
