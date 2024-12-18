import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".footerContent",
      { y: '-100%', scale: 0.8 },
      { 
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".footerContent",
          start: "top 80%", 
          end: "top 20%", 
          toggleActions: "play none none none",
          scrub: true, 
        },
      }
    );

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  useEffect(() => {
    const animation = gsap.fromTo(
      ".footer", { boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 0.5)", },
      { 
        boxShadow: "inset 0px 0px 0px rgba(0, 0, 0, 0)",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 80%", 
          end: "top 20%", 
          toggleActions: "play none none none",
          scrub: true, 
        },
      }
    );

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footerContent">
        <Link className="logo" to='/'>
          <p>Learn<span>WEB</span></p>
        </Link>
        <nav>
          <div>
            <h2>Lær mere om</h2>
            <p>Scrolltrigger</p>
            <p>Skalering og rotering</p>
            <p>Staggeranimation</p>
            <p>Timeline</p>
          </div>
          <div>
            <h2>Vores sider</h2>
            <Link to="/"><p>Forside</p></Link>
            <Link to="/discovery"><p>Gå på opdagelse</p></Link> 
          </div>
          <div>
            <h2>Kontakt os på</h2>
            <p>Mail : learnweb@gmail.com</p>
            <p>Telefon : 25 72 93 22</p>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
