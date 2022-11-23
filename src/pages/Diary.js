import {useParams} from 'react-router-dom';

const Diary = () => {
  const {id} = useParams();

  return (
    <div className="Diary">
      <h2>Diary</h2>
    </div>
  )
}

export default Diary;
