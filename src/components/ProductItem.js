import React from 'react'
import '../styles/ProductItem.css'
import { UserAuth } from '../context/AuthContext'

function ProductItem({ product, addToCart }) {
    const {user} = UserAuth()

    const handleAddToCart = () => {
        if (user) {
            addToCart(product)
        } else {
            alert('Connectez vous ou créez un compte pour pouvoir passer commande')
        }
    }

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
                    <button className='add-to-cart mt-3 w-100 ' onClick={handleAddToCart}>Ajouter</button>
                </div>
            </div>
        </>
    )
}

export default ProductItem