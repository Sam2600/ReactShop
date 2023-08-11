
import AddPostForm from "./ReduxPractice2/features/posts/AddPostForm";
import PostList from "./ReduxPractice2/features/posts/PostList";
import "./index.css";

function App() {
  return(
    <div className="flex flex-col items-center justify-center">
      <AddPostForm />
      <PostList />
    </div>
  )
}

export default App;

/**
 *  <ContextProvider>
      <RouterProvider router={routes}>
        <ParentPage />
      </RouterProvider>
    </ContextProvider>
 */
