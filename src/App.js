import React from "react";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Singlecocktail from "./pages/Singlecocktail";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import './App.css'


function App() {
  return (
    <div className="App">
        <Router>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<Singlecocktail />} />
        <Route path='admin' element={<Admin/>} />
        <Route path='*' element={<Error />} />
      </Routes>
     
     
   </Router>
    </div>
   
  );
}

export default App;
