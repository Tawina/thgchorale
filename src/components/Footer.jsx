import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className="bg-[#0E1A3B] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">
            Harmony Ministry
          </h2>
          <p className="mt-2">Music Ministry</p>
          <p className="mt-2 leading-relaxed">
            Glorifying God through the gift of music, uniting hearts in worship,
            and creating a welcoming community where every voice is valued.
          </p>

          <p className="italic mt-4">
            "Come, let us sing for joy to the Lord" – Psalm 95:1
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Our Services</a></li>
            <li><a href="#events" className="hover:underline">Upcoming Events</a></li>
            <li><a href="#choir" className="hover:underline">Join Our Choir</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg">Contact Info</h2>
          <div className="mt-3 space-y-3">
            
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <p>
                Kanjedza SDA Church <br />
                Blantyre
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <p>(+265) 884-110706</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <p>Music@Harmonyministry.org</p>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-8" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between text-sm">
        <p>© 2025 Harmony Music Ministry. All Rights Reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
    </>
  );
}