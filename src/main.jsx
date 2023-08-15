import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./ShoppingCartProject/Redux/app/store.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./ShoppingCartProject/Routes/Route.jsx";
import { fetchProducts } from "./ShoppingCartProject/Redux/features/ProductSlice.jsx";

store.dispatch(fetchProducts());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
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
