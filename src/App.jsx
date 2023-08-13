import TodoList from "./RTK-Query/features/Todos/TodoList";
import Register from "./ReactForm/Register";
import AddPostForm from "./ReduxPractice2/features/posts/AddPostForm";
import PostList from "./ReduxPractice2/features/posts/PostList";
import "./index.css";

function App() {
  return (
    <div>
      <Register />
    </div>
  )
}

export default App;


/* For the RTK Blog Crud
  <AddPostForm />
  <PostList />
*/


/* For the React Shopping
   <ContextProvider>
      <RouterProvider router={routes}>
        <ParentPage />
      </RouterProvider>
    </ContextProvider>
*/
