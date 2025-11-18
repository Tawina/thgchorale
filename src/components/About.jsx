import { FaMusic } from "react-icons/fa";

export function About() {
  return (
    <>
    <section id="about" className="bg-[#f5f2e9] py-20 px-6 md:px-16">
      {/* TITLE */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Our Ministry
        </h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          For over 15 years, our music ministry has been a cornerstone of worship,
          bringing together voices from all walks of life to create something
          beautiful in service to our Lord and community.
        </p>
      </div>

      {/* MISSION BOX */}
      <div className="bg-white mt-12 p-8 rounded-lg shadow max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-yellow-600">Our Mission</h3>
        <p className="text-gray-700 italic mt-4">
          "To glorify God through the gift of music, unite hearts in worship,
          and create a welcoming community where every voice is valued and every
          soul is touched by the power of harmony."
        </p>
        <p className="text-gray-800 mt-4 font-semibold">Psalm 95:1</p>
        <p className="text-gray-600">"Come, let us sing for joy to the Lord"</p>
      </div>
    </section>
    </>
  );
}