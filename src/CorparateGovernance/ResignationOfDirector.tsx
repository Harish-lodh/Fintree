import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import resignation from '../Documents/Resignation-letter_Sushant-Konde-1.pdf'
const ResignationOfDirector = () => {
  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto p-6 border-b">
      <h2 className="text-xl font-medium text-gray-800">
        Resignation of Director
      </h2>

      <a
        href={resignation}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded transition"
      >
        <PictureAsPdfIcon fontSize="small" />
        Download Now
      </a>
    </div>
  );
};

export default ResignationOfDirector;
