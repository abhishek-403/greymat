import AOS from "aos";
import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { POPUP_TIME_ONE, POPUP_TIME_TWO } from "./components/constants";
import Footer from "./components/home/Footer";
import PopUp from "./components/home/PopUp";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import CareersPage from "./pages/Careers";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
const EachServicePage = lazy(
  () => import("./components/services/EachServicePage")
);

function App() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      // delay: 200,
    });
  }, []);

  useEffect(() => {
   
    const showPopupAfter30Sec = setTimeout(() => {
      setShowPopup(true);
    }, POPUP_TIME_ONE); 
    const showPopupAfter2Min = setTimeout(() => {
      setShowPopup(true);
    }, POPUP_TIME_TWO); 

    return () => {
      clearTimeout(showPopupAfter30Sec);
      clearTimeout(showPopupAfter2Min);
    };
   
  }, []);
  return (
    <div className="min-h-screen max-w-screen flex flex-col relative">
      {showPopup && <PopUp setShow={setShowPopup} />}
      <div className="sticky top-[2px]  w-full z-[100] sm:px-3 lg:px-12 px-2">
        <Navbar />
      </div>
      <div className="relative sm:px-3 lg:px-24 px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <EachServicePage />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
