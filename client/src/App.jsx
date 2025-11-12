import { useState } from "react";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
