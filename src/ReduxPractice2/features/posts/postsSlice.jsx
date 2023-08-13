import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";


const initialState = {
  posts: [],
  status: "idle",
  error: null
}

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL)
  const data = response.data
  return data;
})

export const postPosts = createAsyncThunk("posts/postPosts", async (initialPost) => {
  const response = await axios.post(POST_URL, initialPost)
  const data = response.data
  return data;
})

export const updatePost = createAsyncThunk("posts/updatPost", async (initialPost) => {

  const { id } = initialPost

  let postId = Number(id)

  try {
    const response = await axios.put(`${POST_URL}/${postId}`, initialPost);
    const data = response.data;
    return data;
  } catch (error) {
    return initialPost
  }
})

export const deletePost = createAsyncThunk("/posts/deletePosts", async (initialPost) => {

  const { id } = initialPost

  let postId = Number(id)

  try {
    const response = await axios.delete(`${POST_URL}/${postId}`)
    if (response?.status === 200) return initialPost;
    return `${response?.status}: ${response?.statusText}`

  } catch (error) {
    return error.message;
  }
})

const postsSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {

    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },

      prepare(title, content, authorID) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            authorID,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          },
        };
      },
    },

    reactionButtonClicked(state, action) {

      const { postID, reaction } = action.payload;

      const post = state.posts.find(st => st.id === postID)

      if (post) {
        post.reactions[reaction]++;
      }
    },
  },


  extraReducers: (builder) => {

    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "Pending";
      })

      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "Succeed";

        let min = 1;
        const result = action.payload.map(post => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          }
          return post
        })

        state.posts = state.posts.concat(result);
      })

      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "Filed";
        state.error = action.error.message
      })

      .addCase(postPosts.fulfilled, (state, action) => {

        const sortedPosts = state.posts.sort((a, b) => {
          if (a.id > b.id) return 1
          if (a.id < b.id) return -1
          return 0
        })

        action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;

        action.payload.userId = Number(action.payload.userId)
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0
        }

        state.posts.push(action.payload)
      })

      .addCase(updatePost.fulfilled, (state, action) => {

        if (!action.payload?.id) {
          console.log("Updating process failed")
          return;
        }

        const { id } = action.payload;
        let numId = Number(id) // Changinh String id to real integer id
        action.payload.date = new Date().toISOString();
        const posts = state.posts.filter(post => post.id !== numId)
        state.posts = [...posts, action.payload]
      })

      .addCase(deletePost.fulfilled, (state, action) => {

        if (!action.payload?.id) {
          console.log("Deleting process failed")
          return;
        }

        const { id } = action.payload;
        action.payload.date = new Date().toISOString();
        const posts = state.posts.filter(post => post.id !== id)
        state.posts = posts

      })
  }
});

export const selectAllPost = (state) => state.posts.posts;
export const singlePost = (state, postId) => state.posts.posts.find(post => post.id === postId)
export const status = (state) => state.posts.status;
export const error = (state) => state.posts.error;

export const { postAdded, reactionButtonClicked } = postsSlice.actions;

export default postsSlice.reducer;

