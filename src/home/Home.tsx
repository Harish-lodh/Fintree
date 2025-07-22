
import about from '../assets/about_fintree.jpg';
import FintreeLoansFeatures from '../component/features';
import muthood from '../assets/lending/mothoot_logo.webp'
import nfcpl from '../assets/lending/NFCPL.png'
import mdai from '../assets/lending/SDAl.jpg'
import Carousel from '../component/carousel';
import ServiceList from '../component/ServiceList';
import FAQ from '../component/FAQ\'s';
import Footer from '../component/footer';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
    const handleClick = () => {
    navigate("/Form"); // Change to your route
  };
  return (
    <div className="min-h-screen w-full ">
<div className="bg-stone-600 w-full p-2">
  <div className="flex justify-end items-center space-x-4 mr-6">
    <ul className="flex space-x-4">
      <li className="text-white font-semibold hover:underline cursor-pointer">Secured Loan</li>
      <li className="text-white font-semibold hover:underline cursor-pointer">Secured Loan</li>
      <li className="text-white font-semibold hover:underline cursor-pointer">Secured Loan</li>
    </ul>
    <button
      type="button"
      onClick={handleClick}
      className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 my-1 focus:outline-none dark:focus:ring-blue-800"
    >

      Apply Now
    </button>
  </div>
</div>
<div className="bg-blue-100 w-full overflow-hidden whitespace-nowrap marquee-wrapper">
      <p className="text-blue-800 font-semibold py-2 animate-marquee inline-block">
        Disclaimer: This is to inform user/customer (s) that https://fintreefinance.com is the ONLY official website of Fintree Finance Private Limited. The information contained on this website is for general information purposes only. It has come to our notice that Fintree Finance Private Limited's name and/or its logo are being used wrongfully by unauthorized entities to offer personal loans for and on behalf of Fintree Finance Private Limited. User/Customer(s) are cautioned and advised not to rely upon any information stated on any other websites which may appear to be similar to the company's official website, including containing the company's logo/brand name. FINTREE FINANCE PRIVATE LIMITED doesn’t ask for upfront payment in any form and sanctions loans only after assessment. Under no circumstances, FINTREE FINANCE PRIVATE LIMITED shall be liable and/or responsible to honour transactions which do not clearly mention the payment has been made to FINTREE FINANCE PRIVATE LIMITED. Your use of information or materials on other website(s) is entirely at your own risk, for which we shall not be liable. Always check the information on this website carefully before you act. It is clarified that unauthorized use of FINTREE FINANCE PRIVATE LIMITED’s name, its logo and/or its website, is strictly prohibited and may give rise to a claim for damages and/or be tried as a criminal offence. We communicate with our clients and prospects only through the mail ID wecare@fintreefinance.com or email with the fintreefinance.com domain name.
      </p>
    </div>

      <Carousel />
      <div className="flex justify-center my-12 px-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="w-full justify-center md:w-1/2">
            <img
              src={about}
              alt="About Fintree"
              className="w-115  h-auto mx-auto   rounded-xl shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              About Fintree
            </h2>
            <hr className="border-t-2 border-blue-800 mb-4 w-24 mx-auto md:mx-0" />
            <p className="text-gray-700 text-base leading-relaxed">
              Fintree Finance Pvt. Ltd. is an Impact Lender based out of Mumbai &
              is backed by the veterans from Banking & Fintech Industry.
              <br />
              <br />
              By capitalising over 25 years of experience in the BFSI sector and
              adopting the latest technology, Fintree aims to help the
              under-served MSME segment of the country. Currently operational in
              Mumbai & Delhi, Fintree provides short-tenure loans to merchants
              based on the digital payments that happen at their outlets.
            </p>
            <p className="mt-4 text-blue-800 font-medium cursor-pointer hover:underline">
              Read More...
            </p>
          </div>
        </div>
      </div>
      <ServiceList />

      <FintreeLoansFeatures />
   
      <div className=" flex flex-col items-center  my-10 mx-4">
        <div className="text-blue-800 text-3xl text-center font-bold mb-4">
          Co-lending Partners
        </div>
        <div className="flex gap-8 justify-center items-center w-30">
          <img src={muthood} alt="lending Fintree" />
          <img src={nfcpl} alt="lending Fintree" className="w-20" />
          <img src={mdai} alt="lending Fintree" />
        </div>
      </div>
      <FAQ/>
<Footer/>
    </div>
  );
};

export default Home;
