import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./partials/Nav";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault();

        axios
            .post("api/register", {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
            })
            .then((response) => {
                console.log(response.data, "register");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.data.user);
                window.location.replace("/dashboard");
            })
            .catch((error) => {
                document.getElementById("nameError").innerHTML = "";
                document.getElementById("emailError").innerHTML = "";
                document.getElementById("passwordError").innerHTML = "";
                document.getElementById("errorMessage").innerHTML = "";
                if (error.response.data.hasOwnProperty("errors")) {
                    if (error.response.data.errors.hasOwnProperty("name")) {
                        document.getElementById("nameError").innerHTML =
                            error.response.data.errors.name;
                    }
                    if (error.response.data.errors.hasOwnProperty("email")) {
                        document.getElementById("emailError").innerHTML =
                            error.response.data.errors.email;
                    }
                    if (error.response.data.errors.hasOwnProperty("password")) {
                        document.getElementById("passwordError").innerHTML =
                            error.response.data.errors.password;
                    }
                }
                if (error.response.data.message) {
                    document.getElementById("errorMessage").innerHTML =
                        error.response.data.message;
                }
            });
    }
    render() {
        return (
            <div>
                <Nav />
                <form
                    className="col-md-6 mx-auto py-5"
                    role="form"
                    method="POST"
                    onSubmit={this.onSubmit.bind(this)}
                >
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            required
                            name="name"
                        />
                        <small
                            id="nameError"
                            className="text-danger my-3"
                        ></small>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            className="form-control"
                            required
                            placeholder="Enter email"
                        />
                        <small
                            id="emailError"
                            className="text-danger my-3"
                        ></small>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            className="form-control"
                            required
                            placeholder="Enter password"
                        />
                        <small
                            id="passwordError"
                            className="text-danger my-3"
                        ></small>
                    </div>

                    <div id="errorMessage" className="text-danger my-3"></div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                    >
                        Register
                    </button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login"> Log in? </Link>
                    </p>
                </form>
            </div>
        );
    }
}

export default Register;
