import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

class App extends Component {
    state = {};
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Nav />
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Dashboard" component={Dashboard} />
                </React.Fragment>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
