import React from "react";

import PostBottom from "./Components/PostBottom";
import PostHeader from "./Components/PostHeader";

import bg from "../../../../Assets/Images/login_background.jpg";

function PostImage() {
    return (
        <div className="post-normal">
            <PostHeader />
            <div className="post-content-image">
                <p>J'aime les images c'est fou non ?</p>
                <div className="post-image" style={{ backgroundImage: `url(${bg})` }} />
            </div>
            <PostBottom />
        </div>
    );
}

export default PostImage;