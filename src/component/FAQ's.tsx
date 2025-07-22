import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<string | number, boolean>>({ 1: true });

  const faqData = [
    {
      id: 1,
      question: "What financial services does Fintree Finance offer?",
      answer: "Fintree Finance provides comprehensive financial planning, investment management, wealth advisory services, portfolio management, retirement planning, and tax optimization strategies. We focus on personalized solutions for individuals, families, and businesses."
    },

    {
      id: 3,
      question: "What is the minimum investment required to get started?",
      answer: "We believe financial planning should be accessible to everyone. Our minimum investment starts at $10,000 for managed portfolios, with flexible payment options and scalable service tiers to accommodate different financial situations."
    },

    {
      id: 5,
      question: "What makes Fintree Finance trustworthy and secure?",
      answer: "Fintree Finance is a SEC-registered investment advisor with comprehensive insurance coverage. We use bank-level security, segregated client accounts, and undergo regular third-party audits. Your assets are held with top-tier custodians for maximum protection."
    },
    {
      id: 6,
      question: "How often will I receive updates on my investments?",
      answer: "You'll have 24/7 access to your portfolio through our secure client portal and mobile app. We provide quarterly performance reports, monthly market insights, and real-time notifications for significant portfolio changes or market events."
    },
    {
      id: 7,
      question: "Does Fintree Finance offer retirement planning services?",
      answer: "Yes, retirement planning is one of our core specialties. We provide comprehensive 401(k) optimization, IRA management, pension planning, Social Security maximization strategies, and create detailed retirement income projections tailored to your lifestyle goals."
    },

  ];

  const toggleItem = (id: any) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen  my-14 to-purple-50">
      {/* Hero Section */}
       <h1 className="text-3xl font-bold text-center text-blue-800">
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
                        <Sparkles className="w-4 h-4" />
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
                      <ChevronDown className="w-5 h-5" />
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