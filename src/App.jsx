// src/App.jsx (or another top-level component)
import React from "react";
import FieldPage from "./Pages/FieldPage/FieldPage.jsx";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <FieldPage />
      <Footer />
    </div>
  );
};

export default App;
