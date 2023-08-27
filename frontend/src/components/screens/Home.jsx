import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Card } from "../Card";

export const Home = () => {
    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            //console.log(process.env.REACT_APP_API_URL);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/getfooddata`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const response1 = await fetch(
                `${process.env.REACT_APP_API_URL}/api/getfoodcategory`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                console.error("Network response was not ok. Status:", response.status);
                const responseText = await response.text();
                const responseText1 = await response1.text();
                return;
            }

            const responseData = await response.json();
            const responseData1 = await response1.json();

            setFoodCat(responseData1.data);
            setFoodItem(responseData.data);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div>
                {" "}
                <Navbar />{" "}
            </div>
            <div>
                <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade contain"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner" id="carousel">
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img
                                src="https://source.unsplash.com/random/1260x400/?burger"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://source.unsplash.com/random/1260x400/?pastry"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://source.unsplash.com/random/1260x400/?noodles"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {foodCat !== []
                    ? foodCat.map((data) => {
                        return (
                            <div className="row mb-3" key={data._id}>
                                <div key={data._id} className="fs-3 m-3">
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem !== [] ? (
                                    foodItem
                                        .filter(
                                            (item) =>
                                                item.CategoryName === data.CategoryName &&
                                                item.name
                                                    .toLowerCase()
                                                    .includes(search.toLocaleLowerCase())
                                        )
                                        .map((filteredItems) => {
                                            return (
                                                <div
                                                    key={filteredItems._id}
                                                    className="col-12 col-md-6 col-lg-3"
                                                >
                                                    <Card data={filteredItems} />
                                                </div>
                                            );
                                        })
                                ) : (
                                    <div>No such Data Found</div>
                                )}
                            </div>
                        );
                    })
                    : ""}
            </div>
            <div>
                {" "}
                <Footer />{" "}
            </div>
        </div>
    );
};
