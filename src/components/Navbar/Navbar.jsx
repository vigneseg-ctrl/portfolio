import { useEffect, useState } from "react"
import "./Navbar.css"

function Navbar() {
    const links=['About','Skills','Experience','Project','Contact']
    const[scrolled,setScrolled]=useState(false);
    const[menuOpen,setmenuOpen]=useState(false)
    useEffect(()=>{
        const handleScroll=() =>{
           setScrolled(window.scrollY>50);
           //window is global browser object and ScrollY is defined the user scroll and the its based on pixcel
        }
        //adding eventlstener for window
        window.addEventListener('scroll',handleScroll);
        //Clean up function for eventlistener
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <span className="nav-logo">V<span className="accent">.</span></span>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};
export default Navbar