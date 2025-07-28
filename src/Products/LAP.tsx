
import lapImage from '../assets/product-img/products-img.jpg'


const LAP = () => {
  return (
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
            <span><span className="font-bold">Loan Range:</span> ₹5 lakhs to ₹25 lakhs</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-400 text-lg mr-2">✅</span> 
            <span><span className="font-bold">Tenure:</span> 8 to 10 years</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-400 text-lg mr-2">✅</span> 
            <span><span className="font-bold">Repayment Frequency:</span> Monthly</span>
          </li>
        </ul>

        <p className="leading-relaxed">
          Whether it’s business expansion, working capital requirement, or starting a new business, our 
          <span className="font-semibold"> affordable LAP solution</span> is designed to support entrepreneurs and households 
          beyond the metro cities. Our strong local presence and DST sourcing model ensure we reach even the remotest corners 
          with fast approvals and personalized service.
        </p>
      </div>
    </div>
  );
};

export default LAP;
