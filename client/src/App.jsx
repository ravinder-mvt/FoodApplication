import { useState } from "react";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import { LoginUiPopUp } from "./ContectApi/UIcontext";
import Cart from "./components/CartItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./components/Orders";
function App() {

  return (
    <Router>
      <LoginUiPopUp>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<Orders/>}/>

          </Routes>
        </Layout>
    
      </LoginUiPopUp>
    </Router>
  );
}

export default App;
