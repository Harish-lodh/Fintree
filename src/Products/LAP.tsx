import { useState } from 'react';
import lapImage from '../assets/product-img/products-img.jpg';

const branches = [
  { name: "Sankeshwar", address: "Office #F2, 1st Floor, R. R. Complex, Near Ganesh Temple, Ankali Road, Sankeshwar - 591313" },
  { name: "Bidar", address: "Ankur Children Hospital Building, Opp. 2nd Bus Depot, Beside Vishwa Hospital, KSRTC Bus Stop, Devi Colony, Bidar- 585401" },
  { name: "Sindhanur", address: "1st Floor, Behind Aarvik Delight Hotel, Railway Station Road, Ward No. 19, Sindhanur - 584128" },
  { name: "Belgaum", address: "Ground Floor, Sharada Plaza, Mahantesh Nagar, Gokak Road, Belagavi, Karnataka - 590016" },
  { name: "Raichur", address: "H. No. 1-11-38/7, Ground Floor, Athanur Paradise, Basaveshwara Colony, Lingasgur Road, Raichur - 584101" },
  { name: "Yaragatti", address: "TPC No. 1287/A/B, First Floor, Mahantesh Nagar, Bagalkot Road, Yaragatti - 591129" },
  { name: "Talikoti", address: "House Reg. No. 261/A, Plot No. 141, Ward No. 1, Devara Hipparagi Road, Talikoti - 586214" },
  { name: "Mudhol", address: "CTS No. 2300A/29, 1st Floor, Unit No. 1, Near Sangoli Rayanna Circle, Mahalingapur Road, Mudhol - 587313" },
  { name: "Shahapur", address: "4-74/54 & 55, Kavita Complex, Ganesh Nagar, Bangalore–Bidar Road, Shahapur - 585223" },
  { name: "Kalaburagi", address: "9-587/106/35, Ground Floor, Shivaratna Sankarna, Aland Road, Devinagar, Kalaburagi - 585101" },
  { name: "Lingasgur", address: "2-11-373/1, Sanjay Reddy Complex, 1st Floor, Opp. Laxmi Temple, Raichur Road, Lingasgur - 584122" },
  { name: "Vijayapura", address: "Shapeti Galli, Opp. Punjab National Bank, Vijayapura - 586101" },
  { name: "Mudalgi", address: "TMC No. 905/C, Karemmadevi Circle, Near Basaveshwar Urban Co-op Credit Society, Mudalgi - 591312" },
];

const LAP = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(null);

  const filteredBranches = branches.filter(branch =>
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* LAP HERO SECTION */}
      <div className="bg-slate-800 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img src={lapImage} alt="Loan Against Property" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Financing India’s Tier 2 & 3 Aspirations
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            Our Loan Against Property (LAP) solution is designed for self-employed
            individuals and small business owners, offering secured funding with
            minimal documentation and doorstep service.
          </p>

          <ul className="space-y-2 text-slate-200">
            <li>✔ Loan Range: ₹2 Lakhs – ₹50 Lakhs</li>
            <li>✔ Tenure: 3 – 15 Years</li>
            <li>✔ Monthly Repayment</li>
          </ul>
        </div>
      </div>

      {/* BRANCH SECTION */}
      <div className="bg-slate-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-slate-800 mb-2">
              Our Active Branches
            </h2>
            <p className="text-slate-600">
              Search and locate your nearest branch
            </p>
          </div>

          {/* SEARCH */}
          <div className="max-w-xl mx-auto mb-10">
            <input
              type="text"
              placeholder="Search by city or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border border-slate-300
              focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none"
            />
          </div>

          {/* BRANCH GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((branch, index) => (
              <div
                key={index}
                onClick={() => setSelectedBranch(index)}
                className={`bg-white rounded-xl border shadow-sm hover:shadow-md transition
                ${selectedBranch === index ? 'border-indigo-400' : 'border-slate-200'}`}
              >
                <div className="bg-green-200 text-blue px-5 py-4 rounded-t-xl">
                  <h3 className="text-lg font-medium">{branch.name}</h3>
                </div>

                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4">
                    {branch.address}
                  </p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-800 hover:bg-blue-900
                    text-white py-2 rounded-lg font-medium transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* NO RESULTS */}
          {filteredBranches.length === 0 && (
            <div className="text-center text-slate-600 mt-16">
              No branches found. Try a different search.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LAP;
