import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Blog from "./pages/blog";
import Product from "./pages/product";
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
