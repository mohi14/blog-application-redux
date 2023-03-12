import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPostCard = ({ blog }) => {
    const { id, description, image, isSaved, likes, tags, title, createdAt } = blog
    return (
        <div className="card">
            <Link to={`/blogs/${id}`}>
                <img src={image} className="card-image" alt="" />
            </Link>
            <div className="p-4">
                <Link to={`/blogs/${id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </Link>
                <div className="mb-0 tags">
                    {tags.map((tag, i) => <span>#{tag}{(i + 1 === tags.length) ? "" : ", "}</span>)}
                </div>
                <p>{createdAt}</p>
            </div>
        </div>
    );
};

export default RelatedPostCard;