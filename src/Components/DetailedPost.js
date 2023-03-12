import React from 'react';
import { useDispatch } from 'react-redux';
import { likeBlog, savedBlog } from '../features/blog/blogSlice';

const DetailedPost = ({ blog }) => {
    const { id, description, image, isSaved, likes, tags, title, createdAt } = blog
    const dispatch = useDispatch()
    const handleLikes = (likes) => {
        // const data = { likes: likes }
        dispatch(likeBlog({ id, likes }))
    }

    const handleSaved = (isSaved) => {
        dispatch(savedBlog({ id, isSaved }))
    }
    return (
        <main className="post">
            <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    {tags.map((tag, i) => <span>#{tag}{(i + 1 === tags.length) ? "" : ", "}</span>)}
                </div>
                <div className="btn-group">
                    {/* <!-- handle like on button click --> */}
                    <button className="like-btn" id="lws-singleLinks" onClick={() => handleLikes(likes + 1)}>
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>
                    {/* <!-- handle save on button click --> */}
                    {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
                    <button className={`${isSaved && "active"} save-btn`} id="lws-singleSavedBtn" onClick={() => handleSaved(!isSaved)}>
                        {isSaved ? <> <i className="fa-regular fa-bookmark"></i> Saved</> : <><i className="fa-regular fa-bookmark"></i> Save</>}
                    </button>
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default DetailedPost;