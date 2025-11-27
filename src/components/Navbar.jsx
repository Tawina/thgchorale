// function Navbar() {
// return (
//     <>
   
// <nav className="flex justify-between items-center px-8 py-4 shadow bg-white fixed top-0 left-0 right-0 z-50">
// <h1 className="text-2xl font-bold">TO HIS GLORY</h1>
// <ul className="hidden md:flex gap-8 font-medium">
// <li><a href="#home" className="hover:text-yellow-600 text-red-500">Home</a></li>
// <li><a href="#about" className="hover:text-yellow-600">About</a></li>
// <li><a href="#services" className="hover:text-yellow-600">Services</a></li>
// <li><a href="#events" className="hover:text-yellow-600">Events</a></li>
// <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
// </ul>
// <a
// href="#join"
// className="bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600"
// >
// Join Us
// </a>
// </nav>

// </>

// );
// }

// export default Navbar


import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 shadow bg-white fixed top-0 left-0 right-0 z-50">

        {/* Logo */}
        <h1 className="text-2xl font-bold">TO HIS GLORY</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="hover:text-yellow-600 text-red-500">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-600">About</a></li>
          <li><a href="#services" className="hover:text-yellow-600">Services</a></li>
          <li><a href="#events" className="hover:text-yellow-600">Events</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <a
          href="#join"
          className="hidden md:block bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600"
        >
          Join Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg mt-20 px-8 py-6 space-y-4 fixed top-0 right-0 left-0 z-40">

          <a href="#home" onClick={() => setOpen(false)} className="block hover:text-yellow-600">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="block hover:text-yellow-600">About</a>
          <a href="#services" onClick={() => setOpen(false)} className="block hover:text-yellow-600">Services</a>
          <a href="#events" onClick={() => setOpen(false)} className="block hover:text-yellow-600">Events</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-yellow-600">Contact</a>

          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="block bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold text-center hover:bg-yellow-600"
          >
            Join Us
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
