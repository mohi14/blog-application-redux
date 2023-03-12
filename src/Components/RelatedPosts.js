import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../features/relatedBlogs/relatedBlogsSlice';
import RelatedPostCard from './RelatedPostCard';

const RelatedPosts = ({ currentBlogId, tags }) => {
    const dispatch = useDispatch()
    const { relatedBlogs, isLoading, isError, error } = useSelector(state => state.relatedBlogs)
    console.log(relatedBlogs, "bollgss")

    useEffect(() => {
        dispatch(fetchRelatedBlogs({ tags: tags, id: currentBlogId, }))
    }, [dispatch, currentBlogId, tags])

    let content = null;

    if (isLoading) content = <div>Loading</div>;
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }
    if (!isLoading && !isError && relatedBlogs?.length === 0) {
        content = <div className="col-span-12">No related videos found!</div>;
    }
    if (!isLoading && !isError && relatedBlogs?.length > 0) {
        content = relatedBlogs.map((blog) => (
            <RelatedPostCard key={blog.id} blog={blog} />
        ));
    }
    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {content}
            </div>
        </aside>
    );
};

export default RelatedPosts;