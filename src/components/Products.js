import React from 'react'
import ProductItem from './ProductItem'
import '../styles/Products.css'

function Products({ products }) {
    return (
        <>
            {products.map(product => {
                return <div className="col-md-4">
                    <ProductItem key={product.id} product={product} />
                </div>
            })}
        </>
    )
}

export default Products