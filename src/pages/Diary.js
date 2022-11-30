import {useState, useContext, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {DiaryStateContext} from "App";
import {getstringDate} from 'util/data'
import {emotionList} from "util/emotionList";
import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";

const Diary = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const {id} = useParams();
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(item => parseInt(item.id) === parseInt(id));
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert('없는 일기입니다.');
        navigate('/', {replace: true})
      }
    }
  }, [id, diaryList])


  if (!data) {
    return <div className="Diary">로딩중입니다..</div>
  } else {
    const curEmotionData = emotionList.find(item => parseInt(item.emotion_id) === parseInt(data.emotion))
    console.log(curEmotionData)

    return (
      <div className="Diary">
        <MyHeader leftChild={<MyButton text={'뒤로가기'} onClick={() => navigate(-1)} />}
                  headText={`${getstringDate(new Date(data.date))}의 기록` }
                  rightChild={<MyButton text={'수정하기'} onClick={() => navigate(`/edit/${id}`)} />}
        />

        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div className={["diary_img_wrapper", `diary_img_wrapper_${data.emotion}`].join(' ')}>
              <img src={curEmotionData.emotion_img} alt=""/>
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    )
  }

}

export default Diary;
