import React from "react";
import { useParams } from "react-router";
import Navbar from "./Components/Navbar";

function Profile() {
    const { nickname } = useParams();
    const header = {
        title : `${nickname} - ChatZone`,
        description: `Look at the profile of ${nickname} !`
    };

    return (
        <div>
            <Navbar title={header.title} description={header.description} />
            <div className="main"></div>
        </div>
    );
}

export default Profile;