import { useSelector, useDispatch } from "react-redux";

const PostList = () => {
  const posts = useSelector((state)=>state.posts);

  const allPost = posts.map((p) => {
    return (
      <article className="p-5 border my-5 w-8/12 m-auto shadow-lg transition-all duration-300 hover:cursor-pointer hover:scale-105" key={p.id}>
        <h3 className="text-2xl mb-3">{p.title}</h3> <hr />
        <p className="mt-3">{p.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section className="w-5/12 my-10 p-5 border border m-auto rounded-md ">
      <h2 className="text-2xl text-start underline">Posts</h2>
      {allPost}
    </section>
  );
};

export default PostList;
