import { useState } from "react";
import bg from '.././assets/about_fintree.jpg'

const LoanApplicationForm = () => {
  const [form, setForm] = useState({
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
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const validations = {
      name: () => /^[a-zA-Z\s-]{2,100}$/.test(value) || "Name must be 2-100 characters, letters, spaces, or hyphens only.",
      mobile: () => /^[6-9]\d{9}$/.test(value) || "Mobile must be a 10-digit number starting with 6, 7, 8, or 9.",
      email: () => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) || "Invalid email address.",
      dob: () => {
        const dob = new Date(value);
        const today = new Date();
        if (isNaN(dob) || dob > today) return "Invalid or future date.";
        const age = today.getFullYear() - dob.getFullYear() - (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()) ? 1 : 0);
        return (age >= 21 && age <= 58) || `Age must be between 21 and 58. Your age is ${age}.`;
      },
      pincode: () => /^\d{6}$/.test(value) || "Pincode must be a 6-digit number.",
      city: () => /^[a-zA-Z\s]{2,50}$/.test(value) || "City must be 2-50 characters, letters and spaces only.",
      state: () => /^[a-zA-Z\s]{2,50}$/.test(value) || "State must be 2-50 characters, letters and spaces only.",
      loanAmount: () => value >= 1000 && value <= 10000000 || "Loan amount must be between 1,000 and 10,000,000.",
      ownershipProof: () => /^[A-Z0-9]{10,20}$/.test(value) || "Invalid ownership proof (e.g., Aadhaar, PAN).",
      businessYears: () => value >= 0 && value <= 100 || "Years in business must be between 0 and 100.",
      gstRegistered: () => value !== "" || "Please select GST registration status.",
      gstin: () => !form.gstRegistered || form.gstRegistered === "No" || /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value) || "Invalid GSTIN format.",
    };
    return validations[name] ? validations[name]() : true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error === true ? "" : error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      newErrors[key] = error === true ? "" : error;
      if (error !== true) isValid = false;
    });

    setErrors(newErrors);
    if (!isValid) return;

    console.log("Form submitted:", form);
    // Proceed with API submission
  };

  return (
    <div className="bg-[{`bg`}]">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Loan Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="loanType" className="block font-medium mb-1">Type of Loan</label>
          <select
            id="loanType"
            name="loanType"
            value={form.loanType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            aria-invalid={!!errors.loanType}
          >
            <option value="">Select Loan Type</option>
            <option value="LAB">LAB</option>
            <option value="Supply Chain">Supply Chain</option>
            <option value="EV Financing">EV Financing</option>
          </select>
          {errors.loanType && <p className="text-red-500 text-sm">{errors.loanType}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="mobile" className="block font-medium mb-1">Mobile</label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              maxLength={10}
              required
              aria-invalid={!!errors.mobile}
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="dob" className="block font-medium mb-1">Date of Birth</label>
            <input
              id="dob"
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              aria-invalid={!!errors.dob}
          max={new Date().toISOString().split("T")[0]}

            />
            {/* <small className="text-gray-500">Age must be between 21 and 58</small> */}
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="pincode" className="block font-medium mb-1">Pincode</label>
            <input
              id="pincode"
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              maxLength={6}
              required
              aria-invalid={!!errors.pincode}
            />
            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block font-medium mb-1">City</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              aria-invalid={!!errors.city}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

          <div>
            <label htmlFor="state" className="block font-medium mb-1">State</label>
            <input
              id="state"
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              aria-invalid={!!errors.state}
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="loanAmount" className="block font-medium mb-1">Loan Amount</label>
          <input
            id="loanAmount"
            type="number"
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            min="1000"
            required
            aria-invalid={!!errors.loanAmount}
          />
          {errors.loanAmount && <p className="text-red-500 text-sm">{errors.loanAmount}</p>}
        </div>

        <div>
          <label htmlFor="constitution" className="block font-medium mb-1">Constitution Type</label>
          <select
            id="constitution"
            name="constitution"
            value={form.constitution}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            aria-invalid={!!errors.constitution}
          >
            <option value="">Select Constitution</option>
            <option value="Proprietorship">Proprietorship Firm</option>
            <option value="Partnership">Partnership Firm</option>
            <option value="Trust">Trust</option>
            <option value="Company">Company</option>
          </select>
          {errors.constitution && <p className="text-red-500 text-sm">{errors.constitution}</p>}
        </div>

        <div>
          <label htmlFor="ownershipProof" className="block font-medium mb-1">Ownership Proof</label>
          <input
            id="ownershipProof"
            type="text"
            name="ownershipProof"
            value={form.ownershipProof}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            aria-invalid={!!errors.ownershipProof}
          />
          {errors.ownershipProof && <p className="text-red-500 text-sm">{errors.ownershipProof}</p>}
        </div>

        <div>
          <label htmlFor="businessYears" className="block font-medium mb-1">Number of Years in Business</label>
          <input
            id="businessYears"
            type="number"
            name="businessYears"
            value={form.businessYears}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            min="0"
            required
            aria-invalid={!!errors.businessYears}
          />
          {errors.businessYears && <p className="text-red-500 text-sm">{errors.businessYears}</p>}
        </div>

        <div>
          <label htmlFor="gstRegistered" className="block font-medium mb-1">Is your business registered on GST Portal?</label>
          <select
            id="gstRegistered"
            name="gstRegistered"
            value={form.gstRegistered}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            aria-invalid={!!errors.gstRegistered}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.gstRegistered && <p className="text-red-500 text-sm">{errors.gstRegistered}</p>}
        </div>

        {form.gstRegistered === "Yes" && (
          <div>
            <label htmlFor="gstin" className="block font-medium mb-1">GSTIN</label>
            <input
              id="gstin"
              type="text"
              name="gstin"
              value={form.gstin}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              aria-invalid={!!errors.gstin}
            />
            {errors.gstin && <p className="text-red-500 text-sm">{errors.gstin}</p>}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={Object.values(errors).some((error) => error)}
        >
          Submit Application
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoanApplicationForm;