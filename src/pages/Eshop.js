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
import Checkboxfilter from "../components/Checkboxfilter";

function Eshop() {
   const [products, setProducts] = useState([])
   const [visibleProducts, setVisibleProducts] = useState([])
   const [search, setSearch] = useState('')

   const [maxPrice, setMaxPrice] = useState(200)
   const [checkChange, setCheckChange] = useState([])

   const categorieArray = [
      {
         nom: 'goodies',
         label: 'Goodies',
      },
      {
         nom: 'vetement',
         label: 'Vêtement',
      },
      {
         nom: 'multimedia',
         label: 'Multimédia',
      },
      {
         nom: 'equipement',
         label: 'Equipement',
      },
      {
         nom: 'poster',
         label: 'Poster',
      },
   ]

   const universArray = [
      {
         nom: 'batman',
         label: 'Batman',
      },
      {
         nom: 'Superman',
         label: 'Superman',
      },
      {
         nom: 'batmanSuperman',
         label: 'Batman vs Superman',
      },
      {
         nom: 'justiceLeague',
         label: 'Justice League',
      },
      {
         nom: 'poster',
         label: 'Poster',
      },
   ]

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
      } catch (e) {
         console.log(e.message)
      }
   }

   //Gestion des filtres
   const handleMaxPriceChange = (newMaxPrice) => {
      // Mettre à jour la valeur du prix maximum
      setMaxPrice(newMaxPrice);
   };

   const handleCheck = (item) =>  {
   
   }

   const handleCheckChange = (checkStatus) => {
      setCheckChange(checkStatus)
   }

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
               <div className="col-md-3 filtersContainer">
                  <div className="mb-5">
                     <h3>Rechercher</h3>
                     <input type="text" className="form-control" placeholder="Rechercher..." id="search" name="search" value={search} onChange={handleSearch} />
                  </div>
                  <h3>Filtres</h3>
                  <PriceFilter onMaxPriceChange={handleMaxPriceChange} />
                  <Checkboxfilter categoriesArray={categorieArray} onCheckChange={handleCheckChange}>Catégorie</Checkboxfilter>
                  <Checkboxfilter categoriesArray={universArray} onCheckChange={handleCheckChange}>Univers</Checkboxfilter>
               </div>
               <div className="col-md-9">
                  <h3 className="text-center">Nos produits</h3>
                  <section id="products">
                     {JSON.stringify(visibleProducts.map(product => product.categorie))}
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
