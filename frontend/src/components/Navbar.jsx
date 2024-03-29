import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Badge from "react-bootstrap/Badge";
import { Modal } from "../Modal";
import { Cart } from "./screens/Cart";
import { useCart } from "./ContextReducer";

export const Navbar = () => {
    let data = useCart();
    const [cartView, setCartView] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    };

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
                                <Link className="nav-link active fs-4 mt-3" to="/">
                                    Home
                                </Link>
                            </li>
                            {localStorage.getItem("authToken") ? (
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5 mt-3" to="/">
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
                            <>
                                <div className="btn bg-white text-success mx-2" onClick={() => { setCartView(true) }}>
                                    My Cart{" "}
                                    {data.length !== 0 ? <Badge pill bg="danger">
                                        {data.length}
                                    </Badge> : null}
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
                                <div
                                    className="btn bg-white text-danger mx-2"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};
