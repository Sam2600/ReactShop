import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import PostList from "./features/posts/PostList";
import SinglePage from "./features/posts/singlePage";
import AddPostForm from "./features/posts/AddPostForm";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <Layout />,
          children: [
               {
                    path: "/",
                    element: <PostList />
               },

               {
                    path: "post/:id",
                    element: <SinglePage />
               },

               {
                    path: "/createPost",
                    element: <AddPostForm />
               }
          ]

          
     },
])