import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Gallary from "./Components/Gallary";
import Pricing from "./Components/Pricing";
import AppFeature from "./Components/App Feature";
import Button from "./Components/Button";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="contact" element={<Contact />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="appfeature" element={<AppFeature />} />
          <Route path="button" element={<Button />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
