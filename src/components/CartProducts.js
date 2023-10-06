import React from 'react'
import CartItem from './CartItem'

function CartProducts({ cartProducts }) {
    console.log(cartProducts)
    return cartProducts.map((cartProductItem) => (
        <CartItem key={cartProducts.indexOf(cartProductItem)} cartProductItem={cartProductItem} />
    ))
}

export default CartProducts