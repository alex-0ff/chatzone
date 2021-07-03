import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../Style/style.css";

import Login from "./Login/Login";
import Register from "./Login/Register";
import Home from "./Public/Home/Home";
import Messages from "./Public/Messages/Messages";
import Settings from "./Public/Settings/Settings";
import Post from "./Public/Posts/Post";
import Profile from "./Public/Profile/Profile";
import Explore from "./Public/Explore";
import Notfound from "./Public/error/Notfound";

function App() {
    
    return (
        <section className="global-section">
            <div className="global-div">
                <div className="theme-blue">
                    <Router>
                        <Switch />
                            <Route exact path="/" component={Home} />
                            <Route path="/user/:nickname" exact component={Profile} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/settings/:section" component={Settings} />
                            <Route path="/messages/:id" component={Messages} />
                            <Route path="/post/:id" component={Post} />
                            <Route path="/explore/" component={Explore} />
                            <Route path="*" component={Notfound} />
                        <Switch />
                    </Router>
                </div>
            </div>
        </section>

    );
}

export default App;
