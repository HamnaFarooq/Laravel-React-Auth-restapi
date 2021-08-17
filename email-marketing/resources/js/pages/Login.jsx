import React, { Component, useState } from "react";
import axios from "axios";
import Nav from "./partials/Nav";
// import React, { useState } from "react";

// function ExampLoginle() {
//     // Declare a new state variable, which we'll call "count"
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>Click me</button>
//         </div>
//     );
// }

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
                console.log(response, "login");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.data.user);
                window.location.replace("http://127.0.0.1:8000/dashboard");
            })
            .catch((error) => {
                document.getElementById("emailError").innerHTML = "";
                document.getElementById("passwordError").innerHTML = "";
                document.getElementById("errorMessage").innerHTML = "";
                if (error.response.data.hasOwnProperty("errors")) {
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
                        <div id="emailError" className="text-danger my-3"></div>
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
                        <div
                            id="passwordError"
                            className="text-danger my-3"
                        ></div>
                    </div>

                    <div id="errorMessage" className="text-danger my-3"></div>

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
