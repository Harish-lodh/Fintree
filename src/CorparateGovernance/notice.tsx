import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const notices = [
  { title: "Notice of AGM 2024", link: "https://fintreefinance.com/wp-content/uploads/2024/10/Signed-Notice_AGM_2024.pdf" },
  { title: "Notice of AGM 2023", link: "https://fintreefinance.com/wp-content/uploads/2024/02/Notice-of-AGM-2023.pdf" },
  { title: "Notice of AGM 2022", link: "https://fintreefinance.com/wp-content/uploads/2022/09/AGM-Notice-02-09-2022.pdf" },
  { title: "Notice of AGM 2021", link: "https://fintreefinance.com/wp-content/uploads/2022/03/Notice-of-AGM_2021.pdf", label: "Download PDF" },
  { title: "Notice of AGM 2020", link: "https://fintreefinance.com/wp-content/uploads/2024/02/Notice-of-AGM-2020.pdf" },
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
            {notice.label || "Download Pdf"}
          </a>
        </div>
      ))}
    </div>
  );
};

export default AGMNotices;
