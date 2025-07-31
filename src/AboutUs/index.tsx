import lalit from "../assets/teams/lalit.png";
import rajesh from "../assets/teams/Rajesh.png";
import sandeep from "../assets/teams/Sandeep-chhowala-CFO.png";
import vinod from "../assets/teams/vinod-singh-1.png";
import nasir from "../assets/teams/nasir-shayad-1.png";

const team = [
  {
    name: "Lalit Shah",
    title: "Managing Director & Founder",
    image: lalit,
    description:
      "With his deep business acumen and strategic vision, he has been instrumental in steering the company's growth and long-term objectives.His expertise lies in efficiently raising resources at highly competitive rates, even on short notice. A seasoned veteran, he excels in identifying and creating opportunities for optimal resource deployment at attractive terms.",
  },
  {
    name: "Rajesh Dubey",
    title: "Director & CEO",
    image: rajesh,
    description:
      "A Chartered Accountant and Cost Accountant with over three decades of expertise in Credit & Risk Management, he has played a pivotal role in shaping the SME lending landscape. He was instrumental in conceptualizing and establishing the first-ever rating agency for SMEs, successfully leading the company through its initial three years of operations.\n\nHis contributions extend to the setup and operationalization of CGFTMSE, a credit guarantee organization designed to facilitate collateral-free credit access for the micro and small business sector.He has also developed advanced rating models for assessing credit risk in SME lending, benefiting banks across the SAARC and Southeast Asian regions. Additionally, he pioneered an early warning signal tool that leverages transaction behavior in checking accounts to identify potential risks for small and mid-sized businesses.",
  },
  {
    name: "Sandeep Chhowala",
    title: "Chief Financial Officer (CFO)",
    image: sandeep,
    description:
      "A Chartered Accountant and seasoned finance professional with over 15 years of diverse experience, he has played a key role in strengthening companies across various industries, including NBFCs and real estate. Before joining Fintree Finance, he contributed to the success of organizations such as Capri Global Capital Limited, The Phoenix Mills Limited, Ogilvy & Mather Private Limited, and Everest Developers.\n\nHis expertise spans fund raising, structuring financial deals tailored to organizational needs, corporate treasury management, and investor relations.Additionally, he has a strong command over planning & budgeting, accounting, taxation, auditing, compliance management, and financial & operational controls. Beyond finance, he also oversees the HR function, ensuring seamless organizational growth and efficiency.",
  },
  {
    name: "Vinod Singh",
    title: "Vice President, IT",
    image: vinod,
    description:
      "A dynamic IT professional with over 18 years of experience in IT applications, business requirement gathering, continuity planning, project management, and technology implementation. Adept at project planning, budgeting, business function analysis, change management, UAT, and end-user training.\n\nHe has led the implementation, training, and support of the Core Lending Solution (FinnOne) at Fedbank Financial Services for Loan Against Property (LAP), Gold Loans, and Personal Loans.His expertise extends to core banking solution implementations for leading financial institutions, including Bank of India, Bank of Baroda, Federal Bank, UCO Bank, Centurion Bank of Punjab, and Kotak Mahindra Bank. As a senior member of the IT team at Fedbank, he played a key role in overseeing IT initiatives and ensuring seamless operations.",
  },
  {
    name: "Nasir Sayed",
    title: "Chief Business Officer (CBO)",
    image: nasir,
    description:
      "A seasoned banking professional with over 25 years of experience in general management, business strategy, and risk management. He has held leadership roles across consumer lending, SME lending, mortgage loans, and personal/secured business loans in major foreign banks and financial institutions, including Standard Chartered, Development Credit Bank, and Union National Bank (UAE).\n\nHe was a founding member and EVP at Ambit Finvest (formerly Volition Credit & Holdings), where he focused on affordable and prime secured lending.As the Co-Founder and Chief Business Officer of a peer-to-peer lending startup, he managed LAP portfolios under BC arrangements and led collections from stressed assets.",
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
          Enterprises, SMEs, Personal, Education Loan, and EV Financing
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
  <strong>Education Loan:</strong> Enabling students to access quality education by financing tuition fees, living expenses, and other academic costs.
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
              <p className="text-gray-700 whitespace-pre-line">{member.description}</p>
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