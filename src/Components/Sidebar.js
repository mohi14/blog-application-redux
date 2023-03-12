import React from 'react';
import { useDispatch } from 'react-redux';
import { blogFiltered, blogSorted } from '../features/fillter/filterSlice';

const Sidebar = () => {
    const dispatch = useDispatch()


    const handleChange = (e) => {
        dispatch(blogSorted(e.target.value))
    }

    const handleClick = (isSaved) => {
        dispatch(blogFiltered(isSaved))
    }



    return (
        <aside>
            <div className="sidebar-items">
                <div className="sidebar-content">
                    <h4>Sort</h4>
                    <select name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500" onChange={handleChange}>
                        <option value="">Default</option>
                        <option value="createdAt">Newest</option>
                        <option value="likes">Most Liked</option>
                    </select>
                </div>
                <div className="sidebar-content">
                    <h4>Filter</h4>
                    <div className="radio-group">

                        <div>
                            <input type="radio" name="filter" id="lws-all" defaultChecked className="radio" onClick={() => handleClick(false)} />
                            <label htmlFor="lws-all">All</label>
                        </div>
                        <div>
                            <input type="radio" name="filter" id="lws-saved" className="radio" onClick={() => handleClick(true)} />
                            <label htmlFor="lws-saved">Saved</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside >
    );
};

export default Sidebar;