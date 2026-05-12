import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-800/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Logo />
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Flow</span>
              <span className="text-blue-400">AI</span>
            </span>
          </div>

          <Navlinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
