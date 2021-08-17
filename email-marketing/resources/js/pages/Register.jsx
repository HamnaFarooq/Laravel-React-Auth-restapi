import React, { Component } from "react";
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
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.data.user);
                window.location.replace("http://127.0.0.1:8000/dashboard");
            })
            .catch((error) => {
                this.email = "";
                this.password = "";
                document.getElementById("error").innerHTML =
                    "Email already or Password too short";
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
                    </div>

                    <div id="error" className="text-danger my-3"></div>

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
