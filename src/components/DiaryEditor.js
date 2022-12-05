import {useState, useRef, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";
import EmotionItem from "./EmotionItem";
import {DiaryDispatchContext} from "../App";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
}

const emotionList = [
  {id: 1, img: `/assets/emotion1.png`, description: '완전 좋음'},
  {id: 2, img: `/assets/emotion2.png`, description: '좋음'},
  {id: 3, img: `/assets/emotion3.png`, description: '보통'},
  {id: 4, img: `/assets/emotion4.png`, description: '나쁨'},
  {id: 5, img: `/assets/emotion5.png`, description: '완전 나쁨'},
]

const DiaryEditor = ({isEdit, selectData}) => {
  const {onCreate, onEdit} = useContext(DiaryDispatchContext);
  const contentRef = useRef();
  const navigate = useNavigate();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3); // 어떤 감정을 선택했는지 저장
  const [content, setContent] = useState('');

  const handleContent = (e) => setContent(e.target.value)
  const handleClickEmotion = (emotion) => setEmotion(emotion);
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (window.confirm(isEdit ? "일기를 수정하시겠습니까?" : "새 일기를 등록하시겠습니까?")) {
      if (isEdit) onEdit(selectData.id, date, content, emotion);
      else onCreate(date, content, emotion);
    }
    navigate('/', {replace: true});
  }

  useEffect(() => {
    // edit 페이지 일 때
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(selectData.date))));
      setEmotion(selectData.emotion);
      setContent(selectData.content);
    }
  }, [isEdit, selectData]);


  return (
    <div className="DiaryEditor">
      <MyHeader leftChild={<MyButton text={'뒤로가기'} onClick={() => navigate('/')}/>}
                headText={isEdit ? "일기 수정하기" : '새 일기쓰기'}/>
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input className="input_date"
                   type="date"
                   value={date}
                   onChange={(e) => setDate(e.target.value)}/>
          </div>
        </section>
        <section>
          <h2>오늘의 감정</h2>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map(item => (
              <EmotionItem key={item.id}
                           {...item}
                           onClick={handleClickEmotion}
                           isSelected={item.id === emotion}/>
            ))}
          </div>
        </section>
        <section>
          <h2>오늘의 일기</h2>
          <div className="input_box text_wrapper">
            <textarea ref={contentRef}
                      placeholder="오늘은 어땟나요?"
                      value={content}
                      onChange={handleContent}/>
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={'취소하기'} onClick={() => navigate(-1)}></MyButton>
            <MyButton text={'저장하기'} onClick={handleSubmit} type={'positive'}></MyButton>
          </div>
        </section>
      </div>

    </div>
  )
}

export default DiaryEditor;