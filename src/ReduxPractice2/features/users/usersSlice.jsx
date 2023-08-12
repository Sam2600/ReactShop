import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async() => {
    const response = await axios.get(USERS_URL)
    const data = response.data;
    return data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload // This means state is fully replaced with the fetched Data
            // we can also push array but above way is safe and better
        })
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer