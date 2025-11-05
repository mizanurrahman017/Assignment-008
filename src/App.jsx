import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Hero from "./pages/Hero/Hero";
import BookDetails from "./pages/BookDetails/BookDetails";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/apps/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;