// import './App.css'
import Navbar from './components/Navbar.jsx'
import { Home } from './components/Home.jsx'
import { About } from "./components/About.jsx";
import { Services } from './components/Services.jsx';
import { Contact } from './components/Contact.jsx';
import { Join } from './components/Join.jsx';
import Footer from './components/Footer.jsx';
import Events from './components/Events.jsx';



function App() {
  

  return (
    <>
    
      <div>
        
        <Navbar />
        <Home />
        <About />
        <Services />
        <Contact />
        <Events />
        <Join />
        <Footer />
        </div>
        
    </>
  )
}

export default App
