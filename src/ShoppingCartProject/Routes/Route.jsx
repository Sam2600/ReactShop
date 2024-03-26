import { Link, createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Invoice from "../Pages/Invoice";
import Detail from "../Pages/Detail";
import ParentPage from "../Layout/ParentPage";
import { Login } from "../Pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ParentPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },

      {
        path: "/detail/:id",
        element: <Detail />,
      },

      {
        path: "/cart",
        element: <Invoice />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Login />,
  },
  {
    path: "*",
    element: (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl my-10">No Pages and process here !</h1>
        <Link to="/" className="text-blue-600">
          Back To Home Page
        </Link>
      </div>
    ),
  },
]);

export default routes;
