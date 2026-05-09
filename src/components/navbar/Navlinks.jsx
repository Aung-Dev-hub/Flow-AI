import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navlinks = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <a
          href="#features"
          className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
        >
          Features
        </a>

        <a
          href="#pricing"
          className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
        >
          Pricing
        </a>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden p-2 text-gray-300 hover:text-white"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 border-t border-slate-800 md:hidden slide-in-from-top animated-in duration-300">
          <div className="flex flex-col items-center py-6 space-y-6">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Features
            </a>

            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Pricing
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navlinks;
