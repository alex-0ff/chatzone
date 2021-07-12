import React from "react";

import pdp from "../../../../../Assets/test/rat.jpg";
import ChatInput from "./Chat/ChatInput";
import ChatMessage from "./Chat/ChatMessage";
import ChatNav from "./Chat/ChatNav";

function ChatBox({ id }){
    return (
        <div className="chatbox">
                <ChatNav />
            <div className="chatsection">
                <ChatMessage informations={pdp} />
                <ChatInput />
            </div>
        </div>
    )
}

export default ChatBox;