import React from "react";

import pdp from "../../../../Assets/test/rat.jpg";

function ChatBox({ id }){
    return (
        <div className="chatbox">
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
            <div className="chatsection">
                <div className="chatmessages">
                    <div className="chat-user chat-me">                                        
                        <div className="date-username">
                            <div className="informations">
                                <img className="pdp-33" src={pdp} alt="pdp" />
                                <span className="name">Les fesses de Jean Marie Bigard</span>
                            </div>
                            <span className="time">21:04</span>
                        </div>
                        <span className="preview">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span>
                    </div>
                </div>
                <div className="input">
                    <button className="fa-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentcolor" d="M608 0H160c-17.67 0-32 13.13-32 29.33V128h128V32h256v288h-32v32h128c17.67 0 32-13.13 32-29.33V29.33C640 13.13 625.67 0 608 0zM224 96h-64V32h64zm384 224h-64v-64h64zm0-96h-64v-96h64zm0-128h-64V32h64zm-192 64H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zm0 320H32v-24l81.69-61.26 80 40 126.84-95.14L416 403.23zm0-115.23l-96.53-64.36-129.16 96.86-80-40L32 416V192h384zM112 320a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm0-64a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"/>
                        </svg>
                    </button>
                    <button className="fa-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fill="currentcolor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm152.7 400.7c-19.8 19.8-43 35.4-68.7 46.3-26.6 11.3-54.9 17-84.1 17s-57.5-5.7-84.1-17c-25.7-10.9-48.8-26.5-68.7-46.3-19.8-19.8-35.4-43-46.3-68.7-11.3-26.6-17-54.9-17-84.1s5.7-57.5 17-84.1c10.9-25.7 26.5-48.8 46.3-68.7 19.8-19.8 43-35.4 68.7-46.3 26.6-11.3 54.9-17 84.1-17s57.5 5.7 84.1 17c25.7 10.9 48.8 26.5 68.7 46.3 19.8 19.8 35.4 43 46.3 68.7 11.3 26.6 17 54.9 17 84.1s-5.7 57.5-17 84.1c-10.8 25.8-26.4 48.9-46.3 68.7zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-60c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1zm10.2 145.8C315.8 352.6 282.9 368 248 368s-67.8-15.4-90.2-42.2c-13.5-16.2-38.2 4.2-24.6 20.5C161.7 380.4 203.5 400 248 400s86.3-19.6 114.8-53.8c13.5-16.2-11.1-36.7-24.6-20.4z"/>
                        </svg>
                    </button>
                    <textarea placeholder="Type your message here!" type="text" />
                    <button className="fa-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentcolor" d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;