import {useState, useRef, useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";
import EmotionItem from "components/EmotionItem";
import {DiaryDispatchContext} from "App";
import {getstringDate} from "util/data";
import {emotionList} from "util/emotionList";


const DiaryEditor = ({isEdit, originData}) => {
  const contentRef = useRef();
  const navigate = useNavigate();

  const [date, setDate] = useState(getstringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState('');
  const {onCreate, onEdit} = useContext(DiaryDispatchContext);

  const goHome = () => navigate('/');
  const handleClickEmote = (emotion) => setEmotion(emotion);
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus()
      return
    }
    if (window.confirm(isEdit ? '일기를 수정하시겠습니까?' : '새로운 일기를 작성하시겠습니까?')) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion)
      }
    }

    navigate('/', {replace: true})
  }


  useEffect(() => {
    if (isEdit) {
      setDate(getstringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData])

  return (
    <div className="DiaryEditor">
      <MyHeader leftChild={<MyButton text={"< 뒤로가기"} onClick={goHome}/>}
                headText={isEdit ? "일기 수정하기" : "일기쓰기"}/>

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
        <div className="input_box emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem
              key={it.emotion_id}
              {...it}
              onClick={handleClickEmote}
              isSelected={it.emotion_id === emotion}
            />
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