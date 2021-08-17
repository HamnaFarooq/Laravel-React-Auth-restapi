import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

class AuthNav extends Component {
    logout() {
        localStorage.clear();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    Email Marketing
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <div className="navbar-brand">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.logout}
                                >
                                    Logout
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AuthNav;
