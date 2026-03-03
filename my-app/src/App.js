import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Menu from './components/Routing/Menu';
import Footer from './components/Footer';
import Home from './components/Routing/Home';
import About from './components/Routing/About';
import Services from './components/Routing/Services';
import Products from './components/Routing/Products';
import Career from './components/Routing/Career';
import Contact from './components/Routing/Contact';
// Sub Menu
import DigitalMarketing from './components/Routing/DigitalMarketing';
import MobileAppDevelopment from './components/Routing/MobileAppDevelopment';
import WebsiteDevelopment from './components/Routing/WebsiteDevelopment';
import SoftwareDevelopment from './components/Routing/SoftwareDevelopment';
import Ui from './components/Routing/Ui';

import Slider from './components/Slider';
import React, { useState } from "react";
import Header from "./components/Routing/Header";
// import Menu from './components/Routing/Menu';
import Menu from "./components/Routing/Menu";
import Blog from './components/Routing/Blog';
// componentes
import Faq from './components/Faq';
import Logoslider from './components/Routing/Logoslider';


function App() {
  return (

    <BrowserRouter>
      {/* <Header/> */}
      <Menu />
      {/* <Slider /> */}

      <a
        href="https://wa.me/919623053600?text=Hello%20I%20need%20details"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
        />
      </a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services/services" element={<Services />} />

        {/* <Route path="/Services/Website-Development" element={<WebsiteDevelopment />} /> */}
        <Route path="/Website-Development" element={<WebsiteDevelopment />} />
        <Route path="/Mobile-App-Development" element={<MobileAppDevelopment />} />
        {/* <Route path="/Services/Software " element={<Software />} /> */}
        <Route path="/Software-Development" element={<SoftwareDevelopment />} />
        {/* <Route path="/Digital-Marketing" element={<DigitalMarketing />} /> */}
        <Route path="/Digital-Marketing" element={<DigitalMarketing />} />
        <Route path="/Ui" element={<Ui />} />
        <Route path="/products" element={<Products />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Logoslider />
      <Faq />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
