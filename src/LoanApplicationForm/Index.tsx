import { useState, type ChangeEvent, type FormEvent } from "react";
import Select from "react-select";

interface FormData {
  loanType: string;
  name: string;
  dob: string;
  mobile: string;
  email: string;
  pincode: string;
  city: string;
  state: string;
  loanAmount: string;
  constitution: string;
  ownershipProof: string;
  businessYears: string;
  gstRegistered: string;
  gstin: string;
}

interface ErrorData {
  [key: string]: string;
}

const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    borderColor: state.isFocused ? "#1e40af" : "rgba(0,0,0,0.3)", // blue-800
    boxShadow: state.isFocused ? "0 0 0 1px #1e40af" : base.boxShadow,
    "&:hover": {
      borderColor: "#1e40af",
    },
    padding: "2px",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#374151", // text-gray-700
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#9ca3af", // gray-400
  }),
};

const LoanApplicationForm = () => {
  const [form, setForm] = useState<FormData>({
    loanType: "",
    name: "",
    dob: "",
    mobile: "",
    email: "",
    pincode: "",
    city: "",
    state: "",
    loanAmount: "",
    constitution: "",
    ownershipProof: "",
    businessYears: "",
    gstRegistered: "",
    gstin: "",
  });

  const [errors, setErrors] = useState<ErrorData>({});

  const validateField = (name: keyof FormData, value: string): true | string => {
    const today = new Date();
    const validations: Record<keyof FormData, () => true | string> = {
      loanType: () => (value ? true : "Please select loan type."),
      name: () =>
        /^[a-zA-Z\s-]{2,100}$/.test(value) ||
        "Name must be 2-100 characters, letters, spaces, or hyphens only.",
      dob: () => {
        const dob = new Date(value);
        if (isNaN(dob.getTime()) || dob > today) return "Invalid or future date.";
        const age =
          today.getFullYear() -
          dob.getFullYear() -
          (today.getMonth() < dob.getMonth() ||
          (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
            ? 1
            : 0);
        return age >= 21 && age <= 58
          ? true
          : `Age must be between 21 and 58. Your age is ${age}.`;
      },
      mobile: () =>
        /^[6-9]\d{9}$/.test(value) ||
        "Mobile must be a 10-digit number starting with 6, 7, 8, or 9.",
      email: () =>
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) || "Invalid email address.",
      pincode: () => /^\d{6}$/.test(value) || "Pincode must be a 6-digit number.",
      city: () =>
        /^[a-zA-Z\s]{2,50}$/.test(value) ||
        "City must be 2-50 characters, letters and spaces only.",
      state: () =>
        /^[a-zA-Z\s]{2,50}$/.test(value) ||
        "State must be 2-50 characters, letters and spaces only.",
      loanAmount: () =>
        (Number(value) >= 1000 && Number(value) <= 10000000) ||
        "Loan amount must be between 1,000 and 10,000,000.",
      constitution: () => (value ? true : "Please select constitution type."),
      ownershipProof: () =>
        /^[A-Z0-9]{10,20}$/.test(value) ||
        "Invalid ownership proof (e.g., Aadhaar, PAN).",
      businessYears: () =>
        (Number(value) >= 0 && Number(value) <= 100) ||
        "Years in business must be between 0 and 100.",
      gstRegistered: () => (value ? true : "Please select GST registration status."),
      gstin: () =>
        !form.gstRegistered ||
        form.gstRegistered === "No" ||
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value) ||
        "Invalid GSTIN format.",
    };

    return validations[name] ? validations[name]() : true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const error = validateField(name as keyof FormData, value);
    setErrors({ ...errors, [name]: error === true ? "" : error });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: ErrorData = {};
    let isValid = true;

    Object.keys(form).forEach((key) => {
      const error = validateField(key as keyof FormData, form[key as keyof FormData]);
      newErrors[key] = error === true ? "" : error;
      if (error !== true) isValid = false;
    });

    setErrors(newErrors);
    if (!isValid) return;

    console.log("Form submitted:", form);
  };

  const selectOptions = {
    loanType: [
      { value: "LAB", label: "LAB" },
      { value: "Supply Chain", label: "Supply Chain" },
      { value: "EV Financing", label: "EV Financing" },
    ],
    constitution: [
      { value: "Proprietorship", label: "Proprietorship Firm" },
      { value: "Partnership", label: "Partnership Firm" },
      { value: "Trust", label: "Trust" },
      { value: "Company", label: "Company" },
    ],
    gstRegistered: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
  };

  const renderSelect = (name: keyof FormData, options: any[]) => (
    <Select
      name={name}
      styles={customSelectStyles}
      options={options}
      value={options.find((o) => o.value === form[name])}
      onChange={(option) =>
        handleChange({ target: { name, value: option?.value || "" } } as any)
      }
    />
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Loan Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Type of Loan</label>
            {renderSelect("loanType", selectOptions.loanType)}
            {errors.loanType && <p className="text-red-500 text-sm">{errors.loanType}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "name", type: "text", label: "Name" },
              { id: "mobile", type: "tel", label: "Mobile", maxLength: 10 },
              { id: "email", type: "email", label: "Email" },
              { id: "dob", type: "date", label: "Date of Birth", max: new Date().toISOString().split("T")[0] },
            ].map(({ id, type, label, ...rest }) => (
              <div key={id}>
                <label htmlFor={id} className="block font-medium mb-1 text-gray-700">{label}</label>
                <input
                  id={id}
                  type={type}
                  name={id}
                  value={(form as any)[id]}
                  onChange={handleChange}
                  className="w-full border border-black/30 text-gray-700 rounded px-3 py-2 focus:border-blue-800 focus:outline-none"
                  required
                  aria-invalid={!!errors[id]}
                  {...rest}
                />
                {errors[id] && <p className="text-red-500 text-sm">{errors[id]}</p>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["pincode", "city", "state"].map((id) => (
              <div key={id}>
                <label htmlFor={id} className="block font-medium mb-1 text-gray-700">{id.charAt(0).toUpperCase() + id.slice(1)}</label>
                <input
                  id={id}
                  type="text"
                  name={id}
                  value={(form as any)[id]}
                  onChange={handleChange}
                  className="w-full border border-black/30 text-gray-700 rounded px-3 py-2 focus:border-blue-800 focus:outline-none"
                  required
                  aria-invalid={!!errors[id]}
                />
                {errors[id] && <p className="text-red-500 text-sm">{errors[id]}</p>}
              </div>
            ))}
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Loan Amount</label>
            <input
              type="number"
              name="loanAmount"
              value={form.loanAmount}
              onChange={handleChange}
              className="w-full border border-black/30 text-gray-700 rounded px-3 py-2 focus:border-blue-800 focus:outline-none"
              required
            />
            {errors.loanAmount && <p className="text-red-500 text-sm">{errors.loanAmount}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Constitution Type</label>
            {renderSelect("constitution", selectOptions.constitution)}
            {errors.constitution && <p className="text-red-500 text-sm">{errors.constitution}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Ownership Proof</label>
            <input
              type="text"
              name="ownershipProof"
              value={form.ownershipProof}
              onChange={handleChange}
              className="w-full border border-black/30 text-gray-700 rounded px-3 py-2 focus:border-blue-800 focus:outline-none"
              required
            />
            {errors.ownershipProof && <p className="text-red-500 text-sm">{errors.ownershipProof}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Years in Business</label>
            <input
              type="number"
              name="businessYears"
              value={form.businessYears}
              onChange={handleChange}
              className="w-full border border-black/30 text-gray-700 rounded px-3 py-2 focus:border-blue-800 focus:outline-none"
              required
            />
            {errors.businessYears && <p className="text-red-500 text-sm">{errors.businessYears}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Registered on GST Portal?</label>
            {renderSelect("gstRegistered", selectOptions.gstRegistered)}
            {errors.gstRegistered && <p className="text-red-500 text-sm">{errors.gstRegistered}</p>}
          </div>

          {form.gstRegistered === "Yes" && (
            <div>
              <label className="block font-medium mb-1 text-gray-700">GSTIN</label>
              <input
                type="text"
                name="gstin"
                value={form.gstin}
                onChange={handleChange}
                className="w-full border border-black/30 text-gray-700 rounded px-3 py-2 focus:border-blue-800 focus:outline-none"
                required
              />
              {errors.gstin && <p className="text-red-500 text-sm">{errors.gstin}</p>}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
