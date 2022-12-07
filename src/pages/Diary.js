import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {emotionList} from 'util/emotionList';
import {getStringDate} from "util/data";
import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";

const Diary = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState(); // 현재 다이어리 state 할당


  useEffect(() => {
    if (diaryList.length > 1) {
      const targetDiary = diaryList.find(item => Number(item.id) === Number(id));
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert('없는 일기입니다')
        navigate('/', {replace: true})
      }
    }
  }, [id, diaryList])

  if (!data) {
    return <div className="DiaryPage">로딩중입니다..</div>
  } else {
    const curEmotionData = emotionList.find(item => parseInt(item.id) === parseInt(data.emotion))
    return <div className="Diary">
      <MyHeader leftChild={<MyButton text={'뒤로가기'} onClick={() => navigate(-1)}/>}
                headText={`${getStringDate(new Date(data.date))} 기록`}
                rightChild={<MyButton text={'수정하기'} onClick={() => navigate(`/edit/${id}`)}/>}/>

      <article>
        <section>
          <h4>오늘의 감정</h4>
          <div className={['diary_img_wrapper', `diary_img_wrapper_${data.emotion}`].join(' ')}>
            <img src={curEmotionData.img} alt=""/>
            <div className='emotion_description'>{curEmotionData.description}</div>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className='diary_content_wrapper'>
            <p>{data.content}</p>
          </div>
        </section>
      </article>
    </div>
  }
}

export default Diary