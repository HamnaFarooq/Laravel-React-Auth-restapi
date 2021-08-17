import React, { Component } from "react";
import AuthNav from "./partials/AuthNav";

class Dashboard extends Component {
    render() {
        // console.log(localStorage.getItem("token"));
        if (!("user" in localStorage)) {
            window.location.replace("http://127.0.0.1:8000/login");
        }
        return (
            <div>
                <AuthNav />
                "This is Dashboard page"
            </div>
        );
    }
}

export default Dashboard;
