import React from 'react'

export const Card = () => {
    return (
        <div className="card bg-dark mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
            <img className="card-img-top" src="" alt="Cardimage" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='container w-100'>
                    <select className='m-2 h-100 bg-success rounded'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100 bg-success rounded'>
                        <option value='half'>Half</option>
                        <option value='full'>Full</option>
                    </select>
                    <div className='d-inline h-100 fs-5'>Total Price</div>
                </div>
                {/* <Link to="/" className="btn btn-primary">Go somewhere</Link> */}
            </div>
        </div>
    )
}