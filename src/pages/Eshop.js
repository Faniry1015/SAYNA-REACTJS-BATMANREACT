import { React, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc, updateDoc } from "firebase/firestore";
import HeroShop from "../components/HeroShop";
// import Products from "../data/Products";
import { Link } from "react-router-dom";
import { db } from "../config-firebase";
import Products from "../components/Products";
import { UserAuth } from "../context/AuthContext";
import '../styles/Eshop.css'
import PriceFilter from "../components/PriceFilter";

function Eshop() {
   const [products, setProducts] = useState([])
   const [visibleProducts, setVisibleProducts] = useState([])
   const [search, setSearch] = useState('')
   // const [state, setState] = useState({
   //    products: [],
   //    search: '',
   //    category: '',
   // })

   // Read products data from firebase
   const getProducts = async () => {
      const productsArray = []
      try {
         const querySnapshot = await getDocs(collection(db, "produits"));
         querySnapshot.forEach((doc) => {
            productsArray.push({ id: doc.id, ...doc.data() })
         });
         setProducts(productsArray)
         setVisibleProducts(productsArray)
         // setState((state, props) => ({ products: productsArray, ...state }))
      } catch (e) {
         console.log(e)
      }
   }

   useEffect(() => {
      getProducts()
   }, [])

   function handleFilter(e) {
      setVisibleProducts(products.filter(product => product.categorie === e.target.name))
   }



   function handleSearch(e) {
      const searchCaracter = e.target.value.trim().toLowerCase()
      if (searchCaracter !== "") {
         setSearch(e.target.value)
         setVisibleProducts(products.filter(product => {
            return product.nom.toLowerCase().includes(searchCaracter) || product.description.toLowerCase().includes(searchCaracter) || product.categorie.toLowerCase().includes(searchCaracter)
         }))
      } else {
         setSearch('')
         setVisibleProducts(products)
      }
   }

   //Ajouter un produit au panier
   const { user } = UserAuth()
   let product_cart = {};

   const addToCart = async (product) => {
      product_cart = product
      product_cart['quantité'] = 1
      product_cart['prixTotalArticles'] = product_cart.quantité * product_cart.prix

      try {
         //Pour éviter qu'un produit puisse être ajouter plusieurs fois dans le panier via eshop
         await setDoc(doc(db, `Cart-${user.uid}`, product.nom), product_cart);
         console.log(product)

         // Add a new document with a generated id
         // const cartRef = doc(collection(db, `Cart-${user.uid}`));
         // await setDoc(cartRef, product_cart);
      } catch (e) {
         console.log(e.message)
      }

   }

   // const { products, search, category } = state


   return (
      <>
         <HeroShop />
         <section className="container pt-5">
            <div className="float-end">
               <Link to='/eshop/cart'>
                  <i className="fa-solid fa-2x fa-cart-plus"></i>
               </Link>
            </div>
         </section>
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <h3>Rechercher</h3>
                  <div>
                     <input type="text" className="form-control" placeholder="Rechercher..." id="search" name="search" value={search} onChange={handleSearch} />
                  </div>
                  <h3>Filtres</h3>
                  <PriceFilter />
                  <checkbox className="w-100 mb-3 btn-category-filter" name="goodies" onClick={handleFilter}>Goodies</checkbox>
                  <checkbox className="w-100 mb-3 btn-category-filter" name="vetement" onClick={handleFilter}>Vêtements</checkbox>
                  <checkbox className="w-100 mb-3 btn-category-filter" name="sac" onClick={handleFilter}>Sac</checkbox>
               </div>
               <div className="col-md-9">
                  <h3 className="text-center">Nos produits</h3>
                  <section id="products">
                  {JSON.stringify(visibleProducts.map(product => product.univers))}
                     {
                        products.length >= 1 && (
                           <div className="product-box">
                              <Products products={visibleProducts} category={''} addToCart={addToCart} />
                           </div>
                        )
                     }
                     {
                        products.length < 1 && (
                           <div className="productLoader">
                              <h6><i className="fa-solid fa-spinner fa-spin-pulse fa-10x" style={{ color: "#e1e100", }}></i></h6>
                           </div>
                        )
                     }
                  </section>
               </div>
            </div>
         </div>
      </>
   );
}

export default Eshop;

// {/* <ProductList /> */}
// <h1>Nos Produits</h1>
// <div
//    className="row"
//    style={{
//       display: "flex",
//       flexWrap: "wrap"
//    }}
// >
//    {data.map((product) => {
//       const { id, title, description, price, imageUrl } =
//          product;
//       return (
//          <div className="col-md-4 m-2" key={id}>
//             <div className="card">
//                <img
//                   src={imageUrl}
//                   className="card-img-top"
//                   alt={title}
//                />
//                <div className="card-body">
//                   <h5 className="card-title">{title}</h5>
//                   {/* <p className="card-text">{description}</p> */}
//                   <p>Prix: {price}$</p>
//                   <a href="/" className="btn btn-primary">
//                      Ajouter au panier
//                   </a>
//                </div>
//             </div>
//          </div>
//       );
//    })}
// </div>
