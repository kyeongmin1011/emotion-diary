import {Link} from 'react-router-dom';

const RouteTest = () => {
  return (
    <div className="RouteTest">
      <Link className="link" to={'/'} >Home 홈페이지</Link>
      <Link className="link" to={'/diary'} >Diary</Link>
      <Link className="link" to={'/new'} >New</Link>
      <Link className="link" to={'/edit'} >Edit</Link>
    </div>
  )
}

export default RouteTest;