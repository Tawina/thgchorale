import { FaCalendarAlt } from "react-icons/fa";

export default function Events() {
  return (
    <>
    <section id="events" className="py-16 bg-[#F6F4EE]">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Mark your calendars and join us for these special musical events and
          celebrations. Experience the joy of worship through music and
          fellowship with our community.
        </p>
      </div>

      {/* Event Card */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <div className="bg-[#0A1A3A] text-white rounded-md py-16 px-6 flex flex-col items-center justify-center shadow-md">
          <FaCalendarAlt size={40} className="mb-4 text-yellow-400" />

          <h3 className="text-2xl font-semibold tracking-wide uppercase">
            15 Anniversary
          </h3>
        </div>
      </div>
    </section>
    </>
  );
}