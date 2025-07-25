// src/components/ServiceCard.jsx
// any is changed to never. 
const ServiceCard = ({ title, description }:never) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default ServiceCard;
