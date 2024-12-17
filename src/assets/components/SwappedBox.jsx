import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

function SwappedBox() {
  const [isSwapped, setIsSwapped] = useState(false);

  const firstContentArray = isSwapped
  ? [
      "GSAP (GreenSock Animation Platform) er et af de mest populære biblioteker til webanimationer.",
      "På deres officielle hjemmeside kan du finde omfattende dokumentation, tutorials og fantastiske eksempler.",
      "Hjemmesiden tilbyder også detaljer om avancerede plugins som ScrollTrigger, MorphSVG, og SplitText.",
      "Disse plugins kan hjælpe dig med at skabe endnu mere komplekse og engagerende animationer."
    ]
  : [
      "GSAP giver dig værktøjerne til at lave kreative og flydende animationer.",
      "Med GSAP kan du nemt kontrollere animationer på tidslinjer.",
      "Biblioteket er optimeret til ydeevne og kompatibelt med mange browsere.",
      "Avancerede funktioner som ScrollTrigger gør det muligt at synkronisere animationer med scrolling."
    ];

  const secondContent = isSwapped ? "Hvad er GSAP?" : "Fordelene ved GSAP";
  const buttonLabel = isSwapped ? "Se fordelene" : "Lær om GSAP";

  useEffect(() => {
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");

    if (isSwapped) {
      // Flyt "first" til højre og "second" til venstre
      gsap.to(first, {
        xPercent: 50,
        duration: 0.5,
        borderRadius: '0 10px 10px 0',
      });
      gsap.to(second, {
        xPercent: -200,
        duration: 0.5,
        borderRadius: '10px 0 0 10px',
        onComplete: () => {
          const container = document.querySelector(".container");
          container.appendChild(first); // Byt rækkefølge i DOM
          gsap.set([first, second], { xPercent: 0 }); // Nulstil position
        },
      });
    } else {
      // Flyt elementerne tilbage
      gsap.to(first, {
        xPercent: -50,
        duration: 0.5,
        borderRadius: '10px 0 0 10px',
      });
      gsap.to(second, {
        xPercent: 200,
        duration: 0.5,
        borderRadius: '0 10px 10px 0',
        onComplete: () => {
          const container = document.querySelector(".container");
          container.appendChild(second); // Byt rækkefølge i DOM tilbage
          gsap.set([first, second], { xPercent: 0 }); // Nulstil position
        },
      });
    }
  }, [isSwapped]);

  return (
    <>
      <div className="contactForm">
        <div className="container">
          <div className="first">
              <ul>
                {firstContentArray.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
          </div>
          <div className="second">
            <h2>{secondContent}</h2>
            <button onClick={() => setIsSwapped((prev) => !prev)}>{buttonLabel}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwappedBox;

