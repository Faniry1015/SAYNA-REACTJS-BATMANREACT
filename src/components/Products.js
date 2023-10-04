import React from 'react'
import ProductItem from './ProductItem'
import '../styles/Products.css'

function Products({ products }) {
    return (
        <>
            {products.map(product => {
                return <div key={product.id} className="col-md-4">
                    <ProductItem  product={product} />
                </div>
            })}
        </>
    )
}

export default Products