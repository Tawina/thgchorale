import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Navbar from "./components/Navbar";
// import Home from "./components/Home"
// import About from "./components/About";
// import Services from "./components/Services";
// import Event from "./components/Event";
// import Contact from "./components/Contact";
// import Join from "./components/Join";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
