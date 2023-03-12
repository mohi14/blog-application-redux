import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../features/blogs/blogsSlice';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const dispatch = useDispatch()

    const { blogs, isError, isLoading, error } = useSelector(state => state.blogs)

    useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch])

    let content;

    if (isLoading) {
        content = <div>Loading....</div>
    }

    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }

    if (!isLoading && !isError && blogs?.length === 0) {
        content = <div className="col-span-12">No videos found!</div>
    }

    if (!isError && !isLoading && blogs?.length > 0) {
        content = blogs.map(blog => <BlogsCard key={blog.id} blog={blog}></BlogsCard>)
    }
    return (
        <main className="post-container" id="lws-postContainer">
            {content}
        </main>
    );
};

export default Blogs;