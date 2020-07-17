import React from 'react';

const ProductItens = ({ products }) => {
    return (
        <div class="col-md-4 col-sm-6 col-lg-3 mt-2">
            <div class="card shadow-lg col">
                <img src="https://via.placeholder.com/300x250?text=300x250+MPU" class="card-img-top mt-3" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{products.name}</h5>
                    <p class="card-text">{products.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItens;