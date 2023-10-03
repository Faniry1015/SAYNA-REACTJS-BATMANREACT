import React from "react";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home.js";
import Game from "../pages/Game.js";
import Eshop from "../pages/Eshop.js";
import MonCompte from "../pages/MonCompte.js";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import "../styles/App.css";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
   return (
      <>
         <BrowserRouter>
            <AuthContextProvider>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route index element={<Home />} />
                     <Route path="game" element={<Game />} />
                     <Route path="eshop" element={<Eshop />} />
                     <Route path="compte" element={
                     <ProtectedRoutes route="login">
                        <MonCompte />
                     </ProtectedRoutes>} />
                     <Route path="signup" element={<Signup />} />
                     <Route path="login" element={<Login />} />
                     <Route path="*" element={<NotFound />} />
                  </Route>
               </Routes>
            </AuthContextProvider>
         </BrowserRouter>
      </>
   );
}

export default App;
