import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../Style/style.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Settings from "./Settings";
import Messages from "./Messages";

function App() {
    return (
        <section className="global-section">
            <div className="global-div">
                <Router>
                    <Switch />
                        <Route path="/" exact component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/home" component={Home} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/messages" component={Messages} />
                    <Switch />
                </Router>
            </div>
        </section>

    );
}

export default App;
