import { FaMusic } from "react-icons/fa";

export function Join() {
  const rehearsalData = [
    {
      day: "Thursday",
      time: "5:00 PM – 6:00 PM",
      type: "Full Choir Rehearsal",
      location: "Blantyre Adventist Hospital",
    },
    {
      day: "Saturday",
      time: "3:00 PM – 5:00 PM",
      type: "Full Choir Rehearsal",
      location: "Blantyre Adventist Hospital",
    },
    {
      day: "Sunday",
      time: "09:00 AM – 12:00 PM",
      type: "Full Choir Rehearsal",
      location: "Kanjeza SDA Church",
    },
  ];

  return (
    <>
    <section id="join" className="py-16 bg-gray-100">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900">Rehearsal Schedule</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Join us for regular rehearsals to prepare for our worship services and
          grow together as a musical family.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {rehearsalData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-8 text-center"
          >
            {/* Icon */}
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMusic size={40} className="text-white" />
            </div>

            <h3 className="font-semibold text-lg">{item.day}</h3>
            <p className="text-gray-700 mt-1">{item.time}</p>
            <p className="text-gray-700 mt-1">{item.type}</p>
            <p className="text-gray-500 mt-1">{item.location}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg shadow">
          Join Our Next Rehearsal
        </button>
      </div>
    </section>
    </>
  );
}