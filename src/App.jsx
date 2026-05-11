import Features from "./components/Features/Features";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
