import React from "react";
import Navbar from "../Components/Navbar";

import Users from "./Views/Users";
import ChatBox from "./Views/ChatBoxVerify";
import { useParams } from "react-router";

function Messages() {
    const { id } = useParams();

    return (
        <div>
            <Navbar title="ChatZone - Messages"></Navbar>
            <div className="main">
                <section className="messages">
                    <div className="all-chat mobile">
                        { id === "all" ? <Users /> : <ChatBox id={id} />}
                    </div>
                    <div className="all-chat web">
                        <Users />
                        <ChatBox id={id} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Messages;