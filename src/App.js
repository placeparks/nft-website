
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
   <>
    <Router>
 <Navbar />

 <Routes>
  <Route exact path='/'/>
  <Route exact path='/' />

 </Routes>
 </Router>
 <Home/>

   </>
  );
}

export default App;
