import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from "./pages/contact/Contact"
import Blog from './pages/blog/Blog';
import Shop from './pages/shop/Shop';

function App() {
  


  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    {/* <Route path='/' element={<ProductItems/>}/> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
