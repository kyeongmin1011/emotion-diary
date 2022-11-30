import './App.css';
import React, {useReducer, useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import Home from 'pages/Home';
import New from 'pages/New';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      return [action.data, ...state]
    }
    case 'REMOVE': {
      return state.filter(item => item.id !== action.data.id);
    }
    case 'EDIT': {
      return state.map(item => item.id === action.data.id ? {...action.data} : state)
    }
    default: {
      return state
    }
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE', data: {
        id: dataId.current,
        date: new Date().getTime(),
        content,
        emotion
      }
    })
    dataId.current += 1
  }

  const onRemove = (targetId) => {
    dispatch({type: 'REMOVE', targetId});
  }

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onRemove, onEdit}}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/diary/:id'} element={<Diary/>}/>
              <Route path={'/new'} element={<New/>}/>
              <Route path={'/edit'} element={<Edit/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

