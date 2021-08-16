import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <Link to="/"> Email Marketing </Link>
                </a>
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
                            <a className="nav-link">
                                <Link to="/login"> Login </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/register"> Register </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
