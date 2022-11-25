import {useState, useContext, useEffect} from "react";
import {DiaryStateContext} from "App";

import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";
import DiaryList from "components/DiaryList";


const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 `;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
      const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0);
      setData(diaryList.filter(item => firstDay <= item.date && item.date <= lastDay));
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()))
  }
  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()))
  }

  return (
    <div className="Home">
      <MyHeader leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
                headText={headText}
                rightChild={<MyButton text={'>'} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  )
}

export default Home;
