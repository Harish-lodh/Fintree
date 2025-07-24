// src/components/ServiceList.jsx
import ServiceCard from "./services/index";

const services = [

  {
    title: "Supply Chain Financing",
    description: "Working capital support for supplier–buyer networks.",
  },
  {
    title: "Loan Against Property",
    description: "Finance secured against residential or commercial property.",
  },
  {
    title: "Consumer Durable Loans",
    description: "Financing for electronics and appliances purchases.",
  },

  {
    title: "EV Financing",
    description: "Loans to purchase electric vehicles for individuals or businesses.",
  },
];

const ServiceList = () => {
  return (
    <section className="py-4 px-4 md:px-10 ">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Fintree Finance Services
      </h2>
      <div className="grid gap-6 lg:mx-25 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
