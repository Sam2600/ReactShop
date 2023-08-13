import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectAllUsers } from "../users/usersSlice"
import { postPosts } from "../posts/postsSlice"
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

  const navigate = useNavigate();

  const users = useSelector(selectAllUsers)

  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: "",
    content: "",
    authorID: "",
  });

  const [status, setStatus] = useState("idle");

  const onTitleChanged = (e) => {
    setPost({
      ...post,
      title: e.target.value,
    });
  };

  const onAuthorChanged = (e) => {
    setPost({
      ...post,
      authorID: e.target.value
    })
  }

  const onContentChanged = (e) => {
    setPost({
      ...post,
      content: e.target.value,
    });
  };

  const canSubmit = [post.title, post.authorID, post.content].every(Boolean) && status === "idle";

  const handleSubmit = () => {

    let title = post.title;
    let userId = post.authorID;

    if (canSubmit) {

      try {
        setStatus("pending");
        dispatch(postPosts({ title, body: post.content, userId })).unwrap();
        setPost({
          ...post,
          title: "",
          content: "",
          authorID: "",
        })

        navigate("/")

      } catch (error) {
        console.error("Failed to post", error)
      } finally {
        setStatus("idle")
      }

    }

  };

  return (

    <section className="w-5/12 gap-3 m-auto shadow-lg mt-20 border rounded-md p-7">

      <h2 className="text-3xl px-3 ms-1 underline text-gray-600">Add new posts</h2>

      <form className="flex flex-col w-8/12 m-auto my-5 items-center">

        <div className="flex w-full justify-between my-5">
          <label className="w-30" htmlFor="postTitle">
            Post Title :
          </label>
          <input
            className="border border-slate-900 w-3/4 px-2 rounded-md py-1 focus:border-blue-100"
            type="text"
            id="postTitle"
            name="postTitle"
            value={post.title}
            onChange={onTitleChanged}
          />
        </div>

        <div className="flex w-full justify-between">
          <label className="w-30" htmlFor="postContent">
            Content :
          </label>
          <textarea
            className="border w-3/4 pt-1 rounded-md px-2 border-slate-900  focus:border-blue-100"
            name="postContent"
            id="postContent"
            value={post.content}
            onChange={onContentChanged}
          ></textarea>
        </div>

        <div className="flex w-full justify-between my-5">

          <label className="w-30" htmlFor="authors">
            Author :
          </label>

          <select onChange={onAuthorChanged} id="authors" className="border p-1 border-slate-900 w-3/4 px-2 rounded-md">
            <option value={""}>Select Author</option>
            {
              users.map(user => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                )
              })
            }
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className={`border bg-slate-300 w-24 border-none shadow-md rounded-md p-1 my-5 transition-all duration-500 ${canSubmit && "hover:-translate-y-2 hover:shadow-teal-300"}`}
          type="button"
          disabled={!canSubmit}
        >
          Save Post
        </button>
      </form>
    </section>

  );
};

export default AddPostForm;
