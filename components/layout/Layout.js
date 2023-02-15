import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
/* useEffect(()=>{
        // Your code here
      }, []) */
  
  return (
    <>
    <Header />
     <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout;