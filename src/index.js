import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import CreateProduct from "./Pages/CreateProduct";
import ProductList from "./Pages/ProductList.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/list" element={<ProductList />}></Route>
        <Route path="/product/details" element={<ProductDetails />}></Route>
        <Route path="/product/create" element={<CreateProduct />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
