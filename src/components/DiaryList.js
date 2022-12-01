import {useState} from "react";
import MyButton from "components/MyButton";
import {useNavigate} from "react-router-dom";
import DiaryItem from "./DiaryItem";

const ControlMenu = ({value, onChange, optionList}) => {
  return <select className="ControlMenu"
                 value={value}
                 onChange={(e) => onChange(e.target.value)}>
    {optionList.map((item, idx) => <option value={item.value} key={idx}>{item.name}</option>)}
  </select>
}

const DiaryList = ({diaryList}) => {
  const navigate = useNavigate();
  const [dayType, setDayType] = useState('latest');
  const [emotionType, setEmotionType] = useState('all');

  const dayOptionList = [
    {value: 'latest', name: '최신순'},
    {value: 'oldest', name: '오래된순'},
  ]

  const emotionOptionList = [
    {value: 'all', name: '전부다'},
    {value: 'good', name: '좋은 감정만'},
    {value: 'bad', name: '안좋은 감정만'},
  ]

  // 필터기능
  const getProcessedDiaryList = () => {
    const dayFilter = (a, b) => {
      if (dayType === 'latest') return parseInt(b.date) - parseInt(a.date)
      else return parseInt(a.date) - parseInt(b.date)
    }

    const emotionFilter = (item) => {
      if (emotionType === 'good') return Number(item.emotion) <= Number(3);
      else return Number(item.emotion) > Number(3);
    }

    const copyList = JSON.parse(JSON.stringify(diaryList));  // 원본 배열을 건드리지 않기 위해 깊은 복사
    const filteredList = emotionType === 'all' ? copyList : copyList.filter(item => emotionFilter(item));
    return filteredList.sort(dayFilter);
  }

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu value={dayType}
                       onChange={setDayType}
                       optionList={dayOptionList}/>
          <ControlMenu value={emotionType}
                       onChange={setEmotionType}
                       optionList={emotionOptionList}/>
        </div>
        <div className="right_col">
          <MyButton type={'positive'}
                    text={'새 일기쓰기'}
                    onClick={() => navigate('/new')} />
        </div>
      </div>
      {/* 주의 : getProcessedDiaryList 함수로 사용 */}
      {getProcessedDiaryList().map(item => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </div>
  )
};

DiaryList.defaultProps = {
  diaryList: []
}

export default DiaryList;