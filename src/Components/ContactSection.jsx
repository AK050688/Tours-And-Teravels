import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="w-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-text-[#f06543]"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white border border-[#f06543] text-[#f06543] hover:text-white font-semibold py-2 rounded-md hover:bg-[#f06543] transition">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            Have questions? Reach out to us anytime. We're here to help you.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-700">info@tour&travels.com</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Phone</h4>
            <p className="text-gray-700">+91 9508241806</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Address</h4>
            <p className="text-gray-700">
              Tour & Travels
              <br />
              Mandar Hill, Banka, Bihar, India 813104
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-[#f06543] text-xl">
              <FaFacebookF className="hover:text-[#f06543] cursor-pointer" />
              <FaTwitter className="hover:text-[#f06543] cursor-pointer" />
              <FaInstagram className="hover:text-[#f06543] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[#f06543] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
