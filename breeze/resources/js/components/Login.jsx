import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "abc@yhoo.com",
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
                this.setState({ err: false });
                this.props.history.push("home");
            })
            .catch((error) => {
                this.refs.email.value = "";
                this.refs.password.value = "";
                this.setState({ err: true });
            });
    }

    render() {
        let error = this.state.err;
        let msg = !error ? "Login Successful" : "Wrong Credentials";
        let name = !error ? "alert alert-success" : "alert alert-danger";
        return (
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
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                >
                    Sign in
                </button>
            </form>
        );
    }
}

export default Login;
