import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, title, body } = user;
  const navigate = useNavigate();
 const handelNavigate=()=>{
    navigate(`/posts/${id}`)
 }

  return (
    <div className="border bg-slate-300 p-4 rounded-lg flex flex-col">
      <h2 className="text-center text-2xl">
        User Id: <span className="font-bold">{id}</span>
      </h2>
      <p className=" ">{title}</p>
      <p className="flex-grow">{body}</p>
      {/* <button className="btn w-1/3 mx-auto mt-2 ">
        <Link to={`/posts/${id}`}>Show Ditals</Link>
      </button> */}
      <button onClick={handelNavigate}  className="btn w-1/3 mx-auto mt-2 ">Show Ditalse</button>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
