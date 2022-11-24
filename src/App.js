import React, {useReducer, useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from 'pages/Home';
import New from 'pages/New';
import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data
    }
    case 'CREATE': {
      return [action.data, ...state]
    }
    case 'DELETE': {
      return state.filter(item => item.id !== action.targetId)
    }
    case 'EDIT': {
      return state.map(item => item.id === action.data.id ? {...action.data} : item)
    }
    default:
      return state
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const onCreate = ({date, content, emotion}) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      }
    });
    dataId.current += 1;
  }

  const onDelete = (targetId) => {
    dispatch({type: 'DELETE', targetId});
  }

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT', data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onDelete, onEdit}}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/new'} element={<New/>}/>
              <Route path={'/diary/:id'} element={<Diary/>}/>
              <Route path={'/edit/*'} element={<Edit/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
