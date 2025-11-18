import { useState } from "react";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import { LoginUiPopUp } from "./ContectApi/UIcontext";
import Cart from "./components/CartItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <LoginUiPopUp>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart/>}/>

          </Routes>
        </Layout>
    
      </LoginUiPopUp>
    </Router>
  );
}

export default App;
