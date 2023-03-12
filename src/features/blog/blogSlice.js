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
    }
})

export default blogSlice.reducer