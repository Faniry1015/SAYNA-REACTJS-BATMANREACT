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

   const [products, setProducts] = useState([])
   const [visibleProducts, setVisibleProducts] = useState([])
   const [search, setSearch] = useState('')

   const [maxPrice, setMaxPrice] = useState(200)
   const [categorieChange, setCategorieChange] = useState([])
   const [universChange, setUniversChange] = useState([])

   const categoryName = categorieArray.map((categorie) => {
      return categorie.nom
   })
   const universName = universArray.map((univers) => {
      return univers.nom
   })
   const defaultFilterData = { prixMax: 200, categories: categoryName, univers: universName }
   const [filteredData, setFilteredData] = useState(defaultFilterData)

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

   //Gestion de la recherche
   function handleSearch(e) {
      const searchCaracter = e.target.value.trim().toLowerCase()
      if (searchCaracter !== "") {
         setSearch(e.target.value)
         setVisibleProducts(products.filter(product => {
            return product.nom.toLowerCase().includes(searchCaracter) || product.categorie.toLowerCase().includes(searchCaracter) || product.description.toLowerCase().includes(searchCaracter)
         }))
      } else {
         setSearch('')
         setVisibleProducts(products)
      }
   }

   //Gestion des filtres
   const handlefilterChange = (filter) => {
      if (!isNaN(filter)) {
         console.log(filter)
         handleMaxPriceChange(filter)
         setFilteredData({...filteredData, prixMax: filter})
      } else if (filter[0].nom === 'goodies') {
         console.log(filter[0].nom)
         handleCategorieChange(filter)
         if(filter.categories.length === 0) {
            setFilteredData({...filteredData, categories: [categorieArray]})
         } else {
            console.log(categorieChange)
            const filteredCat = categorieChange.filter((categorie) => categorie.check)
            filteredCat.push(categorieChange)
         }
      } else if (filter[0].nom === 'batman') {
         console.log(filter[0].nom)
         handleUniversChange(filter)
      } else {
         throw Error("Erreur de filtre")
      }
   }

   const handleMaxPriceChange = (newMaxPrice) => {
      setMaxPrice(newMaxPrice);
   };

   const handleCategorieChange = (checkStatusArray) => {
      setCategorieChange(checkStatusArray)
   }

   const handleUniversChange = (checkStatusArray) => {
      setUniversChange(checkStatusArray)
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
                  <PriceFilter onMaxPriceChange={handlefilterChange} />
                  <Checkboxfilter dataFilterArray={categorieArray} onCheckChange={handlefilterChange}>Catégorie</Checkboxfilter>
                  <Checkboxfilter id='univers' dataFilterArray={universArray} onCheckChange={handlefilterChange}>Univers</Checkboxfilter>
               </div>
               {JSON.stringify(filteredData)}
               <div className="col-md-9">
                  <h3 className="text-center">Nos produits</h3>
                  <section id="products">
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
