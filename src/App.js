import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Categories from "./Pages/Categories";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/assets/banner_mens.png";
import women_banner from "./Components/assets/banner_women.png";
import kids_banner from "./Components/assets/banner_kids.png";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<Categories banner={men_banner} category="men" />}
        />
        <Route
          path="/womens"
          element={<Categories banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<Categories banner={kids_banner} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginsign" element={<LoginSignup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
