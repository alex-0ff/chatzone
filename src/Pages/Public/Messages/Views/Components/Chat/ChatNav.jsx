import React from "react";

import pdp from "../../../../../../Assets/test/rat.jpg";

function ChatNav() {
    return (
        <div className="chatbox-nav">
            <div className="chatzone-nav-droite">
                <img src={pdp} className="not-mobile pdp-33" alt="" />
                <p>Les fesses de Jean Marie Bigard</p>
            </div>
            <div className="chatzone-nav-gauche">
                <span>
                    <svg className="fa-secondary " fill="currentColor" height="22" width="22" viewBox="0 0 48 48">
                        <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z" />
                        <circle clip-rule="evenodd" cx="24" cy="14.8" fill-rule="evenodd" r="2.6" />
                        <path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
                        <path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default ChatNav;