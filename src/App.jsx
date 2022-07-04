import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainNavbar from "./Components/Navbar/MainNavbar";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./Store/CartProvider";
import HomePage from "./Routing/HomePage";
import AboutPage from "./Routing/AboutPage";
import ContactPage from "./Routing/ContactPage";
import ErrorPage from "./Routing/ErrorPage";
import CategoryPage from "./Routing/CategoryPage";
import ProductPage from "./Routing/ProductPage";
import CartPage from "./Routing/CartPage";
import UserPage from "./Routing/UserPage/UserPage";

import AuthenticationProvider from "./Store/AuthenticationProvider"


import { Route, Routes } from "react-router-dom";
import SearchPage from "./Routing/SearchPage";

function App() {
    return (
        <AuthenticationProvider>
            <CartProvider>
                <MainNavbar />

                <Routes>
                    <Route path="/" element={<HomePage />}>
                        <Route path="/home" element={<HomePage />} />
                    </Route>
                    {/* <Route path="/about" element={<AboutPage />} /> */}
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/categories/:category" element={<CategoryPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>


                <Footer />
            </CartProvider>
        </AuthenticationProvider>
    );
}

export default App;
