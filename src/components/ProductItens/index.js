import React from 'react';

const ProductItens = ({ products }) => {
    return (
        <div className="col-md-4 col-sm-6 col-lg-3 mt-2">
            <div className="card shadow-lg col">
                <img src="https://via.placeholder.com/300x250?text=300x250+MPU" className="card-img-top mt-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{products.name}</h5>
                    <p className="card-text">{products.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItens;