import React, { Component, useState } from "react";
import Nav from "./partials/Nav";

class Home extends Component {
    state = {};
    render() {
        return (
            <div>
                <Nav />
                <h1>This is Home page</h1>
            </div>
        );
    }
}

export default Home;
