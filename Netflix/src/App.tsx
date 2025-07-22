import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar";
import SignIn from "./Componets/SignIn page/SignIn"
import Hero from "./Componets/HeroSection/Hero";

function App() {
  return (
    <Router>
    
      <Navbar /> 
      <Hero/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hero" element={<Hero />} />
        
      </Routes>
      
    </Router>
  );
}


function Home() {
  return (
    <div className="text-white">
      {/* Your home page content */}
      <h1>Welcome to Netflix Clone</h1>
    </div>
  );
}

export default App;
