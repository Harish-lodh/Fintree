import { FaFilePdf } from "react-icons/fa";

const ResignationOfDirector = () => {
  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto p-6 border-b">
      <h2 className="text-xl font-medium text-gray-800">
        Resignation of Director
      </h2>

      <a
        href="https://fintreefinance.com/wp-content/uploads/2024/01/Resignation-letter_Sushant-Konde-1.pdf.pdf" // Replace with actual PDF path
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded transition"
      >
        <FaFilePdf className="text-lg" />
        Download Now
      </a>
    </div>
  );
};

export default ResignationOfDirector;