import {useState, useContext, useEffect} from "react";
import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";
import DiaryList from "components/DiaryList";
import {DiaryStateContext} from "App";


const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  const increaseMonth = () => setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDay()));
  const decreaseMonth = () => setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDay()));

  const diaryList = useContext(DiaryStateContext); // 일기리스트 context로 data 받아오기
  const [data, setData] = useState([]); // 해당 월의 일기 리스트가 출력될 data

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime();
      const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getTime()
      setData(diaryList.filter(item => firstDay <= item.date && item.date <= lastDay))
    }
  }, [diaryList, curDate])

  return (
    <div className={"Home"}>
      <MyHeader leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
                headText={headText}
                rightChild={<MyButton text={'>'} onClick={increaseMonth} />} />
      <DiaryList diaryList={data}/>
    </div>
  )
}

export default Home