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
import NotFound from "./NotFound.jsx";
import CryptoDetail from "./CryptoDetail.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/cryptoDetail/:cryptoSymbol/:id"
          element={<CryptoDetail />}
        ></Route>
        <Route
          path="/cryptoDetail/:cryptoSymbol"
          element={<CryptoDetail />}
        ></Route>
        <Route path="/product">
          <Route path="" element={<Product />}></Route>
          <Route path="list" element={<ProductList />}></Route>
          <Route path="details" element={<ProductDetails />}></Route>
          <Route path="details/:productId" element={<ProductDetails />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
