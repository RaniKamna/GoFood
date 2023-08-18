import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash } from "bootstrap-icons-react";

export const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        location: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.location,
                }),
            });

            const json = await response.json();
            if (!json.success) {
                alert("Enter valid credentials");
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
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={credentials.name}
                            onChange={handleChange}
                        />
                    </div>
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
                            {showPassword ? (
                                <EyeSlash size={24} />
                            ) : (
                                <Eye size={24} />
                            )}
                        </button>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputLocation" className="form-label">
                            Location
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputLocation"
                            name="location"
                            value={credentials.location}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                    <Link to="/login" className="m-3 btn btn-danger">
                        Already a user
                    </Link>
                </form>
            </div>
        </>
    );
};
