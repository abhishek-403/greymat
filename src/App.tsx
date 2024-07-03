import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/navbar/Navbar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      delay: 200,
    });
  }, []);
    return (
    <div className="relative sm:px-10 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" />
      </Routes>
    </div>
  );
}

export default App;
