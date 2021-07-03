import React, { useContext } from "react";
import { createPostContext } from "../PostsContext";

function FalsePost() {

    const [ writePost, setWritePost ] = useContext(createPostContext);

    return (
        <div onClick={() => setWritePost(!writePost)} className="false-post">
            <span>Créer un post :</span>
            <input placeholder="Commence ton histoire" disabled />
        </div>
    );
}

export default FalsePost;