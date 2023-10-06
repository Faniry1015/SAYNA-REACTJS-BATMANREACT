import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
// import { db } from '../config-firebase'
// import { doc, deleteDoc, updateDoc, getDocs  } from "firebase/firestore";


function CartItem({ cartProductItem, deleteItem, qttChange }) {
    const { user } = UserAuth()
    const [itemsState, setItemsState] = useState(cartProductItem)
    // const ProductDomRef = useRef()

    function handleCartProduct(e) {
        if (user) {
            switch (e.target.name) {
                case 'delete': deleteItem(cartProductItem)
                break
                case 'increase': qttChange(cartProductItem, 'increase')
                break
                case 'decrease': qttChange(cartProductItem, 'decrease')
                break   
            }
            setItemsState(cartProductItem)
            console.log('itemsState',cartProductItem)
        }

    }

    const {nom, imgUrl, id, prixTotalArticles, quantité} = itemsState
    return (
        <>
            <div className="d-flex justify-content-between align-items-center border-product">
                <div className="product d-flex align-items-center">
                    <img style={{ width: '30%' }} src={imgUrl} alt={nom} />
                    <div className="m-4">
                        <h5>{nom}</h5>
                        <span>Numéro du produit {id}</span>
                    </div>
                </div>
                <div className='price'>
                    <p>{prixTotalArticles}$</p>
                </div>
                <div className="qte bg-secondary">
                    <button name='decrease' onClick={handleCartProduct}>
                        <i className="fa-solid fa-minus mx-4"></i>
                    </button>
                    <span  className="fs-5">{quantité}</span>
                    <button name='increase' onClick={handleCartProduct}>
                        <i className="fa-regular fa-plus mx-4"></i>
                    </button>
                </div>
                <button name='delete' className="delete" onClick={handleCartProduct}>
                    <i className="fa-solid fa-2x fa-xmark"></i>
                </button>
            </div>
        </>
    )
}

export default CartItem