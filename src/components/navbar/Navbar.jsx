import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-800/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <Logo />
          <Navlinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
