/**
 * Need to check the postPosts's builder.addCase.fulfilled => because action.payload is underfined
 */

import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";


const initialState = {
  posts: [],
  status: "idle", // idle -> loading -> success -> failed
  error: null
}

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL)
  const data = response.data
  return data;
})

export const postPosts = createAsyncThunk("posts/postPosts", async (initialPost) => {
  const response = axios.post(POST_URL, initialPost)
  const data = response.data;
  return data;
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
        const payload = action.meta.arg;
        
        payload.userId = Number(payload.userId);
        payload.date = new Date().toISOString();
        payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0
        }
        state.posts.push(payload)
      })
  }
});

export const selectAllPost = (state) => state.posts.posts;
export const singlePost = (state, postId) => state.posts.posts.find(post => post.id === postId)
export const status = (state) => state.posts.status;
export const error = (state) => state.posts.error;

export const { postAdded, reactionButtonClicked } = postsSlice.actions;

export default postsSlice.reducer;
