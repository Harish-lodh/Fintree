import lalit from "../assets/teams/lalit.png";
import rajesh from "../assets/teams/Rajesh.png";
import sandeep from "../assets/teams/Sandeep-chhowala-CFO.png";
import vinod from "../assets/teams/vinod-singh-1.png";
import nasir from "../assets/teams/nasir-shayad-1.png";

const team = [
  {
    name: "Lalit Shah",
    title: "Managing Director & Founder",
    image: lalit, // Replace with actual path
    description:
      "With deep business acumen and strategic vision, Lalit Shah has steered Fintree's growth. He's known for efficient fundraising and identifying optimal deployment opportunities at competitive rates.",
  },
  {
    name: "Rajesh Dubey",
    title: "Director & CEO",
    image: rajesh,
    description:
      "A CA and Cost Accountant with 30+ years in Credit & Risk, Rajesh pioneered India's first SME rating agency and developed credit risk tools used across Asia. He helped launch CGTMSE, enabling collateral-free loans to MSMEs.",
  },
  {
    name: "Sandeep Chhowala",
    title: "Chief Financial Officer (CFO)",
    image: sandeep,
    description:
      "A finance expert with 15+ years across NBFCs and real estate, Sandeep specializes in fundraising, treasury, investor relations, and financial controls. He also oversees HR and compliance operations.",
  },
  {
    name: "Vinod Singh",
    title: "Vice President, IT",
    image: vinod,
    description:
      "Vinod has 18+ years of experience in IT project management and implementation of core lending systems like FinnOne across major Indian banks and NBFCs. He ensures technology-driven operational excellence.",
  },
  {
    name: "Nasir Sayed",
    title: "Chief Business Officer (CBO)",
    image: nasir,
    description:
      "With 25+ years in SME, mortgage, and business lending, Nasir held leadership roles in Standard Chartered and more. He co-founded a P2P lending startup and managed secured lending strategies at Ambit Finvest.",
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">About Fintree Finance</h1>

      <p className="text-lg mb-6">
        With over <strong>six years of experience</strong> in the lending sector,{" "}
        <span className="font-semibold text-indigo-700">Fintree Finance</span> has
        become a trusted partner for{" "}
        <strong>
          Enterprises, SMEs, Personal, Consumer Durable, and EV Financing
        </strong>{" "}
        across India.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-indigo-800">Our Mission</h2>
      <p className="mb-6">
        To provide innovative and inclusive financial solutions that empower individuals
        and businesses, especially MSMEs, to grow sustainably through access to
        hassle-free credit and cutting-edge digital infrastructure.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-indigo-800">Our Vision</h2>
      <p className="mb-6">
        To be India’s most customer-centric lending platform, bridging credit gaps by
        leveraging technology and partnerships—fueling inclusive growth for millions.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-indigo-800">Our Offerings</h2>
      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
        <li>
          <strong>Loan Against Property:</strong> Unlocking the value of your assets.
        </li>
        <li>
          <strong>Supply Chain Financing:</strong> Supporting businesses with working
          capital needs.
        </li>

        <li>
          <strong>Consumer Durable Loans:</strong> Easy financing for daily essentials.
        </li>

        <li>
          <strong>EV Finance:</strong> Driving green mobility with electric vehicle
          financing.
        </li>
      </ol>

      <div className="my-10 border-t border-gray-300" />

      <h2 className="text-2xl font-bold mb-6 text-indigo-800">Meet Our Leadership Team</h2>

      <div className="space-y-6">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-indigo-700">{member.name}</h3>
              <p className="text-sm font-semibold text-gray-600 mb-2">{member.title}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-10 border-t border-gray-300" />

      <p className="text-md mt-6">
        Backed by advanced analytics, co-lending partnerships, and a digital-first
        approach, we’re redefining financial inclusion—making borrowing easy,
        transparent, and empowering for India’s emerging economy.
      </p>
    </div>
  );
};

export default About;
