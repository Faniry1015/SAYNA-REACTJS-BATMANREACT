import { React, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import HeroShop from "../components/HeroShop";
// import Products from "../data/Products";
import { Link } from "react-router-dom";
import { db } from "../config-firebase";
import Products from "../components/Products";
import '../styles/Eshop.css'

function Eshop() {
   const [products, setProducts] = useState([])
   const [visibleProducts, setVisibleProducts] = useState([])
   const [search, setSearch] = useState(products)
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

   // const { products, search, category } = state

   return (
      <>
         <HeroShop />
         <section className="container pt-5">
            <div className="float-end">
               <Link to='/cart'>
                  <i className="fa-solid fa-2x fa-cart-plus"></i>
               </Link>
            </div>
         </section>
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <h3>Rechercher</h3>
                  <div>
                     <input type="text" className="form-control" placeholder="Rechercher..." id="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                  <h3>Filtrer par catégorie</h3>
                  <button className="w-100 mb-3 btnContain__btn" name="equipement" onClick={handleFilter}>Equipement</button>
                  <button className="w-100 mb-3 btnContain__btn" name="vetement" onClick={handleFilter}>Vêtements</button>
                  <button className="w-100 mb-3 btnContain__btn" name="sac" onClick={handleFilter}>Sac</button>
               </div>
               <div className="col-md-9">
                  <h3 className="text-center">Nos produits</h3>
                  <section id="products">
                     {
                        products.length >= 1 && (
                           <div className="product-box">
                              <Products products={visibleProducts} category={''} />
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
