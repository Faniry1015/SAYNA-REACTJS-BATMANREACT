import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cart.css'
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { UserAuth } from '../context/AuthContext';
import { db } from '../config-firebase';
import CartProducts from '../components/CartProducts';

function Cart() {
  const [cartProducts, setCartProducts] = useState([])

  const { user } = UserAuth()

  //Récupérer tous le panier depuis firebase

  const getAllCartProduct = async function () {
    if (user) {
      const productsCartArray = []
      const querySnapShot = await getDocs(collection(db, `Cart-${user.uid}`));
      querySnapShot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        productsCartArray.push({ id: doc.id, ...doc.data() })
        setCartProducts(productsCartArray)
      })
    } else {
      alert('Connectez vous à un compte pour pouvoir faire des achats')
    }
    console.log("render")
  }

  const deleteItem = async function (product) {
    await deleteDoc(doc(db, `Cart-${user.uid}`, product.nom))
    console.log('Item deleted')
    // ProductDomRef.current.remove()
}

  const qttChange = async function (product, change) {
    const product_cart = product
    console.log('Item qtt increased')
    if (change === 'increase') {
        ++product_cart.quantité
    } else {
        if (product_cart.quantité > 1) {
            --product_cart.quantité
        }
    }
    product_cart.prixTotalArticles = product_cart.quantité *  product_cart.prix

    // setItemsState({quantité: product_cart.quantité, prixTotalArticles: product_cart.prixTotalArticles, ...product_cart})

    try {
        const cartProductRef = doc(db, `Cart-${user.uid}`, product.nom)
        await updateDoc(cartProductRef, {
            quantité: product_cart.quantité,
            prixTotalArticles: product_cart.prixTotalArticles    
        });
    } catch(e) {
        alert('Impossible de mettre à jour les articles du panier:', e.message)
    }
}

useEffect(function () {
  getAllCartProduct()
  // eslint-disable-next-line
}, [user])
  

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
        <CartProducts cartProducts={cartProducts} deleteItem={deleteItem} qttChange={qttChange}/>
      </div>

      <div className="sous-total container-largeur">
        <h4 className="float-end">
          <strong>Sous Total : 233</strong>
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
    {cartProducts.length <= 0 && <>
      <br />
      <br />
      <h1 className="text-center">Ton panier est vide</h1>
      <div className="container-largeur">
        <Link to='/eshop'>
          <button>Faire des Achats</button>
        </Link>
      </div>
    </>}
  </>
  )
}

export default Cart