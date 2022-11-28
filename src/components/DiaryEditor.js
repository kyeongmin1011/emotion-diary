import {useState, useRef, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";
import EmotionItem from "./EmotionItem";
import {DiaryDispatchContext} from "App";

const getstringDate = (date) => {
  return date.toISOString().slice(0, 10);
}

const emotionList = [
  {emotion_id: 1, emotion_img: `assets/emotion1.png`, emotion_descript: '매우 좋음'},
  {emotion_id: 2, emotion_img: `assets/emotion2.png`, emotion_descript: '좋음'},
  {emotion_id: 3, emotion_img: `assets/emotion3.png`, emotion_descript: '보통'},
  {emotion_id: 4, emotion_img: `assets/emotion4.png`, emotion_descript: '안좋음'},
  {emotion_id: 5, emotion_img: `assets/emotion5.png`, emotion_descript: '매우 안좋음'},
]

const DiaryEditor = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  const contentRef = useRef();
  const [content, setContent] = useState('');
  const [date, setDate] = useState(getstringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const handleClickEmote = (emotion) => setEmotion(emotion);

  const {onCreate} = useContext(DiaryDispatchContext);
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus()
      return
    }
    onCreate(date, content, emotion);
    console.log(date, content, emotion)
    navigate('/', {replace: true})
  }
  return (
    <div className="DiaryEditor">
      <MyHeader leftChild={<MyButton text={"< 뒤로가기"} onClick={goHome}/>}
                headText={"새로운 일기쓰기"}/>

      <section>
        <h4>오늘은 언제인가요?</h4>
        <div className="input-box">
          <input className="input_date"
                 type="date"
                 value={date}
                 onChange={e => setDate(e.target.value)}/>
        </div>
      </section>

      <section>
        <h4>오늘의 감정</h4>
        <div className={"input_box emotion_list_wrapper"}>
          {emotionList.map(item => (
           <EmotionItem key={item.emotion_id}
                        {...item}
                        onClick={handleClickEmote}
                        isSelected={item.emotion_id === emotion}/>
          ))}
        </div>
      </section>
      <section>
        <h4>오늘의 일기</h4>
        <div className="input_box text_wrapper">
          <textarea name=""
                    placeholder="오늘은 어땠나요?"
                    ref={contentRef}
                    value={content}
                    onChange={e => setContent(e.target.value)}/>
        </div>
      </section>
      <section>
        <div className="control_box">
          <MyButton text={'취소하기'}
                    onClick={() => navigate('/')}/>
          <MyButton text={'작성완료'}
                    type={'positive'}
                    onClick={handleSubmit} />
        </div>
      </section>
    </div>
  )
}

export default DiaryEditor;