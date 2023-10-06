import React from 'react'
import CartItem from './CartItem'

function CartProducts({ cartProducts }) {
    return cartProducts.map((cartProductItem) => (
        <CartItem key={cartProductItem.id} cartProductItem={cartProductItem} />
    ))
}

export default CartProducts