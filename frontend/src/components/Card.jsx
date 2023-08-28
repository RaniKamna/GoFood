import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export const Card = (props) => {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.data.options[0];
    let priceOptions = Object.keys(options);
    let foodItem = props.data;

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const handleAddToCart = async () => {
        let food = [];
        for (const item of data) {
            if (item.id === foodItem._id) {
                food = item;

                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({
                    type: "UPDATE",
                    id: foodItem._id,
                    price: finalPrice,
                    qty: qty,
                });
                return;
            } else if (food.size !== size) {
                await dispatch({
                    type: "ADD",
                    id: foodItem._id,
                    name: foodItem.name,
                    price: finalPrice,
                    qty: qty,
                    size: size,
                    img: foodItem.img,
                });
                return;
                //console.log(data);
            }
            return;
        }
        await dispatch({
            type: "ADD",
            id: foodItem._id,
            name: foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size,
            img: foodItem.img,
        });
    };
    let finalPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value);
        //console.log(data);
    }, []);

    return (
        <div
            className="card bg-dark mt-3"
            style={{ width: "17rem", maxHeight: "360px" }}
        >
            <img className="card-img-top" src={foodItem.img} alt="cardimg" />
            <div className="card-body">
                <h5 className="card-title">{foodItem.name}</h5>
                <div className="container w-100">
                    <select
                        className="m-2 h-100 bg-success rounded"
                        onChange={(e) => setQty(e.target.value)}
                    >
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            );
                        })}
                    </select>
                    <select
                        className="m-2 h-100 bg-success rounded"
                        ref={priceRef}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        {priceOptions.map((data, index) => {
                            if (data !== "_id")
                                return (
                                    <option key={index} value={data}>
                                        {data}
                                    </option>
                                );
                        })}
                    </select>
                    <div className="d-inline h-100 fs-5">Rs{finalPrice}/-</div>
                </div>
                <hr />
                <button
                    className="btn btn-success justify-center ms-2"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};
