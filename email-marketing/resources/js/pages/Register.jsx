import React, { useState } from "react";
import axios from "axios";
import Nav from "./partials/Nav";
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("api/register", {
                email: email,
                name: name,
                password: password,
            })
            .then((response) => {
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
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        required
                        name="name"
                    />
                    <small id="nameError" className="text-danger my-3"></small>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        placeholder="Enter email"
                    />
                    <small id="emailError" className="text-danger my-3"></small>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
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
};
export default Register;
