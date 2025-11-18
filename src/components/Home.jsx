// import thg from '/src/assets/thg.jpg';

// export function Home() {
//   return (
//     <section
//       id="home"
//       className="w-full h-screen flex flex-col justify-center items-center text-center px-4 relative"
//       style={{
//         backgroundImage: `url(${thg})`,
//         backgroundSize: 'cover',      // Ensures the image covers the full area
//         // backgroundPosition: 'full', // Centers the image
//         // backgroundRepeat: 'no-repeat',// Prevents tiling
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content on top */}
//       <div className="relative z-10">
//         <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
//           LIFTING VOICES IN <span className="text-yellow-400">HARMONY</span>
//         </h1>

//         <p className="text-lg md:text-2xl text-white mt-4 max-w-3xl">
//           Join our music ministry as we worship through song, inspire through melody,
//           and unite hearts in praise to the Almighty.
//         </p>

//         <div className="flex gap-6 mt-8 justify-center">
//           <a
//             href="#join"
//             className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600"
//           >
//             Join Our Choir
//           </a>

//           <a
//             href="#about"
//             className="bg-white text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200"
//           >
//             Learn More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import { FaMusic, FaPrayingHands, FaUsers } from "react-icons/fa";
import thg from "/src/assets/thg.jpg";

export function Home() {
  return (
    <>
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${thg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          LIFTING VOICES IN <span className="text-yellow-400">HARMONY</span>
        </h1>

        <p className="text-lg md:text-2xl text-white mt-4 leading-relaxed">
          Join our music ministry as we worship through song, inspire through
          melody, and unite hearts in praise to the almighty.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          <a
            href="#join"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
          >
            Join Our Choir
          </a>

          <a
            href="#about"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-6 left-0 right-0 z-10 px-4">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">

          {/* Active Members */}
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
              <FaMusic className="text-yellow-400 text-4xl" />
            </div>
            <p className="text-3xl font-bold mt-4">50+</p>
            <p className="text-lg tracking-wide">Active Members</p>
          </div>

          {/* Years of Ministry */}
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
              <FaPrayingHands className="text-yellow-400 text-4xl" />
            </div>
            <p className="text-3xl font-bold mt-4">15</p>
            <p className="text-lg tracking-wide">Years Of Ministry</p>
          </div>

          {/* Listeners */}
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
              <FaUsers className="text-yellow-400 text-4xl" />
            </div>
            <p className="text-3xl font-bold mt-4">200+</p>
            <p className="text-lg tracking-wide">Listeners</p>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}