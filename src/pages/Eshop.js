import { React, useState } from "react";
import HeroShop from "../components/HeroShop";
import ProductList from "../components/ProductList";
import Products from "../data/Products";

function Eshop() {
   const [data, setData] = useState(Products);

   return (
      <>
         <HeroShop />
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <h1>Filter by category</h1>
               </div>
               <div className="col-md-9">
                  {/* <ProductList /> */}
                  <h1>Nos Produits</h1>
                  <div
                     className="row"
                     style={{
                        display: "flex",
                        flexWrap: "wrap"
                     }}
                  >
                     {data.map((product) => {
                        const { id, title, description, price, imageUrl } =
                           product;
                        return (
                           <div className="col-md-4 m-2" key={id}>
                              <div className="card">
                                 <img
                                    src={imageUrl}
                                    className="card-img-top"
                                    alt={title}
                                 />
                                 <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    {/* <p className="card-text">{description}</p> */}
                                    <p>Prix: {price}$</p>
                                    <a href="/" className="btn btn-primary">
                                       Ajouter au panier
                                    </a>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Eshop;
