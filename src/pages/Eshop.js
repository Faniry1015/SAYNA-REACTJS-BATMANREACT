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
   const [search, setSearch] = useState('')

   // Read products data from firebase

   const getProducts = async () => {
      const productsArray = []
      
      const querySnapshot = await getDocs(collection(db, "produits"));
      querySnapshot.forEach((doc) => {
         productsArray.push({id: doc.id, ...doc.data()})
         setProducts(productsArray)
         // doc.data() is never undefined for query doc snapshots
         // console.log(doc.id, " => ", doc.data());
      });
      console.log(productsArray)
   }

   useEffect(() => {
      getProducts()
   }, [])

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
                  <button className="w-100 mb-3 btnContain__btn">Sac</button>
                  <button className="w-100 mb-3 btnContain__btn">Vêtements</button>
                  <button className="w-100 mb-3 btnContain__btn">Equipement</button>
               </div>
               <div className="col-md-9">
               <h3 className="text-center">Nos produits</h3>
               <section id="products">
                  {
                     products.length >= 1  && (
                        <div className="product-box">
                           <Products products={products} />
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
