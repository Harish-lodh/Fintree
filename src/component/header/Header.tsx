import { useState } from "react";
import logo from '../../assets/FinTree-Logo.jpg';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from '@mui/icons-material/Call';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:py-2">
        {/* Logo - Always Left */}
        <div className="flex items-center flex-shrink-0 my-0">
          <img src={logo} alt="FinTree Logo" className="w-24 h-auto object-contain" />
        </div>

        {/* Right side - nav, search, phone */}
        <div className="flex items-center space-x-6">
      

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6  text-xl font-semibold ">
            {["Home", "Team", "Feature", "Blog", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-indigo-800 transition"
              >
                {item}
              </a>
            ))}
          </nav>
             {/* Phone */}
          <div className="hidden lg:flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded transition">
            <CallIcon className="text-green-600" />
            <span className="font-semibold">1800 267 8111</span>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden focus:outline-none"
          >
            <MenuIcon className="text-black w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-lg z-50 p-6 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <img src={logo} alt="logo" className="w-32 h-auto object-contain" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 border p-2 rounded-full"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="space-y-4">
            {["Home", "Team", "Feature", "Blog", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-lg font-medium text-gray-800 hover:text-indigo-700"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Search */}
          <div className="mt-6 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <SearchIcon className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-full text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-800"
            />
          </div>

          {/* Mobile Phone */}
          <div className="mt-4 flex items-center gap-2 text-gray-700">
            <CallIcon className="text-green-600" />
            <span className="font-semibold">1800 267 8111</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
