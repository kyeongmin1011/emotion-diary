import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from 'pages/Home';
import New from 'pages/New';
import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import NotFound from 'pages/NotFound';
import MyButton from "components/MyButton";
import MyHeader from "components/MyHeader";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader leftChild={<MyButton text={'<'} />}
                  headText={'app'}
                  rightChild={<MyButton text={'>'} />}/>

        <Routes>
          <Route path={'/'}      element={ <Home /> } />
          <Route path={'/new'}   element={ <New /> } />
          <Route path={'/diary/:id'} element={ <Diary /> } />
          <Route path={'/edit/*'} element={ <Edit /> } />
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path={'*'}  element={ <NotFound /> } />
        </Routes>

        <MyButton text={'버튼'} type={'positive'} onClick={() => alert('버튼 클릭')} />
        <MyButton text={'버튼'} type={'negative'} onClick={() => alert('버튼 클릭')} />
        <MyButton text={'버튼'} onClick={() => alert('버튼 클릭')} />
      </div>
    </BrowserRouter>
  );
}

export default App;
