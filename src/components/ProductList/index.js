import React, { useState, useEffect } from 'react';
import { Products } from '../../services/Mock/Products'
import ProductItens from '../ProductItens/index'

const ProductsList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { items } = await Products.getProducts();
            setProducts(items);
        }

        fetchData().then(() => console.log(products));
    }, [products]);

    return (
        <div class="row" >
            {products.map(p => {
                return <ProductItens products={p} />
            })}
        </div>
    )
}

export default ProductsList;