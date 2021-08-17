import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function App() {
    return (
        <Router>
            <React.Fragment>
                <PublicRoute
                    restricted={false}
                    component={Home}
                    path="/"
                    exact
                />
                <PublicRoute
                    restricted={true}
                    component={Login}
                    path="/Login"
                    exact
                />
                <PublicRoute
                    restricted={true}
                    component={Register}
                    path="/Register"
                    exact
                />
                <PrivateRoute component={Dashboard} path="/dashboard" exact />

                {/* <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/Dashboard" component={Dashboard} /> */}
            </React.Fragment>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
