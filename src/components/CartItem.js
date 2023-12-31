import React, { useState, useRef } from 'react'
import { UserAuth } from '../context/AuthContext'
// import { db } from '../config-firebase'
// import { doc, deleteDoc, updateDoc, getDocs  } from "firebase/firestore";


function CartItem({ cartProductItem, deleteItem, qttChange }) {
    const { user } = UserAuth()
    const [itemsState, setItemsState] = useState(cartProductItem)
    const deleteRef = useRef(null)
    // const ProductDomRef = useRef()

    const handleCartProduct = (e) => {
        if (user) {
            switch (e.target.id) {
                case 'delete': deleteItem(cartProductItem)
                    break
                case 'increase': qttChange(cartProductItem, 'increase')
                    break
                case 'decrease': qttChange(cartProductItem, 'decrease')
                    break
                default: console.log('Erreur de gestion du panier')
                    break
            }
            
            if (e.target.id === 'delete') {
                deleteRef.current.remove()
            }
            setItemsState({...cartProductItem})
        }
    }

    const { nom, imgUrl, id, prixTotalArticles, quantité } = itemsState
    return (
        <>
            <div className="d-flex justify-content-between align-items-center border-product" ref={deleteRef}>
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
                <div className="qte bg-secondary text-center">
                    <div id='decrease' onClick={handleCartProduct}>
                        <i name='decrease' className="fa-solid fa-minus mx-4" ></i>
                    </div>
                    <span className="fs-5">{quantité}</span>
                    <div id='increase' onClick={handleCartProduct}>
                        <i name='increase' className="fa-regular fa-plus mx-4"></i>
                    </div>
                </div>
                <div>
                    <i name='delete' className="fa-solid fa-2x fa-xmark" id='delete' onClick={handleCartProduct}></i>
                </div>
            </div>
        </>
    )
}

export default CartItem