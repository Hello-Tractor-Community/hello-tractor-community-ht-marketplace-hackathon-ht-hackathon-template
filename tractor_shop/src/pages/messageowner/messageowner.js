import React, { useState } from "react";

const MessageOwner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Message sent:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
  };

  const handleWhatsApp = () => {
    const message = `Hello, my name is ${formData.name}. I would like to inquire about: ${formData.subject}. Message: ${formData.message}`;
    const phoneNumber = "+254708419386"; // Replace with the owner's WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-[#ff461e] mb-4">
        Message the Owner
      </h1>
      {submitted && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">
          Your message has been sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ff461e] transition duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ff461e] transition duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ff461e] transition duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ff461e] transition duration-200"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#ff461e] text-white rounded-md hover:bg-[#e03e1b] transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={handleWhatsApp}
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Contact via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default MessageOwner;
