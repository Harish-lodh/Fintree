import lapImage from '../assets/product-img/products-img.jpg'

const branches = [
  {
    name: "Sankeshwar",
    address:
      "Office #F2, 1st Floor, R. R. Complex, Near Ganesh Temple, Ankali Road, Sankeshwar - 591313",
  },
  {
    name: "Sindhanur",
    address:
      "1st Floor, Behind Aarvik Delight Hotel, Railway Station Road, Ward No. 19, Sindhanur - 584128",
  },
  {
    name: "Belgaum",
    address:
      "Ground Floor, Sharada Plaza, Mahantesh Nagar, Gokak Road, Belagavi, Karnataka - 590016",
  },
  {
    name: "Raichur",
    address:
      "H. No. 1-11-38/7, Ground Floor, Athanur Paradise, Basaveshwara Colony, Lingasgur Road, Raichur - 584101",
  },
  {
    name: "Yaragatti",
    address:
      "TPC No. 1287/A/B, First Floor, Mahantesh Nagar, Bagalkot Road, Yaragatti - 591129",
  },
  {
    name: "Talikoti",
    address:
      "House Reg. No. 261/A, Plot No. 141, Ward No. 1, Devara Hipparagi Road, Talikoti - 586214",
  },
  {
    name: "Mudhol",
    address:
      "CTS No. 2300A/29, 1st Floor, Unit No. 1, Near Sangoli Rayanna Circle, Mahalingapur Road, Mudhol - 587313",
  },
  {
    name: "Shahapur",
    address:
      "4-74/54 & 55, Kavita Complex, Ganesh Nagar, Bangalore–Bidar Road, Shahapur - 585223",
  },
  {
    name: "Kalaburagi",
    address:
      "9-587/106/35, Ground Floor, Shivaratna Sankarna, Aland Road, Devinagar, Kalaburagi - 585101",
  },
  {
    name: "Lingasgur",
    address:
      "2-11-373/1, Sanjay Reddy Complex, 1st Floor, Opp. Laxmi Temple, Raichur Road, Lingasgur - 584122",
  },
  {
    name: "Vijayapura",
    address:
      "Shapeti Galli, Opp. Punjab National Bank, Vijayapura - 586101",
  },
  {
    name: "Mudalgi",
    address:
      "TMC No. 905/C, Karemmadevi Circle, Near Basaveshwar Urban Co-op Credit Society, Mudalgi - 591312",
  },
];

const LAP = () => {
  return (
    <>
      {/* LAP Section */}
      <div className="bg-gradient-to-r from-[#043347] to-[#0d5c8b] py-12 px-6 md:px-16 text-white flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <img src={lapImage} alt="Loan Against Property" className="w-full max-w-md mx-auto" />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Financing India's Tier 2 & 3 Aspirations
          </h2>
          <p className="mb-4 leading-relaxed">
            At Fintree, we believe credit should be <span className="font-semibold">inclusive, affordable, and accessible</span>.
            Our <span className="font-semibold">Loan Against Property (LAP)</span> product is specifically tailored for
            self-employed individuals and small business owners in <span className="font-semibold">Tier 2 and Tier 3 cities</span>.
            We provide secured funding with minimal documentation and doorstep service, unlocking value from your residential
            or commercial property.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center">
              <span className="text-green-400 text-lg mr-2">✅</span>
              <span><span className="font-bold">Loan Range:</span> ₹2 lakhs to ₹50 lakhs</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 text-lg mr-2">✅</span>
              <span><span className="font-bold">Tenure:</span> 3 to 15 years</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 text-lg mr-2">✅</span>
              <span><span className="font-bold">Repayment Frequency:</span> Monthly</span>
            </li>
          </ul>
          <p className="leading-relaxed">
            Whether it's business expansion, working capital requirement, or starting a new business, our
            <span className="font-semibold"> affordable LAP solution</span> is designed to support entrepreneurs and households
            beyond the metro cities. Our strong local presence and DST sourcing model ensure we reach even the remotest corners
            with fast approvals and personalized service.
          </p>
        </div>
      </div>

      {/* Branches Section - Now Below LAP */}
      <div className="bg-gray-50 py-14 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#043347] mb-10">
          Our Active Branches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-[#0d5c8b] mb-2">
                {branch.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {branch.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LAP;