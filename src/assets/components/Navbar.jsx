import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation for Navbar entrance
  useEffect(() => {
    gsap.fromTo(navRef.current, 
      {
        y: -500,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  // Toggle burger menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  
    // Tjek om skærmen er under 900px
    const isSmallScreen = window.matchMedia('(max-width: 900px)').matches;
  
    if (isSmallScreen) {
      // Kun kør GSAP animationen på små skærme
      gsap.fromTo('.navLinks',
      {
        x:100,
      }, 
      {
        x:0,
        autoAlpha: menuOpen ? 0 : 1, // skjul eller vis menuen
        display: menuOpen ? 'none' : 'flex', // Skift mellem display
        duration: 0.3,
      });
  
      // Burger animationen for at vise krydset
      gsap.to('.burger .line:nth-child(1)', {
        rotate: menuOpen ? 0 : -45,
        y: menuOpen ? 0 : 24,
        transformOrigin: 'top left',
        duration: 0.3,
      });
  
      gsap.to('.burger .line:nth-child(3)', {
        rotate: menuOpen ? 0 : 45,
        y: menuOpen ? 0 : -24,
        transformOrigin: 'bottom left',
        duration: 0.3,
      });
  
      // Hide middle line when menu is open
      gsap.to('.burger .line:nth-child(2)', {
        opacity: menuOpen ? 1 : 0,
        duration: 0.2,
      });
    } else {
      // Hvis skærmen er større end 900px, skal menuen altid være synlig
      gsap.set('.navLinks', {
        display: 'flex',
        opacity: 1,
      });
    }
  };
  


  return (
    <nav ref={navRef} className="navbar">
      <Link className="logo" to='/'>
        <p>Learn<span>WEB</span></p>
      </Link>

    <ul className="navLinks">
      <li><Link className="navLink" to="/discovery">Opdagelse</Link></li>
      <li><Link className="navLink" to="#">Om os</Link></li> 
      <li><Link className="navLink" to="#">Kontakt</Link></li> 
    </ul>

            {/* Burger menu */}
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

    </nav>
  );
}

export default Navbar;
