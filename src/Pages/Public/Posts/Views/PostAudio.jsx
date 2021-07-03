import React from "react";

import PostBottom from "./Components/PostBottom";
import PostHeader from "./Components/PostHeader";
import AudioPlayer from "./Components/Music/AudioPlayer";

import coin from "../../../../Assets/Music/COIN.mp3"

function PostAudio() {
    return (
        <div className="post-normal">
            <PostHeader />
            <div className="post-content-audio">
                <p>Ecoute ça mon gars, c'est le feu 🔥</p>
                <AudioPlayer tracks={{ audioSrc: coin }} audioSrc={coin} />
            </div>
            <PostBottom />
        </div>
    );
}

export default PostAudio;