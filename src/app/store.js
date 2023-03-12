import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blogsReducer from "../features/blogs/blogsSlice"
import blogReducer from '../features/blog/blogSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';
import filterReducer from '../features/fillter/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    filter: filterReducer,
  },
});
