import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {DiaryStateContext} from "../App";
import DiaryEditor from 'components/DiaryEditor';

const Edit = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const diaryList = useContext(DiaryStateContext);
  const [selectData, setSelectData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(item => parseInt(item.id) === parseInt(id));
      if (targetDiary) setSelectData(targetDiary)
      else navigate('/', {replace: true}) // 뒤로가기 못하도록 처리
    }
  }, [id, diaryList]);

  return (
    <div className={"Edit"}>
      {selectData && <DiaryEditor isEdit={true} selectData={selectData}/>}
    </div>
  )
}

export default Edit