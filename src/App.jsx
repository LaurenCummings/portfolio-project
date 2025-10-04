import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import BlogProject from "./pages/BlogProject";
import RecipeProject from "./pages/RecipeProject";
import CummingsMaple from "./pages/CummingsMaple";
import SpaProject from "./pages/SpaProject";
import ShopProject from "./pages/ShopProject";
import MovieProject from "./pages/MovieProject";
import CookbookProject from "./pages/CookbookProject";
import NotesProject from "./pages/NotesProject";
import ChatProject from "./pages/ChatProject";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-project" element={<Home />} />
        <Route path="/blog-project" element={<BlogProject />} />
        <Route path="/recipe-project" element={<RecipeProject />} />
        <Route path="/cummings-maple" element={<CummingsMaple />} />
        <Route path="/spa-project" element={<SpaProject />} />
        <Route path="/shop-project" element={<ShopProject />} />
        <Route path="/movie-project" element={<MovieProject />} />
        <Route path="/cookbook-project" element={<CookbookProject />} />
        <Route path="/notes-project" element={<NotesProject />} />
        <Route path="/chat-project" element={<ChatProject />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
