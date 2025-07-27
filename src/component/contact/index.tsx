import React from "react";
import contact from "../../assets/contact.jpg"
const ContactUs: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div
            >
                <img src={contact} alt="" />
            </div>
            <div className=" w-full bg-white py-12 px-4 md:px-16">

                <div className="flex flex-col md:flex-row justify-center items-start gap-8">
                    {/* Google Map with Fintree marker */}
                    <div className="w-full md:w-[40%] h-[300px] rounded-xl shadow-lg overflow-hidden">
                        <iframe
                            title="Fintree Finance Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7546.959105926578!2d72.8173213!3d18.9544172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94056c371a3%3A0x82c71e7216f85049!2sFintree%20Finance%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1753627404947!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Address Section */}
                    <div className="w-full md:w-1/3 text-gray-700 space-y-1">
                        <h3 className="text-blue-800 font-semibold text-lg">
                            Corporate Office Address – Mumbai
                        </h3>
                        <p className="font-medium">Fintree Finance Pvt. Ltd.</p>
                        <p>Engineering Centre, 4th Floor</p>
                        <p>9 Matthew Road, Opera House, Charni Road East</p>
                        <p>Mumbai – 400004, Maharashtra, India</p>
                        <p>
                            <strong>Email :</strong>{" "}
                            <a
                                href="mailto:wecare@fintreefinance.com"
                                className="text-blue-700 hover:underline"
                            >
                                wecare@fintreefinance.com
                            </a>
                        </p>
                    </div>
                </div>
            </div></div>
        
    );
};

export default ContactUs;
