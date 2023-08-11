import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const ParentPage = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default ParentPage;
