import {useSearchParams, useNavigate} from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');
  const qsChange = () => setSearchParams({name: 'min', age: '30'});
  const goHome = () => navigate('/');

  console.log(id, mode)

  return (
    <div className={"Edit"}>
      <h2>Edit</h2>
      <button onClick={qsChange}>QS 바꾸기</button>
      <button onClick={goHome}>Home</button>
    </div>
  )
}

export default Edit