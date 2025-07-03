import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import SpaProject from './pages/SpaProject';
import ShopProject from './pages/ShopProject';
import MovieProject from './pages/MovieProject';

function App() {

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-project" element={<Home />} />
        <Route path="/spa-project" element={<SpaProject />} />
        <Route path="/shop-project" element={<ShopProject />} />
        <Route path="/movie-project" element={<MovieProject />} />
      </Routes>
    </>
  )
}

export default App
