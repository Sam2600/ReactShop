import { useSelector } from "react-redux";
import { selectAllPost, status, error, fetchPosts, } from "../posts/postsSlice"
import PostExerpt from "./PostExerpt";


const PostList = () => {

  const posts = useSelector(selectAllPost);
  const currentErrors = useSelector(error);
  const currentStatus = useSelector(status);

  let content;

  if (currentStatus === "Pending") {
    content = <p>Loading...</p>;
  }

  else if (currentStatus === "Succeed") {

    const reversedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    content = reversedPosts.map( post => <PostExerpt key={post.id} propPost={post} />);
  }

  else if (currentStatus === "Failed") {
    content = <p>{currentErrors}</p>
  }

  return (
    <section className="w-5/12 my-10 p-5 border border-slate-700 m-auto rounded-md ">
      <h2 className="text-2xl text-start underline">Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
