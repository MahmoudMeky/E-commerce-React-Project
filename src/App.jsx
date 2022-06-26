import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Components/Categories/Categories";
import Landing from "./Components/Landing/LandingPage/Landing";
import "./App.css";
import SalesSection from "./Components/Sales/SalesSection";
import Products from "./Components/Products/Products";
import MainNavbar from "./Components/Landing/Navbar/MainNavbar";
import Features from "./Components/Features/Features";
import CartProvider from "./Store/CartProvider";
import Subscribe from "./Components/Footer/Subscribe";

function App() {
    return (
    <CartProvider>
        <MainNavbar />
        <Landing />
        <Categories />
        <SalesSection />
        <Products />
        <Features />
        <Subscribe/>
    </CartProvider>
    );
}

export default App;
