import React from 'react';
import { Link } from 'react-router-dom';
import DetailedPost from '../Components/DetailedPost';
import RelatedPosts from '../Components/RelatedPosts';

const BlogDetails = () => {
    return (
        <>
            <div className="container mt-8">
                <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</Link>
            </div>
            <section className="post-page-container">
                <DetailedPost />
                <RelatedPosts />
            </section>
        </>
    );
};

export default BlogDetails;