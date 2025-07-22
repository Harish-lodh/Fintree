
import product from '../assets/features/product.png';
import service from '../assets/features/service.png';
import solution from '../assets/features/solution.png';
import trust from '../assets/features/trust.png';
import document from '../assets/features/mini-doc.png';

const FintreeLoansFeatures = () => {
  const features = [
    {
      icon: document,
      title: "Minimum Documentation",
      bgColor: "bg-blue-600"
    },
    {
      icon: service,
      title: "Exceptional Services",
      bgColor: "bg-blue-600"
    },
    {
      icon: trust,
      title: "Reliability and Trust",
      bgColor: "bg-blue-600"
    },
    {
      icon: solution,
      title: "Tailored Solutions",
      bgColor: "bg-blue-600"
    },
    {
      icon: product,
      title: "Innovative Products",
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <div className=" py-4 my-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center my-6">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
            The Key Features of Fintree Loans
          </h1>
          {/* <div className="w-30 h-1 bg-blue-600 mx-auto rounded-full"></div> */}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-8">
          {features.slice(0, 6).map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Icon Circle */}
              <div className="p-2 transition-shadow duration-300">
                <img src={feature.icon} alt={feature.title} className="w-24 h-24 object-contain" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 leading-tight max-w-xs">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FintreeLoansFeatures;
