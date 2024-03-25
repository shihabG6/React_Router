import { useLoaderData, useNavigate } from "react-router-dom";

const Ditalse = () => {
  const users = useLoaderData();
  const navigat = useNavigate();

  
  const { id, title, body } = users;
  const handelNavigate=()=>{
     navigat(-1)
  }


  return <div className=" md:w-2/3 lg:w-1/3 mx-auto border p-6 bg-slate-200 rounded-lg mt-14 space-y-4">
    <h2 className="text-center text-2xl">User Id: <span className="font-semibold">{id}</span></h2>
    <p className="text-lg font-medium">{title}</p>
    <p>{body}</p>
    <button onClick={handelNavigate} className="btn w-1/3 mx-auto mt-2 ">Go Back</button>

  </div>;
};

export default Ditalse;
