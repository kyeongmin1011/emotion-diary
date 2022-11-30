import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LinkPage from 'components/LinkPage';
import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import Home from 'pages/Home';
import New from 'pages/New';
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader leftChild={<MyButton text={'왼쪽버튼'} />} headText={'일기 리스트'} rightChild={<MyButton text={'오른쪽 버튼'} />} />
        <MyButton text={"positive"} onClick={() => alert('버튼클릭')} type={"positive"}/>
        <MyButton text={"negative"} onClick={() => alert('버튼클릭')} type={"negative"}/>
        <MyButton text={"default"} onClick={() => alert('버튼클릭')} type={"default"}/>

        <Routes>
          <Route path={'/'}      element={<Home />} />
          <Route path={'/diary/:id'} element={<Diary />} />
          <Route path={'/new'}   element={<New />} />
          <Route path={'/edit'}  element={<Edit />} />
        </Routes>

        <LinkPage />
      </div>
    </BrowserRouter>
  );
}

export default App;

