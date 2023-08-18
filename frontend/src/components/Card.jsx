import React from "react";

export const Card = (props) => {
    let options = props.data.options[0];
    let priceOptions = Object.keys(options);
    return (
        <div
            className="card bg-dark mt-3"
            style={{ width: "16rem", maxHeight: "360px" }}
        >
            <img className="card-img-top" src={props.data.img} alt="cardimg" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <div className="container w-100">
                    <select className="m-2 h-100 bg-success rounded">
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            );
                        })}
                    </select>
                    <select className="m-2 h-100 bg-success rounded">
                        {priceOptions.map((data) => {
                            return (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            );
                        })}
                    </select>
                    <div className="d-inline h-100 fs-5">Total Price</div>
                </div>
            </div>
        </div>
    );
};
