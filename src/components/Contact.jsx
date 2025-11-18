import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export function Contact() {
  return (
    <>
    <section id="contact" className="py-16 bg-gray-50 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Ready to join our musical family? Have questions about our ministry?
          We’d love to hear from you and help you find your place in our choir.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Card */}
        <div className="bg-[#0E1A3B] text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Whether you're interested in joining the choir, attending our services,
            or learning more about our ministry, we’re here to welcome you with open arms.
          </p>

          {/* Contact Items */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-yellow-400 mt-1" />
              <div>
                <p className="font-medium">(+265) 000-0000</p>
                <p className="text-gray-300 text-sm">Call us </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-yellow-400 mt-1" />
              <div>
                <p className="font-medium">tohisglorymw@gmail.com</p>
                {/* <p className="text-gray-300 text-sm">We respond within 24 hours</p> */}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <div>
                <p className="font-medium">Kanjedza SDA Church</p>
                <p className="text-gray-300 text-sm">Blantyre, Malawi</p>
              </div>
            </div>
{/* 
            <div className="flex items-start gap-4">
              <FaClock className="text-yellow-400 mt-1" />
              <div>
                <p className="font-medium">Mon–Fri: 9AM–5PM</p>
                <p className="text-gray-300 text-sm">Available for appointments</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Firstname"
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded-lg w-full"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-lg w-full"
            />

            <textarea
              rows="4"
              placeholder="How can I help you?"
              className="border border-gray-300 p-3 rounded-lg w-full"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#0E1A3B] text-white py-3 rounded-lg hover:bg-[#1c2b55] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-center">
        <h3 className="text-xl font-semibold">Ready to Join Our Choir?</h3>
        <p className="text-gray-600 mt-2">
          No experience required — just a heart for worship and music!
        </p>

        <button className="mt-5 bg-[#0E1A3B] text-white px-6 py-3 rounded-lg hover:bg-[#1c2b55] transition">
          Schedule an Audition
        </button>
      </div>
    </section>
    </>
  );
}