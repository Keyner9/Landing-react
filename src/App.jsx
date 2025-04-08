import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderHero from "./components/SliderHero/SliderHero";
import Fondo from "./assets/Fondo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import CategoryGrid from "./components/CategoryGrid";
import Footer from "./components/Footer/Footer";

function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SliderHero />
                <CategoryGrid />
                {/* Nueva sección en vez de productos */}
                <section className="pt-24 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h3 className="text-xl font-bold mb-4">Folleto Digital</h3>
                    <p className="mb-4">Explora las promociones y productos del mes.</p>
                    <a
                      href="https://ejemplo.com/folleto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
                    >
                      Ver Folleto
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h3 className="text-xl font-bold mb-4">Habla con una Consultora</h3>
                    <p className="mb-4">¿Tienes dudas o necesitas asesoría personalizada?</p>
                    <a
                      href="https://wa.me/573001112233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                    >
                      Contactar
                    </a>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/categorias/:slug" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
