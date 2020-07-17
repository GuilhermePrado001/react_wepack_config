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
        <div className="card mt-2 mb-3">
            <div className="card-body">
                <header>
                    <h5 className="text-center">Produtos que você pode encontrar no salão</h5>
                </header>
                <div className="row">
                    {products.map(p => {
                        return <ProductItens products={p} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductsList;