import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/FinTree-Logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const productLinks = [
    { name: "Loan Against Property", route: "products/loan-against-property" },
    { name: "Supply Chain Finance", route: "products/supply-chain-finance" },
    { name: "FinTech", route: "products/fintech" },
    { name: "NACH Cancellation", route: "products/nach-cancellation" },
  ];

  const corpGovLinks = [
    { name: "Resignation of Director", route: "/resignation-director" },
    { name: "Notice of Annual General Meeting", route: "/agm-notice" },
    { name: "MGT-7", route: "/mgt-7" },
    { name: "Corporate Social Responsibility", route: "/csr" },
    { name: "DSA Code of Conduct", route: "/dsa-code" },
    { name: "Grievance Redressal Mechanism", route: "/grievance-redressal" },
    { name: "CKYC", route: "/ckyc" },
    { name: "Policies", route: "/policies" },
    { name: "Customer Education", route: "/customer-education" },
    { name: "Ombudsman Scheme", route: "/ombudsman-scheme" },
    { name: "Compromise & Settlement Policy", route: "/compromise-settlement" },
  ];

  const handleNav = (route: string) => {
    navigate(route);
    setHoveredMenu(null); // Close dropdown after click
  };

  return (
    <header className="w-full shadow-md bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:py-2">
        <div className="flex items-center flex-shrink-0 my-0">
          <img src={logo} alt="FinTree Logo" className="w-24 h-auto object-contain" />
        </div>

        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 text-xl font-semibold relative">
            <a
             
              onClick={() => handleNav("/")}
              className="hover:text-blue-700 transition"
            >
              Home
            </a>

            {/* Products Dropdown */}
            <div
              onMouseEnter={() => setHoveredMenu("product")}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative"
            >
              <button className="hover:text-blue-700 transition">Product</button>
              {hoveredMenu === "product" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-md z-50">
                  {productLinks.map((link) => (
                    <div
                      key={link.name}
                      onClick={() => handleNav(link.route)}
                      className="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer text-sm"
                    >
                      {link.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Corporate Governance Dropdown */}
            <div
              onMouseEnter={() => setHoveredMenu("corporate")}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative"
            >
              <button className="hover:text-blue-700 transition">
                Corporate Governance
              </button>
              {hoveredMenu === "corporate" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded shadow-md z-50 max-h-[400px] overflow-y-auto">
                  {corpGovLinks.map((link) => (
                    <div
                      key={link.name}
                      onClick={() => handleNav(link.route)}
                      className="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer text-sm"
                    >
                      {link.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              onClick={() => handleNav("/about")}
              className="hover:text-blue-700 transition"
            >
              About
            </a>
          </nav>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded transition">
            <CallIcon className="text-green-600" />
            <span className="font-semibold">1800 267 8111</span>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden focus:outline-none"
          >
            <MenuIcon className="text-black w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
            {["Home", "Products", "Feature", "Blog", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-lg font-medium text-gray-800 hover:text-blue-700"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-6 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <SearchIcon className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-full text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

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
