import React from 'react'
import CartItem from './CartItem'

function CartProducts({cartProducts}) {
      cartProducts.map((cartProductItem) => {
   <CartItem key={cartProductItem.id} cartProductItem={cartProductItem}/>
  })
}

export default CartProducts