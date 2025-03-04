import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import ShopProject from './pages/ShopProject';

function App() {

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-project" element={<ShopProject />} />
      </Routes>
    </>
  )
}

export default App
