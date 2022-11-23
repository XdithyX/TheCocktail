import React,{Suspense} from "react";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";                                                       //importing all packages
import Singlecocktail from "./pages/Singlecocktail";
import { HomePage } from "./pages";
import Loader from "./components/Loader/Loader";
import Admin from "./pages/Admin";
import './App.css'


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}></Suspense>
    <Router>
     <Navbar/>
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />                                            //! important setting routes
        <Route path='cocktail/:id' element={<Singlecocktail />} />
        <Route path='admin' element={<Admin/>} />
        <Route path='*' element={<Error />} />
      </Routes>
     
     
     
   </Router>
    </div>
   
  );
}

export default App;
