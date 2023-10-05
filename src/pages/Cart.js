import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cart.css'
import { collection, getDocs } from "firebase/firestore";
import { UserAuth } from '../context/AuthContext';
import { db } from '../config-firebase';
import CartProducts from '../components/CartProducts';

function Cart() {
  const [cartProducts, setCartProducts] = useState([])

  const { user } = UserAuth()

  const cartItems = async function () {

    const queryCartItems = await getDocs(collection(db, `Cart-${user.uid}`));
    queryCartItems.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // setCartProducts(cartProducts.push(doc.data()))
    });
    console.log(cartProducts)
  }

  useEffect(function () {
    cartItems()
  }, [])


  return (<>
    <div className="container container-largeur">
      <div className="row">
        <div className="d-flex justify-content-between">
          <nav>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/eshop" >eshop</Link></li>
              <li className="breadcremb-item active"><Link to='/eshop/cart'>
                Panier
              </Link>
              </li>
            </ul>
          </nav>
          <div className="cart"><Link to='/eshop/cart'></Link>
            <i className="fa-solid fa-2x fa-cart-plus"></i>
          </div>
        </div>
      </div>
      <div className="recap">
        <p>Récapitulatif du panier</p>
      </div>
      <div className="product-box">
        <CartProducts cartProducts={cartProducts}/>
      </div>

      <div className="sous-total container-largeur">
        <h4 className="float-end">
          {/* <strong>Sous Total : 233</strong> */}
        </h4>
      </div>
    </div>
    <section className="container container-largeur d-flex mx-auto my-5">
      <Link to='/eshop'>
        <button className="mx-2">Continuer mes achats</button>
      </Link>
      <Link to='/eshop/cart'>
        <button className="mx-2">
          Passer commande
        </button>
      </Link>
    </section>
    <br />
    <br />
    <h1 className="text-center">Ton panier est vide</h1>
    <div className="container-largeur">
      <Link to='/eshop'>
        <button>Faire des Achats</button>
      </Link>
    </div>
  </>
  )
}

export default Cart