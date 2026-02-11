import {Navigate, Routes, Route} from "react-router";
import HomePage from './pages/Homepage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import NavigationBar from './components/NavigationBar';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
   <>
    <NavigationBar />  {/* navigations baren gør at man kan navigere rundt på siderne uanset hvilke en man er inde på */}
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/products/:id" element={<ProductDetailPage/>} />
      <Route path="*" element={<ErrorPage />} /> {/* path="*" matcher alle urls der ikke matcher de andre routes */}
    </Routes>
   </>  
  );
}

export default App
