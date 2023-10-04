import React from 'react'
import '../styles/ProductItem.css'

function ProductItem({ product }) {
    const { nom, imgUrl, description, categorie, prix } = product;
    return (
        <>
            <div className="product m-2 text-center">
                <div className="wrapper">
                    <div className="product-img">
                        <img src={imgUrl} alt={nom} />
                    </div>
                    <div className="product title text-uppercase fs-4">{nom}</div>
                    <div className="product-price">
                        <span>{prix} $</span><span><del>{prix - 5}</del></span>
                    </div>
                </div>
                <div className=''>
                <button className='btnContain__btn add-to-cart mt-3 w-100 '>Ajouter</button>
                </div>
            </div>
        </>
    )
}

export default ProductItem