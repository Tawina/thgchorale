


 function Navbar() {
return (
    <>
    <h1 className="text-5xl text-red-500 font-bold">Testing Tailwind</h1>
<nav className="flex justify-between items-center px-8 py-4 shadow bg-white fixed top-0 left-0 right-0 z-50">
<h1 className="text-2xl font-bold">TO HIS GLORY</h1>
<ul className="hidden md:flex gap-8 font-medium">
<li><a href="#home" className="hover:text-yellow-600 text-red-500">Home</a></li>
<li><a href="#about" className="hover:text-yellow-600">About</a></li>
<li><a href="#services" className="hover:text-yellow-600">Services</a></li>
<li><a href="#event" className="hover:text-yellow-600">Event</a></li>
<li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
</ul>
<a
href="#join"
className="bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600"
>
Join Us
</a>
</nav>

</>

);
}

export default Navbar