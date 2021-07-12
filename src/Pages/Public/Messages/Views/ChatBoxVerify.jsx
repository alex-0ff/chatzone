import React from "react";

import ChatBox from "./Components/ChatBox";
import FakeChatBox from "./Components/FakeChatBox";

function ChatBoxVerify({ id }){
    return (
        <>
        {  
            id === "all" ? <FakeChatBox /> : <ChatBox id={id} />
        }
        </>
    )
}

export default ChatBoxVerify;