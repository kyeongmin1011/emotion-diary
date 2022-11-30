import {Link} from 'react-router-dom';

const LinkPage = () => {
  return (
    <div className={"LinkPage"}>
      <Link to={"/"} >Home</Link>
      <Link to={"/diary"} >Diary</Link>
      <Link to={"/new"} >New</Link>
      <Link to={"/edit"} >Edit</Link>
    </div>
  )
}

export default LinkPage;