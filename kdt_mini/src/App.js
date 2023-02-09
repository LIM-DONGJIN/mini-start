import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import ProductDetail from './components/pages/ProductDetail';
import ProductList from './components/pages/ProductList';
import { RecoilRoot } from 'recoil';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="APP">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </RecoilRoot>

   
  );
}

export default App;
