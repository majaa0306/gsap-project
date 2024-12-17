import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const textRef = useRef(null);
  const spanRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      scrollRef.current,
      { autoAlpha: 0,},
      { autoAlpha: 1, duration: 1, ease: "power2.out", delay: 4, }
    );

    tl.to(scrollRef.current, 
      {
        y: 50,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
      },
      "-=0.5"
    );

    tl.fromTo(scrollRef.current, 
      {
        autoAlpha: 1,
      }, 
      {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: scrollRef.current,
          scrub: 1,
          start: "top 60%", // Start, når containeren er 80% nede på skærmen
          end: "top 20%", // Slut, når den er 30% nede
        }
      })
  }, []);

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
      }
    )
  })
  useEffect(() => {
    gsap.fromTo(
      spanRef.current,
      {
        x: 500,
        opacity: 0,
        scale: 0.5,
        rotation: 180,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 2,
        ease: "power4.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="intro">
      <h1>
        Udforsk de mange muligheder med <span ref={spanRef} className="animated-span">GSAP</span>
      </h1>
      <p ref={textRef}>Med GSAP kan du gøre dine applikationer mere levende og fængende</p>
      <p ref={scrollRef} className="showScroll">
        <i class="fa-solid fa-chevron-down"></i>
      </p>
    </div>
  );
}

export default Intro;
