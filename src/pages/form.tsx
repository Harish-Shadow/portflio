import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const whatsappMessage = `*New Contact Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "9876543210"; // Change to actual number if needed
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Professor</h2>
          <p className="mt-2 text-sm text-gray-600">
            Kindly fill out the form below to get in touch regarding academic discussions,
            collaborations, or project mentorship.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                required
                onChange={handleChange}
                value={formData.name}
                placeholder="Enter your name"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                name="email"
                id="email"
                type="email"
                required
                onChange={handleChange}
                value={formData.email}
                placeholder="you@example.com"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                name="subject"
                id="subject"
                type="text"
                required
                onChange={handleChange}
                value={formData.subject}
                placeholder="Subject of your message"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                onChange={handleChange}
                value={formData.message}
                placeholder="Write your message here..."
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md shadow-md text-sm font-medium transition duration-300"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
