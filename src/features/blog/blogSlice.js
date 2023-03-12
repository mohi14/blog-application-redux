import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";



const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
    const response = await axios.get(`blogs/${id}`)
    return response.data
})

export const likeBlog = createAsyncThunk("blog/likeBlog", async ({ id, likes }) => {
    const res = await axios.patch(`blogs/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        likes: likes
    })

    return res.data.likes
})

export const savedBlog = createAsyncThunk("blog/savedBlog", async ({ id, isSaved }) => {
    const res = await axios.patch(`blogs/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        isSaved: isSaved
    })
    return res.data.isSaved
})


const blogSlice = createSlice({
    name: "blog",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.blog = {};
                state.isError = true;
                state.error = action.payload;
            })
            .addCase(likeBlog.fulfilled, (state, action) => {
                state.blog.likes = action.payload
            })
            .addCase(savedBlog.fulfilled, (state, action) => {
                state.blog.isSaved = action.payload
            })
    }
})

export default blogSlice.reducer