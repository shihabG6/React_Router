import { Outlet } from "react-router-dom";
import Nevbar from "../Nevbar/Nevbar";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Nevbar></Nevbar>
      <h2 className="text-center text-2xl mt-8">Welcome to our Home page</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;