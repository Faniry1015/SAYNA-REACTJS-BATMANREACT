import React from 'react'
import ProductItem from './ProductItem'
import '../styles/Products.css'

function Products({ products, addToCart }) {
    return (
        <>
            {products.map(product => {
                return <div key={product.id} className="col-md-4">
                    <ProductItem  product={product} addToCart={addToCart} />
                </div>
            })}
        </>
    )
}

export default Products