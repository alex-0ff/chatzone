import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../Style/style.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Settings from "./Settings";

function App() {
    return (
        <Router>
                <Switch />
                    <Route path="/" exact component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/home" component={Home} />
                    <Route path="/settings" component={Settings} />
                <Switch />
        </Router>
    );
}

export default App;
