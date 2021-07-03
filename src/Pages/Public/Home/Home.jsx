import React, { useState } from "react";
import { createPostContext } from "./PostsContext";

import Navbar from "../Components/Navbar";
import FalsePost from "./views/FalsePost";
import CreatePost from "./views/CreatePost";
import PostNormal from "../Posts/Views/PostNormal";
import PostImage from "../Posts/Views/PostImage";
import PostAudio from "../Posts/Views/PostAudio";

function Home() {

    const [ writePost, setWritePost ] = useState(false);

    return (
        <div>
            <Navbar title="ChatZone - Home" />
            <div className="main">
                <section className="home scroll">
                    <div className="create-post">
                        <createPostContext.Provider value={[ writePost, setWritePost ] }>
                            { writePost ? <CreatePost /> : <FalsePost /> }
                        </createPostContext.Provider>
                    </div>
                    <div className="display-post">
                        <PostNormal />
                        <PostImage />
                        <PostAudio />
                    </div>
                </section>  
            </div>
        </div>
    );
}

export default Home;