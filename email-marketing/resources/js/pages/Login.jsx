import React, { Component } from "react";
import axios from "axios";
import Nav from "./partials/Nav";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault();

        axios
            .post("api/login", {
                email: this.state.email,
                password: this.state.password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.data.user);
                window.location.replace("http://127.0.0.1:8000/dashboard");
            })
            .catch((error) => {
                this.email = "";
                this.password = "";
                console.log(error);
                document.getElementById("error").innerHTML =
                    "Wrong Email or Password";
            });
        console.log(this.state);
    }

    render() {
        let error = this.state.err;
        let msg = !error ? "Login Successful" : "Wrong Credentials";
        let name = !error ? "alert alert-success" : "alert alert-danger";
        return (
            <div>
                <Nav />

                <form
                    className="col-md-6 mx-auto py-5"
                    role="form"
                    method="POST"
                    onSubmit={this.onSubmit.bind(this)}
                >
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <div id="error" className="text-danger my-3"></div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;
