import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import notice_2024 from '../Documents/Signed-Notice_AGM_2024.pdf'
import notice_2023 from '../Documents/Notice-of-AGM-2023.pdf'
import notice_2022 from '../Documents/AGM-Notice-02-09-2022.pdf'
import notice_2021 from '../Documents/Notice-of-AGM_2021.pdf'
import notice_2020 from '../Documents/Notice-of-AGM-2020.pdf'

const notices = [
  { title: "Notice of AGM 2024", link: `${notice_2024}` },
  { title: "Notice of AGM 2023", link: `${notice_2023}` },
  { title: "Notice of AGM 2022", link: `${notice_2022}` },
  { title: "Notice of AGM 2021", link: `${notice_2021}` },
  { title: "Notice of AGM 2020", link: `${notice_2020}` },
];

const AGMNotices = () => {
  return (
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
  );
};

export default AGMNotices;
