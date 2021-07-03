import React from "react";
import { useParams } from "react-router";
import Navbar from "../Components/Navbar";

function Profile() {
    const { nickname } = useParams();
    const header = {
        title : `${nickname} - ChatZone`,
        description: `Look at the profile of ${nickname} !`
    };

    //let jwt = localStorage.getItem("jwt");
    let user_info = JSON.parse(localStorage.getItem("user_info"));

    return (
        <div>
            <Navbar title={header.title} description={header.description} />
            <div className="main">
                <section className="profile">
                    <div className="profile-section">
                        <div className="profile-header">
                            <div className="profile-picture">
                                <img className="pdp-100" src={user_info.avatar} alt="" /> 
                            </div>
                            <div className="profile-username">
                                <span>{user_info.nickname}</span>
                                <span>{user_info.username}</span>
                            </div>
                            <div className="profile-button">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M368 320c-25.52 0-47.99 12.18-62.64 30.79L156.1 276.6C158.8 269.1 160 263.2 160 256S158.8 242 156.1 235.4l148.4-74.19C320 179.8 342.5 192 368 192C412.2 192 448 156.2 448 112S412.2 32 368 32S288 67.82 288 112c0 7.17 1.246 13.99 3.016 20.6L142.6 206.8C127.1 188.2 105.5 176 80 176C35.82 176 0 211.8 0 256s35.82 80 80 80c25.52 0 47.99-12.18 62.64-30.79l148.4 74.19C289.2 386 288 392.8 288 400c0 44.18 35.82 80 80 80s80-35.82 80-80S412.2 320 368 320zM368 64C394.5 64 416 85.53 416 112S394.5 160 368 160S320 138.5 320 112S341.5 64 368 64zM80 304C53.53 304 32 282.5 32 256s21.53-48 48-48S128 229.5 128 256S106.5 304 80 304zM368 448c-26.47 0-48-21.53-48-48s21.53-48 48-48s48 21.53 48 48S394.5 448 368 448z"/>
                                    </svg>
                                </button>
                                <button>2</button>
                                <button>3</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;