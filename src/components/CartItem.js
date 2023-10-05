import React from 'react'

function CartItem({CartProductItem}) {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center border-product">
                <div className="product d-flex align-items-center">
                    <img style={{ width: '30%' }} src="" alt="" />
                    <div className="m-4">
                        <h5>Nom du Produit</h5>
                        <span>Numéro du produit xxxx</span>
                    </div>
                </div>
                <div className='price'>
                    <p>36$</p>
                </div>
                <div className="qte bg-secondary">
                    <i className="fa-solid fa-minus mx-4"></i><span className="fs-4">1</span>
                    <i className="fa-regular fa-2x fa-plus mx-4"></i>
                </div>
                <div className="delete">
                    <i className="fa-solid fa-2x fa-xmark"></i>
                </div>
            </div>
        </>
    )
}

export default CartItem