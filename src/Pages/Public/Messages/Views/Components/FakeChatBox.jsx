import React from "react";
import Loader from "../../../../Services/Loader";

function FakeChatBox(){
    return (
        <div className="chatbox">
            <div className="chatbox-nav">
                <div className="chatzone-nav-droite">
                    <img src="http://chatzone.cf/img/favicomatic/apple-icon-180x180.png" className="not-mobile pdp-33" alt="" />
                    <p>ChatZone</p>
                </div>
            </div>
            <div className="chatsection">
                <Loader />
            </div>
        </div>
    )
}

export default FakeChatBox;