import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/FinTree-Logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import ChevronDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isselected, setIsselected] = useState("home");
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null); // New state for mobile sub-menu

  const productLinks = [
    {
      name: "Loan Against Property",
      route: "products/loan-against-property",
      description: "Secure loans with your property as collateral",
    },
    {
      name: "Supply Chain Finance",
      route: "products/supply-chain-finance",
      description: "Optimize your supply chain cash flow",
    },
    {
      name: "FinTech",
      route: "products/fintech",
      description: "Digital financial solutions",
    },
    // {
    //   name: "NACH Cancellation",
    //   route: "products/nach-cancellation",
    //   description: "Cancel your NACH mandates easily",
    // },
  ];

  const corpGovLinks = [
    { name: "Resignation of Director", route: "corporate-governance/resignation-of-director" },
    { name: "Notice of Annual General Meeting", route: "corporate-governance/AGMNotices" },
    { name: "MGT-7", route: "corporate-governance/MGT-7" },
    { name: "Corporate Social Responsibility", route: "corporate-governance/csr" },
    { name: "DSA Code of Conduct", route: "corporate-governance/dsa-code" },
    { name: "Grievance Redressal Mechanism", route: "corporate-governance/grievance-redressal" },
    { name: "CKYC", route: "corporate-governance/ckyc" },
    { name: "Policies", route: "corporate-governance/policies" },
    { name: "Customer Education", route: "corporate-governance/customer-education" },
    { name: "Ombudsman Scheme", route: "corporate-governance/ombudsman-scheme" },
    { name: "Compromise & Settlement Policy", route: "corporate-governance/compromise-settlement" },
  ];

  const handleNav = (route: string, selected?: string) => {
    navigate(route);
    setHoveredMenu(null);
    setMobileSubMenu(null);
    if (selected) setIsselected(selected);
    setMenuOpen(false); // also closes mobile menu
  };
  const toggleSubMenu = (menu: string) => {
    setMobileSubMenu(mobileSubMenu === menu ? null : menu); // Toggle sub-menu
  };

  return (
    <header className="w-full  shadow-lg bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:py-2">
        <div className="flex items-center flex-shrink-0 my-0">
          <img src={logo} alt="FinTree Logo" className="w-24 h-auto object-contain" />
        </div>

        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 text-xl font-semibold relative">
            <button
              onClick={() => handleNav("/", "home")}
              className={`hover:text-blue-700 transition-colors duration-200 ${
                isselected === "home" ? "text-blue-700" : ""
              }`}
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div
              onMouseEnter={() => setHoveredMenu("product")}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative group"
            >
              <button className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-200">
                Product
                <ChevronDownIcon
                  className={`transition-transform duration-200 ${
                    hoveredMenu === "product" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden transition-all duration-200 ${
                  hoveredMenu === "product"
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {productLinks.map((link) => (
                    <div
                      key={link.name}
                      onClick={() => handleNav(link.route, "product")}
                      className="group/item px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 group-hover/item:bg-blue-700"></div>
                        <div>
                          <div className="font-medium text-sm text-gray-800 group-hover/item:text-blue-700">
                            {link.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{link.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corporate Governance Dropdown */}
            <div
              onMouseEnter={() => setHoveredMenu("corporate")}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative group"
            >
              <button className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-200">
                Corporate Governance
                <ChevronDownIcon
                  className={`transition-transform duration-200 ${
                    hoveredMenu === "corporate" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden transition-all duration-200 ${
                  hoveredMenu === "corporate"
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-2"
                }`}
              >
                <div className="py-2 max-h-102 overflow-y-auto">
                  {corpGovLinks.map((link) => (
                    <div
                      key={link.name}
                      onClick={() => handleNav(link.route, "corporate")}
                      className="group/item px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full"></div>
                        <div className="text-sm text-gray-800 group-hover/item:text-blue-700">
                          {link.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNav("/Lending-Service-Provider", "lsp")}
              className={`hover:text-blue-700 transition-colors duration-200 ${
                isselected === "lsp" ? "text-blue-700" : ""
              }`}
            >
              LendingServiceProvider
            </button>

            <button
              onClick={() => handleNav("/about-us", "about")}
              className={`hover:text-blue-700 transition-colors duration-200 ${
                isselected === "about" ? "text-blue-700" : ""
              }`}
            >
              About-Us
            </button>
          </nav>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-200">
            <CallIcon className="text-green-600" />
            <span className="font-semibold">1800 267 8111</span>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <MenuIcon className="text-black w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="lg:hidden fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-2xl z-50 transform transition-transform duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="logo" className="w-32 h-auto object-contain" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav className="space-y-4 mb-8">
                <button
                  onClick={() => handleNav("/", "home")}
                  className="block text-left w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNav("/products/loan-against-property", "product")}
                  className="block text-left w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                >
                  Products
                </button>
                <button
                  onClick={() => handleNav("/Lending-Service-Provider", "lsp")}
                  className="block text-left w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                >
                  Lending Service Provider
                </button>
                <button
                  onClick={() => handleNav("/about-us", "about")}
                  className="block text-left w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                >
                  About
                </button>
              </nav>

              <div className="flex items-center gap-3 text-gray-700 bg-green-50 p-3 rounded-lg">
                <CallIcon className="text-green-600" />
                <span className="font-semibold">1800 267 8111</span>
              </div>
            </div>
          </div>
        </>
      )} */}
      {menuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="lg:hidden fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-2xl z-50 transform transition-transform duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="logo" className="w-32 h-auto object-contain" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav className="space-y-4 mb-8">
                <button
                  onClick={() => handleNav("/", "home")}
                  className="block text-left w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                >
                  Home
                </button>

                {/* Products Sub-Menu */}
                <div>
                  <button
                    onClick={() => toggleSubMenu("product")}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                  >
                    Products
                    <ChevronDownIcon
                      className={`transition-transform duration-200 ${
                        mobileSubMenu === "product" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSubMenu === "product" && (
                    <div className="pl-4 mt-2 space-y-2">
                      {productLinks.map((link) => (
                        <button
                          key={link.name}
                          onClick={() => handleNav(link.route, "product")}
                          className="block text-left w-full text-sm font-medium text-gray-700 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Corporate Governance Sub-Menu */}
                <div>
                  <button
                    onClick={() => toggleSubMenu("corporate")}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                  >
                    Corporate Governance
                    <ChevronDownIcon
                      className={`transition-transform duration-200 ${
                        mobileSubMenu === "corporate" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSubMenu === "corporate" && (
                    <div className="pl-4 mt-2 space-y-2">
                      {corpGovLinks.map((link) => (
                        <button
                          key={link.name}
                          onClick={() => handleNav(link.route, "corporate")}
                          className="block text-left w-full text-sm font-medium text-gray-700 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNav("/Lending-Service-Provider", "lsp")}
                  className="block text-left w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                >
                  Lending Service Provider
                </button>
                <button
                  onClick={() => handleNav("/about-us", "about")}
                  className="block text-left w-full text-lg font-medium text-gray-800 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50"
                >
                  About
                </button>
              </nav>

              <div className="flex items-center gap-3 text-gray-700 bg-green-50 p-3 rounded-lg">
                <CallIcon className="text-green-600" />
                <span className="font-semibold">1800 267 8111</span>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
