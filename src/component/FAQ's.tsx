import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<string | number, boolean>>({ 1: true });

  const faqData =
  [
  {
    "id": 1,
    "question": "What financial services does Fintree Finance offer?",
    "answer": "Fintree Finance offers a wide range of lending solutions to enterprises, SMEs (Small and Medium Enterprises), and individuals, with loan products spanning Supply Chain Financing, Loan Against Property, Education Loans, Personal Loans, Consumer Durable Financing, and EV Financing across India."
  },
  {
    "id": 2,
    "question": "What is the minimum loan amount?",
    "answer": "The minimum loan amount offered by Fintree Finance depends on the specific loan product type."
  },
  {
    "id": 3,
    "question": "How do I get in touch with Fintree Finance Private Limited?",
    "answer": "You can reach us through:\n\nHelpline:18002678111, 10:30 AM to 6:30 PM, Monday to Saturday (Closed on National Holidays)\nService Branches: 10:30 AM to 6:30 PM, Monday to Friday & Saturdays (1st, 3rd, and 4th Saturdays are working. Branch closed on Sundays and National Holidays)"
  },
  {
    "id": 4,
    "question": "Why should I opt for a loan from Fintree Finance Private Limited?",
    "answer": "We offer:\n• Customised solutions and hassle-free financing\n• Complete transparency in charges and processes\n• Quick approvals and minimal processing/disbursement time\n• Choice between simple EMIs or structured repayment options"
  }
]

  const toggleItem = (id: any) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen  my-5 to-purple-50">
      {/* Hero Section */}
       <h1 className="text-3xl font-bold my-2 text-center text-blue-800">
        Frequently Asked Questions
      </h1>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-2 py-2">
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-400"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-4 focus:outline-none  rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openItems[item.id] 
                          ? 'bg-gradient-to-r from-blue-700 to-green-500 text-white' 
                          : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-500'
                      }`}>
                        <AutoAwesomeIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300 pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 transition-all duration-300 ${
                    openItems[item.id] ? 'transform rotate-180' : ''
                  }`}>
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-800 to-green-300 text-white">
                      <ExpandMoreIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openItems[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-400">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>


    </div>
  );
};

export default FAQ;