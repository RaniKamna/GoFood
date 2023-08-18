import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        GoFood
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-4 mt-2" to="/">
                                    Home
                                </Link>
                            </li>
                            {localStorage.getItem("authToken") ? (
                                <li className="nav-item">
                                    <Link className="nav-link active fs-4 mt-2" to="/">
                                        My Orders
                                    </Link>
                                </li>
                            ) : (
                                ""
                            )}
                        </ul>
                        {!localStorage.getItem("authToken") ? (
                            <div className="d-flex">
                                <Link className="btn bg-white text-success mx-1" to="/login">
                                    Login
                                </Link>
                                <Link
                                    className="btn bg-white text-success mx-1"
                                    to="/createuser"
                                >
                                    Signup
                                </Link>
                            </div>
                        ) : (
                            <div className="btn bg-white text-success mx-1">Logout</div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};
