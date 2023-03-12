import React from 'react';

const BlogsCard = ({ blog }) => {
    const { image, description, id, isSaved, likes, tags, title, createdAt } = blog
    return (
        <div className="lws-card">
            <a href="post.html">
                <img src={image} className="lws-card-image" alt="" />
            </a>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <a href="post.html" className="lws-postTitle"> {title} </a>
                <div className="lws-tags">{tags.map((tag, i) => <span>#{tag}{(i + 1 === tags.length) ? "" : ","}</span>)}</div>

                <div className="flex gap-2 mt-4">
                    <span className="lws-badge"> Saved </span>
                </div>

            </div>
        </div>
    );
};

export default BlogsCard;