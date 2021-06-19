import React from "react";
import Navbar from "../Components/Navbar";

import "../../../Style/error.css";

function Notfound() {

    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="not-found">
                <h1>Can't find this page</h1>
                <section class="error-container">
                    <span>4</span>
                    <span><span class="screen-reader-text">0</span></span>
                    <span>4</span>
                </section>
                </div>
            </div>
        </div>
    )
}

export default Notfound;