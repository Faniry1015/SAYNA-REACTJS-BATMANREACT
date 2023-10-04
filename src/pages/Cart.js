import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return ( <>
    <div className="container container-largeur">
      <div className="row">
        <div className="d-flex justify-content-between">
          <nav>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="">eshop</a></li>
              <li className="breadcremb-item active">
                Panier
              </li>
            </ul>
          </nav>
          <div className="cart">
            <i className="fa-solid fa-2x fa-cart-plus"></i>
          </div>
        </div>
      </div>
      <div className="recap">
        <p>Récapitulatif du panier</p>
      </div>
      <div className="d-flex justify-content-between align-items-center border-product">
        <div className="product d-flex align-items-center">
          <img style={{width:'30%'}} src="" alt="" />
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
      <div className="so-total container-largeur">
        <h4 className="float-end">
          <strong>Sous Total : 233</strong>
        </h4>
      </div>
    </div>
    <section className="container container-largeur d-flex mx-auto my-5">
      <Link to='/eshop'>
      <button className="mx-2">Continuer mes achats</button>
      </Link>
      <Link to='/commande'>
        <button className="mx-2">
          Passer commande
        </button>
      </Link>
    </section>
    <br/>
    <br/>
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