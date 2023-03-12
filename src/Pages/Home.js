import React from 'react';
import Blogs from '../Components/Blogs';
import Sidebar from '../Components/Sidebar';


const Home = () => {
    return (
        <section class="wrapper">
            <Sidebar />
            <Blogs />
        </section>
    )

};

export default Home;