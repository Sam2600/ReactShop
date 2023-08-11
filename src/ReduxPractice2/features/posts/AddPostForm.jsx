import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    id: nanoid(),
    title: "",
    content: "",
  });

  const onTitleChanged = (e) => {
    setPost({
      ...post,
      title: e.target.value,
    });
  };

  const onContentChanged = (e) => {
    setPost({
      ...post,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (post.title && post.content) {
      dispatch(postAdded(post.title, post.content));
    }
  };

  return (
    <section className="w-3/12 gap-3 m-auto shadow-lg mt-7">
      <h2 className="text-2xl px-3">Add new posts</h2>

      <form className="flex flex-col justify-between items-center py-5 my-5">
        <div className="flex justify-between px-10 mb-5">
          <label className="pe-5" htmlFor="postTitle">
            Post Title:
          </label>
          <input
            className="border rounded-md focus:border-blue-100"
            type="text"
            id="postTitle"
            name="postTitle"
            value={post.title}
            onChange={onTitleChanged}
          />
        </div>

        <div className="flex justify-between px-10">
          <label className="pe-5" htmlFor="postContent">
            Content:
          </label>
          <textarea
            className="border"
            name="postContent"
            id="postContent"
            value={post.content}
            onChange={onContentChanged}
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          className="border bg-blue-500 w-24 border-none shadow-lg rounded-md p-1 mt-5"
          type="button"
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
