import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Posts = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-blue-300 my-4 p-6">User: {users.length}</h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          users.map(user=><User user={user} key={user.id}></User>)
        }
      </div>
    </div>
  );
};

export default Posts;