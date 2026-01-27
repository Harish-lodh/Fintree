import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import cg from '../assets/img/corporate-governance.webp'
import disclosure1 from "../Documents/Public disclosure LRM Dec'24_FFPL.pdf"
import disclosure2 from "../Documents/Public disclosure LRM Jun'25_FFPL.pdf"
import disclosure3 from "../Documents/Public disclosure LRM Mar'25_FFPL.pdf"
import dis_dec25 from "../Documents/Disclosure LRM Dec25.pdf";
import dis_sep25 from "../Documents/Disclosure LRM Sep25.pdf";

const notices = [
  { title: "Disclosure LRM dec 2025", link: `${dis_dec25}` },
  { title: "Disclosure LRM sep 2025", link: `${dis_sep25}` },
  { title: "Disclosure LRM jun 2025", link: `${disclosure2}` },
  { title: "Disclosure LRM mar 2025", link: `${disclosure3}` },
  { title: "Disclosure LRM dec 2024", link: `${disclosure1}` },


];

const Riskmanagements = () => {
  return (
    <>
      <div className='w-full mt-1'>
        <img src={cg} className='h-80 object-cover w-full' />
      </div>
      <div className="max-w-4xl mx-auto p-6">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-6 border-b pb-3"
          >
            <p className="text-lg text-gray-800">{notice.title}</p>
            <a
              href={notice.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded transition"
            >
              <PictureAsPdfIcon />
              {"View Pdf"}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Riskmanagements;
