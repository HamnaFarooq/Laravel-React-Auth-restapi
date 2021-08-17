import React, { useState } from "react";
import axios from "axios";
import Nav from "./partials/Nav";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("api/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response, "login");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.data.user);
                window.location.replace("/dashboard");
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
    };
    return (
        <div>
            <Nav />
            <form
                className="col-md-6 mx-auto py-5"
                role="form"
                method="POST"
                onSubmit={(e) => handleSubmit(e)}
            >
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                    />
                    <div id="passwordError" className="text-danger my-3"></div>
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
};

export default Login;
