import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/navbar/Navbar";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import CareersPage from "./pages/Careers";
import BlogPage from "./pages/Blog";
import Footer from "./components/home/Footer";
const EachServicePage = lazy(
  () => import("./components/services/EachServicePage")
);
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 200,
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0  w-full z-[100] sm:px-3 lg:px-12 px-3">
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
