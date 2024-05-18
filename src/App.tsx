import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import AOS from 'aos'
import "aos/dist/aos.css";
import "animate.css/animate.compat.css";
import { useEffect } from "react";

function App() {
     useEffect(() => {
       AOS.init({
         duration: 1200,
         once: true,
       });
     }, []);
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
