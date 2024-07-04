import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/navbar/Navbar";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import CareersPage from "./pages/Careers";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      delay: 200,
    });
  }, []);
    return (
    <div className="relative sm:px-3 lg:px-24 px-3 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/careers" element={<CareersPage/>} />
      </Routes>
    </div>
  );
}

export default App;
