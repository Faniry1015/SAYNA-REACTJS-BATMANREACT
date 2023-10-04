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
                <button className='btnContain__btn'>Ajouter</button>
            </div>
        </>
    )
}

export default ProductItem