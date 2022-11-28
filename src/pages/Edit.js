import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {DiaryStateContext} from "App";
import DiaryEditor from "components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const diaryList = useContext(DiaryStateContext);
  const [originData, setOriginData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(item => parseInt(item.id) === parseInt(id));
      if (targetDiary) {
        setOriginData(targetDiary);
      }
      else {
        navigate('/', {replace: true}) // replace true: 뒤로가기 막음
      }
    }
  }, [id, diaryList])

  return (
    <div className="Edit">
      {originData && <DiaryEditor isEdit={true} originData={originData}/>}
    </div>
  )
}

export default Edit;
