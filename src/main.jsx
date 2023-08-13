import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { store } from "./ReduxPractice2/app/store.jsx";
import { Provider } from "react-redux";
import { fetchUsers } from "../src/ReduxPractice2/features/users/usersSlice.jsx"
import { RouterProvider } from "react-router-dom";
import { router } from "./ReduxPractice2/Routes.jsx";
import { fetchPosts } from "./ReduxPractice2/features/posts/postsSlice.jsx";
import { apiSlice } from "../src/RTK-Query/features/api/apiSlice.jsx"
import { ApiProvider } from "@reduxjs/toolkit/query/react"

ReactDOM.createRoot(document.getElementById("root")).render(

  //<React.StrictMode>
    <App />
  //</React.StrictMode>

);



/* This is for the RTK Blog Crud

store.dispatch(fetchUsers());
store.dispatch(fetchPosts())

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>
*/