import { FaMusic } from "react-icons/fa";

export function Services() {
  return (
    <>
    <section id="services" className="bg-[#f5f2e9] py-20 px-6 md:px-16">
      

      {/* FOUR CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
        {[
          {
            title: "Worship Excellence",
            text: "We strive for musical excellence that honors God and inspires the congregation in meaningful worship.",
          },
          {
            title: "Community Fellowship",
            text: "Building lasting friendships and spiritual connections through our shared love of music and faith.",
          },
          {
            title: "Musical Growth",
            text: "Nurturing individual talents while developing as an ensemble, welcoming all skill levels with patience.",
          },
          {
            title: "Ministry Impact",
            text: "Using our gifts to serve others, spread joy, and create moments of spiritual transformation.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow text-center"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
              <FaMusic className="text-white text-3xl" />
            </div>

            <h4 className="font-bold text-gray-900 mt-4">{item.title}</h4>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* LEADERSHIP */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-600">
          Ministry Leadership
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          {[
            { title: "Director Of Music", text: "Leading Our Musical Journey" },
            { title: "Choir Coordinator", text: "Organizing Our Fellowship" },
            { title: "Worship Leader", text: "Guiding Our Spiritual Growth" },
          ].map((leader, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <FaMusic className="text-white text-3xl" />
              </div>

              <h4 className="font-bold text-gray-900 mt-4">
                {leader.title}
              </h4>
              <p className="mt-2 text-gray-600">{leader.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}