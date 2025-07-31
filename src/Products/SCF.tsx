
import scfimg from '../assets/product-img/SUPPLY-CHAIN-FINANCING.jpg'



const SCF = () => {
  return(
    <>
       <div className="bg-gradient-to-r from-[#003341] to-[#005B82] py-12 px-6 md:px-24 text-white ">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
  <div className="flex-1">
        <img src={scfimg} alt="fintech" className="w-full max-w-md mx-auto" />
      </div>
        {/* Content Section */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Empowering Dealers & Distributors</h2>

          <p className="mb-4 leading-relaxed">
            Fintree Finance is a pioneer in <span className="font-semibold">Unsecured Supply Chain Financing</span>, 
            in the <span className="font-semibold">Stainless Steel Market</span>. With deep domain knowledge and a robust underwriting engine, 
            we offer <span className="font-semibold">purchase invoice discounting</span> revolving facility on-demand, 
            ranging from <span className="font-semibold">₹20 lakhs to ₹3 crores</span>, ensuring businesses never face working capital shortages.
          </p>

          <h3 className="text-lg font-semibold mb-2">Key features:</h3>

          <ul className="mb-6 space-y-2">
            <li className="flex items-center">
              <span className="text-green-400 text-lg mr-2">✅</span> 
              <span><span className="font-bold">Security:</span> unsecured</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 text-lg mr-2">✅</span> 
              <span><span className="font-bold">Facility Tenure:</span> Up to 1 year</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 text-lg mr-2">✅</span> 
              <span><span className="font-bold">Credit Period:</span> 90 days from the date of discounting, provided the invoice is discounted within 30 days from the date of the invoice</span>
            </li>
          </ul>

          <p className="mb-4 font-semibold">
            AUM in FY24-25: <span className="font-normal">Rs. 156.59 Cr with Disbursement of Rs. 427.11 Cr</span>
          </p>

          <p className="leading-relaxed">
            With strategic alliances with reputed institutions like <span className="font-semibold">Muthoot, Cholamandalam,Kite finance and Ambit</span>, 
            we cater to a <span className="font-semibold">₹5000 Cr underserved market</span>. Our model offers 
            <span className="font-semibold"> end-to-end visibility</span>, near-zero delinquency, and 
            <span className="font-semibold"> steady income cycles</span>—making it ideal for growth-focused suppliers and distributors.
          </p>
        </div>

      </div>
    </div>
    </>
  )  
}
export default SCF; 