
import AllProducts from "./AllProducts";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Sponsors from "../Sponsors/Sponsors";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <div className="flex flex-col p-5 w-full bg-amber-500 space-y-2">

            <ProductCarousel />

            <AllProducts />

            <Sponsors />

            <Footer />

        </div>
    )
}