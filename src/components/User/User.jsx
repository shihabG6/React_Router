import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
  // console.log(user)
  const {id,title,body}=user;
  return (
    <div className="border bg-slate-300 p-4 rounded-lg flex flex-col">
      <h2 className="text-center text-2xl">User Id: <span className="font-bold">{id}</span></h2>
      <p className=" ">{title}</p>
      <p className='flex-grow'>{body}</p>
      <button className="btn w-1/3 mx-auto mt-2 "><Link to={`/posts/${id}`}>Show Ditals</Link></button>
    </div>
  );
};
User.propTypes={
  user:PropTypes.object.isRequired,
}
export default User;