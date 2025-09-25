import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import cg from '../assets/img/corporate-governance.webp'
import ReleaseofpropertyDocuments from "../Documents/Procedure for Release of property document.pdf"


const notices = [
    { title: "Procedure for Release of property", link: `${ReleaseofpropertyDocuments}` },
 
];

const Releaseofproperty = () => {
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
            { "View Pdf"}
          </a>
        </div>
      ))}
    </div>
    </>
  );
};

export default Releaseofproperty;
