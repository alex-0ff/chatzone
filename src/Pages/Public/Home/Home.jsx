import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import FalsePost from "./views/FalsePost";
import { createPostContext } from "./PostsContext";
import CreatePost from "./views/CreatePost";

function Home() {

    const [ writePost, setWritePost ] = useState(false);

    return (
        <div>
            <Navbar title="ChatZone - Home" />
            <div className="main">
                <section className="home">
                    <div className="create-post">
                        <createPostContext.Provider value={[ writePost, setWritePost ] }>
                            { writePost ? <CreatePost /> : <FalsePost /> }
                        </createPostContext.Provider>
                    </div>
                </section>  
            </div>
        </div>
    );
}

export default Home;