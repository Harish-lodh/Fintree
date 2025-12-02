import { useRef, useState } from 'react';
import fintech from '../assets/product-img/FINTECH.jpg';
import { motion } from 'framer-motion';

const FinTechFinance = () => {
  const [showMobileFinanceSection, setShowMobileFinanceSection] = useState(false);
  const mobileFinanceSectionRef = useRef<HTMLDivElement | null>(null);

  const handleMobileFinanceClick = () => {
    setShowMobileFinanceSection(true);

    // Scroll into view after it becomes visible
    setTimeout(() => {
      if (mobileFinanceSectionRef.current) {
        mobileFinanceSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  const products = [
    'Education Loans to K-12 and technical courses',
    'Financing of Medical Expenses',
    'EV Financing',
  ];

  return (
    <div className="bg-gradient-to-r from-[#003341] via-[#004466] to-[#005B82] py-16 px-4 sm:px-6 lg:px-8 text-white font-[Poppins] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Image and Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Image Section */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto">
              <img
                src={fintech}
                alt="Fintree Finance fintech platform illustration showing mobile financing and digital lending ecosystem"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl ring-1 ring-white/10 hover:ring-green-300/50 transition-all duration-300"
              />
              {/* Optional decorative overlay */}
              <div className="absolute -inset-2 bg-gradient-to-t from-green-400/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="flex-1 space-y-6 text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold leading-tight bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Accelerating Digital Lending in India
            </h2>

            <p className="text-lg leading-relaxed text-gray-200">
              Fintree Finance is not just an NBFC — we are a{' '}
              <span className="font-semibold text-white">Fintech Accelerator and Aggregator</span> with a proven edge in
              digital lending. We’ve partnered with leading fintech platforms for:
            </p>

            {/* Product Listing - Non-clickable list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((item) => (
                <motion.div
                  key={item}
                  className="bg-white/5 border border-white/20 rounded-xl p-4 flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-green-400 text-2xl mr-3 flex-shrink-0">•</span>
                  <span className="font-semibold text-gray-100">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Separate Clickable Section for Early Salary & Mobile Financing */}
            <motion.div
              className="mt-4 bg-green-500/10 border border-green-300/60 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer hover:bg-green-500/20 hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              onClick={handleMobileFinanceClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleMobileFinanceClick();
                }
              }}
            >
              <div>
                <p className="text-sm uppercase tracking-wide text-green-200 font-semibold">
                  Click to explore
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Mobile Financing
                </h3>
                <p className="text-sm text-gray-100 mt-1">
                  Instant mobile loans and salary advances for eligible customers with a fully digital journey.
                </p>
              </div>
              <div className="flex items-center gap-2 text-green-200 font-semibold text-sm">
                View mobile finance details
                <span className="text-xl">➜</span>
              </div>
            </motion.div>

            {/* USP Section - Compact List */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-bold text-green-300">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-gray-100">
                {[
                  'Digital Loan Onboarding',
                  'API-integrated LOS & LMS',
                  'FLDG-backed Risk Models',
                  'Target Monthly Disbursal: ₹25 Cr+',
                ].map((usp) => (
                  <li key={usp} className="flex items-center">
                    <span className="text-green-400 text-xl mr-3">✨</span>
                    {usp}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-200 font-medium">
              With over <span className="font-bold text-white">17,000 active borrowers</span> and expanding reach, our
              fintech ecosystem enables us to deliver credit where it's needed most —{' '}
              <span className="font-bold text-green-300">fast, paperless, and inclusive.</span>
            </p>
          </motion.div>
        </div>

        {/* Mobile Finance + Documents Section (shown after click) */}
        {showMobileFinanceSection && (
          <div
            ref={mobileFinanceSectionRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Finance Card */}
            <motion.div
              className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-4 shadow-lg hover:shadow-xl hover:border-green-300/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-green-300">Where We Do Mobile Finance</h3>
              <p className="text-sm leading-relaxed text-gray-100">
                Fintree Finance enables <span className="font-semibold">mobile device financing</span> through partnered{' '}
                <span className="font-semibold">online channels and select offline partners</span>, helping customers
                spread the cost of essential smartphones and devices.
              </p>
              <ul className="space-y-2 text-sm text-gray-100">
                {[
                  'Mobile phone purchase finance for eligible salaried and self-employed customers',
                  'Small ticket mobile loans powered by digital journeys through partner platforms',
                  'Financing focused on urban and semi-urban customers via our partner ecosystem',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-green-400 mr-2 text-lg mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Documents Section */}
            <motion.div
              className="bg-white/5 border border-white/20 rounded-xl p-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3 text-green-300">
                Documents Required for Buying Mobile on EMI
              </h3>
              <p className="text-sm text-gray-100 mb-4 leading-relaxed">
                Knowing the right documents simplifies the process and makes it faster. Here are the documents required for
                your mobile loan:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    title: 'KYC Documents',
                    description: 'Copy of Voter’s ID, Driving Licence, Aadhaar Card, PAN Card, or Passport',
                  },
                  {
                    title: 'Address Proof',
                    description: 'Copy of Ration Card, Passport, or Electricity Bill',
                  },
                ].map(({ title, description }) => (
                  <div key={title} className="bg-white/10 rounded-lg p-3">
                    <p className="font-semibold mb-1 text-gray-100">{title}</p>
                    <p className="text-sm text-gray-200">{description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinTechFinance;
