import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    state = {};
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
                            <Link className="navbar-brand" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
