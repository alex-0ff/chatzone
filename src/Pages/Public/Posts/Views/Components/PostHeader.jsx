import React from "react";

import macron from "../../../../../Assets/test/emmanuel-macron-piege-par-un-selfie-il-n-a-pas-cache-son-agacement.jpg"

function PostHeader({ fields }){
    return (
        <div className="post-header">
            <div>
                <img className="pdp-33" src={macron} alt="" />
                <span>Emmanuel Macron</span>
            </div>
            <div>
                <span>02/07/2021 23:25</span>
            </div>
        </div>
    )
}

export default PostHeader;