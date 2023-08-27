import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "bootstrap-icons-react";

export const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });

            const json = await response.json();
            //console.log(json);
            if (!json.success) {
                alert("Enter valid credentials");
            }
            if (json.success) {
                localStorage.setItem("userEmail",credentials.email);
                localStorage.setItem("authToken", json.authToken);
                //console.log(localStorage.getItem("authToken"));
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="container m-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="show-password-btn"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <EyeSlash size={24} /> : <Eye size={24} />}
                        </button>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                    <Link to="/createuser" className="m-3 btn btn-danger">
                        New user
                    </Link>
                </form>
            </div>
        </>
    );
};
