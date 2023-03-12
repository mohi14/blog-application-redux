import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DetailedPost from '../Components/DetailedPost';
import RelatedPosts from '../Components/RelatedPosts';
import { fetchBlog } from '../features/blog/blogSlice';

const BlogDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { blog, isError, isLoading, error } = useSelector(state => state.blog)

    console.log(blog)

    useEffect(() => {
        dispatch(fetchBlog(id))
    }, [dispatch, id])

    let content = null
    if (isLoading) content = <div>Loading...</div>;

    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isLoading && !isError && !blog?.id) {
        content = <div className="col-span-12">No Blog found!</div>;
    }

    if (!isLoading && !isError && blog?.id) {
        content = (
            <>
                <DetailedPost blog={blog} />
                <RelatedPosts currentBlogId={blog?.id} tags={blog?.tags} />
            </>
        );
    }
    return (
        <>
            <div className="container mt-8">
                <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</Link>
            </div>
            <section className="post-page-container">
                {content}
            </section>
        </>
    );
};

export default BlogDetails;