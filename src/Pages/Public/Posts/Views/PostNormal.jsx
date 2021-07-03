import React from "react";

import PostBottom from "./Components/PostBottom";
import PostHeader from "./Components/PostHeader";

function PostNormal() {
    return (
        <div className="post-normal">
            <PostHeader />
            <div className="post-content-normal">
                <p>Les fesses de Jean marie Bigard, on ne les oublies pas !</p>
            </div>
            <PostBottom />
        </div>
    );
}

export default PostNormal;