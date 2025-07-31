import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  bankName: string;
  micr: string;
  lan: string;
  mobile: string;
  bankAccount: string;
  nachName: string;
  captchaChecked: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const NachCancellationForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    bankName: "",
    micr: "",
    lan: "",
    mobile: "",
    bankAccount: "",
    nachName: "",
    captchaChecked: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    Object.entries(form).forEach(([key, value]) => {
      if (key !== "captchaChecked" && !value) {
        newErrors[key] = `${key} cannot be blank.`;
      }
    });

    if (!form.captchaChecked) {
      newErrors["captcha"] = "The captcha is missing from this form.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // Handle API call here
    }
  };

  return (
//     <div className="max-w-4xl mx-auto p-8">
//              <h1 className="text-3xl font-extrabold  inline-block px-2 py-1 text-gray-900">
//   NACH CANCELLATION
// </h1>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/** Name */}
//         <div>
//           <label className="block font-medium mb-1">
//             Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className={`w-full border rounded px-3 py-2 ${
//               errors.name ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           <p className="text-sm text-gray-500">
//             Please enter your name (same as the applicant name for your loan with capital india)
//           </p>
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         {/** Email */}
//         <div>
//           <label className="block font-medium mb-1">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className={`w-full border rounded px-3 py-2 ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           <p className="text-sm text-gray-500">Please provide an email id if you have.</p>
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>

//         {/** Bank Name */}
//         <div>
//           <label className="block font-medium mb-1">
//             Bank Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="bankName"
//             value={form.bankName}
//             onChange={handleChange}
//             placeholder="Bank Name"
//             className={`w-full border rounded px-3 py-2 ${
//               errors.bankName ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           <p className="text-sm text-gray-500">Name of the bank for which the mandate to be cancelled</p>
//           {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName}</p>}
//         </div>

//         {/** MICR */}
//         <div>
//           <label className="block font-medium mb-1">
//             MICR <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="micr"
//             value={form.micr}
//             onChange={handleChange}
//             placeholder="MICR"
//             className={`w-full border rounded px-3 py-2 ${
//               errors.micr ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           <p className="text-sm text-gray-500">MICR number of above bank account</p>
//           {errors.micr && <p className="text-red-500 text-sm">{errors.micr}</p>}
//         </div>

//         {/** LAN */}
//         <div>
//           <label className="block font-medium mb-1">
//             Loan Account Number (LAN) <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="lan"
//             value={form.lan}
//             onChange={handleChange}
//             placeholder="Loan Account Number (LAN)"
//             className={`w-full border rounded px-3 py-2 ${
//               errors.lan ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           <p className="text-sm text-gray-500">16 digits LAN with Capital India</p>
//           {errors.lan && <p className="text-red-500 text-sm">{errors.lan}</p>}
//         </div>

//         {/** Mobile */}
//         <div>
//           <label className="block font-medium mb-1">
//             10 Digit Mobile Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="mobile"
//             value={form.mobile}
//             onChange={handleChange}
//             placeholder="10 Digit Mobile Number"
//             className={`w-full border rounded px-3 py-2 ${
//               errors.mobile ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           <p className="text-sm text-gray-500">We will contact you here with an update</p>
//           {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
//         </div>

//         {/** NACH Name */}
//         <div>
//           <label className="block font-medium mb-1">
//             Name on NACH Mandate <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="nachName"
//             value={form.nachName}
//             onChange={handleChange}
//             placeholder="Name on NACH Mandate"
//             className={`w-full border rounded px-3 py-2 ${
//               errors.nachName ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           <p className="text-sm text-gray-500">Name on NACH Mandate</p>
//           {errors.nachName && <p className="text-red-500 text-sm">{errors.nachName}</p>}
//         </div>

//         {/** Bank Account */}
//         <div>
//           <label className="block font-medium mb-1">
//             Bank Account Number <span className="text-red-500">*</span>
//           </label>
//           <input
//             name="bankAccount"
//             value={form.bankAccount}
//             onChange={handleChange}
//             placeholder="Bank Account Number"
//             className={`w-full border rounded px-3 py-2 ${
//               errors.bankAccount ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           <p className="text-sm text-gray-500">Account number for the above bank mandate to be cancelled</p>
//           {errors.bankAccount && <p className="text-red-500 text-sm">{errors.bankAccount}</p>}
//         </div>

//         {/** Captcha */}
//         <div className="md:col-span-2">
//           <label className="flex items-center border p-4 rounded-md cursor-pointer w-fit">
//             <input
//               type="checkbox"
//               name="captchaChecked"
//               checked={form.captchaChecked}
//               onChange={handleChange}
//               className="mr-3 w-5 h-5"
//             />
//             I'm not a robot
//           </label>
//           {errors.captcha && <p className="text-red-500 text-sm mt-2">{errors.captcha}</p>}
//         </div>

//         {/** Submit */}
//         <div className="md:col-span-2">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           >
//             SUBMIT
//           </button>
//         </div>

//       </form>
//     </div>
<></>
  );
};

export default NachCancellationForm;
