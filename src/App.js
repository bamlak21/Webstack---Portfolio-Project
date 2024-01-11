import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route
          exact
          path="/mens"
          element={<Categories banner={men_banner} category="men" />}
        />
        <Route
          exact
          path="/womens"
          element={<Categories banner={women_banner} category="women" />}
        />
        <Route
          exact
          path="/kids"
          element={<Categories banner={kids_banner} category="kid" />}
        />
        <Route exact path="/product" element={<Product />}>
          <Route exact path=":productId" element={<Product />} />
        </Route>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/loginsign" element={<LoginSignup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
