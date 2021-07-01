import React, { useContext } from "react";
import { createPostContext } from "../PostsContext";

function FalsePost() {

    // eslint-disable-next-line
    const [ writePost, setWritePost ] = useContext(createPostContext);

    return (
        <div onClick={() => setWritePost(true)} className="false-post">
            <span>Créer un post :</span>
            <input placeholder="Commence ton histoire" disabled />
        </div>
    );
}

export default FalsePost;