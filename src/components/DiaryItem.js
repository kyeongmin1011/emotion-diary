import MyButton from "./MyButton";
import {useNavigate} from "react-router-dom";


const DiaryItem = ({id, content, emotion, date}) => {
  const navigate = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const goDetail = () => navigate(`/diary/${id}`);
  const goEdit = () => navigate(`/edit/${id}`);
  return (
    <div className="DiaryItem">
      <div className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(' ')}>
        <img src={`assets/emotion${emotion}.png`} alt=""/>
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 20)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"수정하기"} onClick={goEdit}/>
      </div>
    </div>
  )
}

export default DiaryItem