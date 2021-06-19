import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <div>
            <Navbar title="ChatZone - Home" />
            <div className="main">
                <section className="home">
                    <div className="create-post-button">
                        <button>Click</button>
                    </div>
                </section>  
            </div>
        </div>
    );
}

export default Home;