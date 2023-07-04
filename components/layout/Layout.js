import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children }) {
  /* useEffect(()=>{
        // Your code here
      }, []) */

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Calma-todo's</title>
        <meta
          name="description"
          content="Administrador de tareas enfocado en calmar la ansiedad por sobre carga"
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
