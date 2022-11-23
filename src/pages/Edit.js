import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  const change = () => setSearchParams({who: 'min', mode: 'white'})
  const goHome = () => navigate('/');
  const goBack = () => navigate('/-1');

  return (
    <div className="Edit">
      <h2>Edit</h2>
      <button onClick={change}>QS 바꾸기</button>
      <button onClick={goHome}>Home</button>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  )
}

export default Edit;
