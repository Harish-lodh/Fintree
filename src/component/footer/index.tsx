import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import logo from '../../assets/nav-logo.jpeg'
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const socialIcons = [
  { 
    icon: <LinkedInIcon className="!w-7 !h-7" />, 
    bgColor: 'bg-blue-900', 
    hoverColor: 'hover:bg-blue-900',
    href: 'http://linkedin.com/company/fintree-finance/' 
  },
  { 
    icon: <FacebookIcon className="!w-7 !h-7" />, 
    bgColor: 'bg-blue-600', 
    hoverColor: 'hover:bg-blue-800',
    href: 'https://www.facebook.com/profile.php?id=100064084087872#' 
  },
  { 
    icon: <TwitterIcon className="!w-7 !h-7" />, 
    bgColor: 'bg-blue-400', 
    hoverColor: 'hover:bg-blue-500',
    href: 'https://x.com/fintreel?lang=en' 
  },
];


const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact Us', path: '/contact-us' }
];

const otherLinks = [
  { name: 'Terms of Service', path: '/terms-of-service' },
  { name: 'Fintree Privacy Policy', path: '/privacy-policy' },
  // { name: 'Certificates', path: '/certificates' },
  // { name: 'Schedule of Charges', path: '/schedule-of-charges' },
  // { name: 'CMS Portal', path: '/cms-portal' },
  { name: 'Sachet Portal', path: 'https://sachet.rbi.org.in/' }
];


  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 relative min-h-70">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Logo and Social */}
          <div className="space-y-6">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-20 h-20  rounded-lg flex items-center justify-center shadow-md">
                <span className="text-gray-900 font-bold "><img src={logo} className='' /></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-1">FinTree</h3>
                <p className="text-gray-400 text-sm">Fintree Finance Pvt. Ltd.</p>
                <p className="text-gray-500 text-xs">Empowering SME Growth</p>
              </div>
            </div>
            
            {/* Social Media Section */}
            <div>
              <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4 flex items-center">
                <span className="mr-2">📱</span> Social Support
              </h4>
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`
                      w-10 h-10 rounded-full ${social.bgColor} ${social.hoverColor} 
                      flex items-center justify-center text-white 
                      transition-all duration-300 ease-out transform 
                      hover:scale-110 hover:shadow-lg hover:-translate-y-1
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    `}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

    {/* Quick Links */}
<div>
  <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4 flex items-center">
    <span className="mr-2">⚡</span> Quick Links
  </h4>
  <ul className="space-y-3">
    {quickLinks.map((link, index) => (
      <li key={index}>
        <Link
          to={link.path}
          className="
            text-gray-400 hover:text-white text-sm 
            transition-all duration-300 ease-out 
            block py-1 hover:pl-2 hover:border-l-2 hover:border-blue-500
            focus:outline-none focus:text-white focus:pl-2 focus:border-l-2 focus:border-blue-500
          "
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* Other Links */}
<div>
  <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4 flex items-center">
    <span className="mr-2">🔗</span> Other Links
  </h4>
  <ul className="space-y-3">
    {otherLinks.map((link, index) => (
      <li key={index}>
        <Link
          to={link.path}
          className="
            text-gray-400 hover:text-white text-sm 
            transition-all duration-300 ease-out 
            block py-1 hover:pl-2 hover:border-l-2 hover:border-blue-500
            focus:outline-none focus:text-white focus:pl-2 focus:border-l-2 focus:border-blue-500
          "
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


          {/* Corporate Office */}
          <div className="space-y-6">
            {/* Main Office */}
            <div>
              <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4 flex items-center">
               <LocationOnIcon className="!w-4 !h-4 mr-2" />
 Corporate Office - Mumbai
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-white font-medium">Fintree Finance Pvt. Ltd.</p>
                <div className="text-gray-400 space-y-1">
                  <p>Engineering Centre 4th Floor,</p>
                  <p>9 Matthew Road, Opera House,</p>
                  <p className="mb-3">Mumbai - 400004</p>
                </div>
                <a 
                  href="mailto:wecarefintree@gmail.com" 
                  className="
                    text-blue-400 hover:text-blue-300 
                    transition-colors duration-300 ease-out 
                    flex items-center space-x-2 group
                    focus:outline-none focus:text-blue-300
                  "
                >
                  <EmailIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>wecarefintree@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 gap-4">
              {/* Nodal Officer */}
              <div className="p-2 bg-gray-800 rounded-lg border border-gray-700">
                <h5 className="text-white font-medium text-xs uppercase tracking-wider mb-2 flex items-center">
                  <PhoneIcon className="w-3 h-3 mr-2" />
                  Nodal Officer - Sweta Parekh
                </h5>
                <p className="text-gray-400 text-sm flex items-center">
                  <PhoneIcon className="w-4 h-4 mr-2 text-green-500" />
                  18002678111
                </p>
              </div>

              {/* CIN */}
              <div className="p-2 bg-gray-800 rounded-lg border border-gray-700">
                <h5 className="text-white font-medium text-xs uppercase tracking-wider mb-2 flex items-center">
                  <span className="mr-2">🏢</span> CIN No
                </h5>
                <p className="text-gray-400 text-xs font-mono break-all leading-relaxed">
                  U65923MH2015PTC264997
                </p>
              </div>
            </div>
          </div>

           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Fintree Finance. All rights reserved.</p>
    
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Fintree Finance. All rights reserved.</p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Made with ❤️ in Mumbai</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Material Design Floating Action Button */}
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6 w-10 h-10 
          bg-blue-800 hover:bg-blue-700 active:bg-blue-800
          rounded-full shadow-lg hover:shadow-xl 
          flex items-center justify-center text-white 
          transition-all duration-300 ease-out 
          transform hover:scale-110 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10
          z-50 group
        "
        aria-label="Back to top"
      >
        <KeyboardArrowUpIcon className="w-6 h-6  group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;