
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Youtube from './components/Youtube';



function App() {
  return (
    <>
    {/* <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contactus" element={<Contact/>}/>
    </Routes> */}
  
     <Youtube/>
    </>
  );
}

export default App;
