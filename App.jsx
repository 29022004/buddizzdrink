import{useEffect,useState} from 'react'
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  const[goFull,setGoFull]=useState(false);
  useEffect(()=>{
    console.log("must have been clicked");
    let e=document.getElementById("my-fullscreen");
  e?.requestFullscreen();
  },[goFull])

  return (
    <div className="App">
      <div onClick = {(e)=>{setGoFull(!goFull)}} id ="my-fullscreen" style ={{color:"blue"}}></div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu"  element={ <Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;