import React from "react";
import Navbar from "./Navbar";
//import { Link } from "react-router-dom";

import pdp from "../assets/test/rat.jpg";

const display_chat = (e) => {
    e.preventDefault();

    const section = "contact-section";

    document.getElementById(`${section}`).classList.contains("visible") ? document.getElementById(`${section}`).classList.remove("visible") : document.getElementById(`${section}`).classList.add("visible");
}

function Messages() {
    return (
        <div className="theme-main">
            <Navbar />
            <div className="main">
                <section className="messages">
                    <div className="all-chat">
                        <nav>
                            <div className="chat-nav-top">
                                <span onClick={display_chat}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 20" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg></span>
                                <span>Contacts</span>
                            </div>
                            <div id="contact-section" className="contact visible">
                                <div className="contact-info">
                                    <img className="pdp-33" src={pdp} alt="pdp" />
                                    <span>Emmanuel Macron</span>
                                </div>
                                <div className="contact-info">
                                    <img className="pdp-33" src={pdp} alt="pdp"/>
                                    <span>Brigitte Macron</span>
                                </div>
                            </div>
                        </nav>
                        <div className="chatbox">
                            <div className="chatbox-nav">
                                <div className="chatzone-nav-droite">
                                    <span>Nom</span>
                                </div>
                                <div className="chatzone-nav-gauche">
                                    <span>Share</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Messages;