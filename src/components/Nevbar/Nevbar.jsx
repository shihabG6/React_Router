import { Link } from "react-router-dom";


const Nevbar = () => {
  return (
    <div className="h-14 bg-slate-200 flex justify-around items-center">
      <h2>Niloy Hasan</h2>
      <nav className="space-x-2">
        <Link className="btn" to="/about">About</Link>
        <Link className="btn" to='/posts'>Posts</Link>
      </nav>
    </div>
  );
};

export default Nevbar;