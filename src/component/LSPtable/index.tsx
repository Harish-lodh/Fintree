import { useState, useMemo, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LaunchIcon from "@mui/icons-material/Launch";
import contactBanner from '../../assets/img/contact-banner.jpg'




const showValue = (value:any) => {
  return value && value.toString().trim() !== "" ? value : "-";
};

const lspData = [
  {
    sno: "01.",
    name: "PSI PHI GLOBAL SOLUTIONS PRIVATE LIMITED",
    appName: "Okcredit",
    product: "Unsecured Business Loan",
    nameOfOfficer: "Jayanth Bhatt",
    mobileNumber: "6364690681",
    emailId: "help@okcredit.in",
    website: "OkCredit",
    websiteUrl: "https://okcredit.in",
  },
  {
    sno: "02",
    name: "SAGAR DEPOSITS AND ADVANCE LIMITED",
    appName: "",
    product: "Personal loan",
    nameOfOfficer: "Ayush Sharma",
    mobileNumber: "7742127239",
    emailId: "INFO@SDAL.IN",
    website: "sagar-deposits",
    websiteUrl: "https://sagar-deposits.com",
  },
  {
    sno: "03",
    name: "UPKRAM TECHNOLOGIES PRIVATE LIMITED",
    appName: "CREDIN",
    product: "Unsecured business loan/term loan, Loan against",
    nameOfOfficer: "",
    mobileNumber: "",
    emailId: "",
    website: "Credin",
    websiteUrl: "https://credin.in",
  },
  {
    sno: "04",
    name: "TRUSTBRIDGE TECHNOLOGIES PRIVATE LIMITED",
    appName: "Aldun",
    product: "instant discharge and reimbursement product",
    nameOfOfficer: "Shivani Thorbole",
    mobileNumber: "",
    emailId: "grievance@theemiclub.com",
    website: "",
  },
  {
    sno: "05",
    name: "VIDYASOH HEALTHCARE TECH SERVICE PRIVATE LIMITED",
    appName: "HEALTHCRED",
    product: "Medical reimbursement loan",
    nameOfOfficer: "",
    mobileNumber: "",
    emailId: "",
    website: "",
  },
  {
    sno: "06",
    name: "Grayquest Education Finance Pvt. Ltd.",
    appName: "",
    product: "Finance education fees",
    nameOfOfficer: "Ranjeet Singh Rawat",
    mobileNumber: "8356843634",
    emailId: "support@grayquest.com",
    website: "Grayquest",
    websiteUrl: "https://www.grayquest.com/",
  },
  {
    sno: "07",
    name: "Malhotra Auto",
    appName: "",
    product: "E rickshaw financing",
    website: "",
  },
  {
    sno: "08",
    name: "Narendra Finance Company Private Limited",
    appName: "Adikosh",
    product: "Personal Loan",
    nameOfOfficer: "",
    mobileNumber: "",
    emailId: "",
    website: "nfcpl",
    websiteUrl: "https://nfcpl.in/",
  },
  {
    sno: "09",
    name: "Circle Pe Private Limited",
    appName: "Circel Pe",
    product: "Zero security deposit",
    nameOfOfficer: "",
    mobileNumber: "",
    emailId: "",
    website: "CirclePe",
    websiteUrl: "https://circlepe.club/",
  },
  {
    sno: "10",
    name: "Embifi Global Services Private Limited",
    appName: "",
    product: "E rickshaw financing",
    nameOfOfficer: "Gaurav Parashar",
    mobileNumber: "8448559088",
    emailId: "compliance@embifi.in",
    website: "Embifi",
    websiteUrl: "https://www.embifi.in/",
  },
  {
    sno: "11",
    name: "Mash Technologies Private Limited",
    appName: "Emi club",
    product: "Consumer durables",
    nameOfOfficer: "Shivani Thorbole",
    mobileNumber: "9167762227",
    emailId: "grievance@theemiclub.com",
    website: "Theemiclub",
    websiteUrl: "https://theemiclub.com/",
  },
  {
    sno: "12",
    name: "Fundfina Marketplace Pvt Ltd",
    appName: "",
    product: "Merchant Brisk- Short term loans",
    nameOfOfficer: "",
    mobileNumber: "",
    emailId: "",
    website: "Fundfina",
    websiteUrl: "https://www.fundfina.com/",
  },
  {
    sno: "13",
    name: "Paytail commerce Pvt Ltd",
    appName: "",
    product: "Consumer durables",
    nameOfOfficer: "",
    mobileNumber: "",
    emailId: "",
    website: "",
  },
  {
    sno: "14",
    name: "Gajju Technologies Pvt Ltd",
    appName: "",
    product: "Unsecured loan for education",
    nameOfOfficer: "",
    mobileNumber: "",
    emailId: "",
    website: "",
  },
  {
    sno: "15",
    name: "Sarvam Fintech Pvt Ltd",
    appName: "",
    product: "Education loan",
    nameOfOfficer: "",
    mobileNumber: "",
    emailId: "",
    website: "",
  },
];

const LSPTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return lspData.filter((item) =>
      (item.name + item.appName + item.product + item.website)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, itemsPerPage]);

  return (
    <>
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >

      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">




        {/* Controls */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-42 py-6  bg-gray-50 border-b ">
          <div className="flex flex-col sm:flex-row  justify-between items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search LSPs, apps, or products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Show:</label>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {[5, 10, 15, 25].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-700">entries</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="px-4 sm:px-8 md:px-16 lg:px-42 py-6 mx-auto">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                {["S.NO", "Name of LSP", "App Name", "Product", "Name of Grievance Redressal Officer", "Mobile number of Grievance Redressal Officer", "Email id of Grievance Redressal Officer", "Website"].map((head, i) => (
                  <th
                    key={i}
                    className="px-6 py-4 text-left text-xs font-bold bg-green-300 text-gray-600 uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentData.map((item, index) => (
                <tr key={index} className="hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
  {showValue(item.sno)}
</td>

<td className="px-6 py-4 text-sm text-gray-900">
  {showValue(item.name)}
</td>

<td className="px-6 py-4 text-sm text-gray-900">
  {item.appName ? (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      {item.appName}
    </span>
  ) : (
    <span className="text-gray-400">-</span>
  )}
</td>

<td className="px-6 py-4 text-sm text-gray-900">
  {showValue(item.product)}
</td>

<td className="px-6 py-4 text-sm text-gray-900">
  {showValue(item.nameOfOfficer)}
</td>

<td className="px-6 py-4 text-sm text-gray-900">
  {showValue(item.mobileNumber)}
</td>

<td className="px-6 py-4 text-sm text-gray-900">
  {showValue(item.emailId)}
</td>

<td className="px-6 py-4 text-sm">
  {item.websiteUrl ? (
    <a
      href={item.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
    >
      {showValue(item.website)}
      <LaunchIcon className="ml-1" style={{ fontSize: "16px" }} />
    </a>
  ) : (
    <span className="text-gray-400">-</span>
  )}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-42 py-6  border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of{" "}
              {filteredData.length} entries
              {searchTerm && ` (filtered from ${lspData.length})`}
            </div>

            <div className="flex items-center space-x-3 ">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeftIcon fontSize="small" />
              </button>

              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronRightIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default LSPTable;
