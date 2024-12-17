import React, { useEffect } from "react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import SwappedBox from "../assets/components/SwappedBox";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Discovery() {
  useEffect(() => {
    // Hent alle titler, tekst og listepunkter som arrays
    const titles = document.querySelectorAll(".title");
    const texts = document.querySelectorAll(".text");
    const lists = document.querySelectorAll(".list");

    // Animer alle titler
    titles.forEach((title) => {
      gsap.fromTo(title, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 90%", // animationen starter når toppen af elementet når 80% af skærmen
        },
      });
    });

    // Animer alle tekst
    texts.forEach((text) => {
      gsap.fromTo(text, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
        stagger: 0.2, // Skaber en forsinkelse for hvert element
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
        },
      });
    });

    // Animer alle listepunkter
    lists.forEach((list) => {
      gsap.fromTo(list, {
        opacity: 0,
        x: -20,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: list,
          start: "top 95%",
        },
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <SwappedBox />
      <section className="textBox">
        <h1 className="title">Hvad er GSAP?</h1>
        <p className="text">
  <strong>GSAP</strong> (GreenSock Animation Platform) er et af de mest populære biblioteker til webanimationer. 
  På deres officielle hjemmeside kan du finde omfattende dokumentation, tutorials og fantastiske eksempler, der viser, hvad <strong>GSAP</strong> kan gøre. 
  Hjemmesiden tilbyder også detaljer om avancerede plugins som <strong>ScrollTrigger</strong>, <strong>MorphSVG</strong>, og <strong>SplitText</strong>, 
  der kan hjælpe dig med at skabe endnu mere komplekse og engagerende animationer. 
</p>
<p className="text">
  For endnu mere viden kan du besøge deres egen hjemmeside på <a href="https://gsap.com" target="_blank" rel="noopener noreferrer" className="link">gsap.com</a> og finde alt, hvad der er nødvendigt at vide. 
  Her kan du også stille spørgsmål, hvis du sidder fast i koden.
</p>
      </section>
      <section className="textBox">
        <h2 className="title">Fordele ved at bruge GSAP</h2>
        <p className="text">
          GSAP tilbyder flere fordele, der gør det til et perfekt valg til webanimationer:
        </p>
        <ul className="text">
          <li className="list"><strong>Høj ydeevne:</strong> GSAP er optimeret til at køre hurtigt, selv på ældre enheder og i langsommere browsere.</li>
          <li className="list"><strong>Støtte for alle browsere:</strong> Det fungerer i alle større browsere, herunder Internet Explorer 11, og håndterer ofte browserforskelle for dig.</li>
          <li className="list"><strong>Kompleksitet uden problemer:</strong> Skab meget komplekse animationer med nemt at bruge API'er.</li>
          <li className="list"><strong>Timeline- og kontrollable animationer:</strong> Du kan skabe præcise tidslinjer og kontrollerede animationer, der er synkroniserede og lette at styre.</li>
        </ul>
      </section>
      <section className="textBox">
        <h2 className="title">GSAP Plugins</h2>
        <p className="text">
          En af de største styrker ved GSAP er deres plugins. De giver dig endnu mere magt til at lave imponerende animationer. Dog er der nogle plugins, som kræver abonnement hos dem, men du kan også finde nogle, som er gratis at bruge. Her er nogle af de mest populære plugins:
        </p>
        <ul>
          <li className="list"><strong>ScrollTrigger:</strong> Et plugin, der giver dig mulighed for at animere elementer, når de scroller ind i visningen. Dette bruges ofte til at skabe smarte scrolling-animationer og interaktive elementer.</li>
          <li className="list"><strong>MorphSVG:</strong> Dette plugin gør det muligt at animere SVG-elementer ved at ændre deres form på en meget glat og præcis måde.</li>
          <li className="list"><strong>SplitText:</strong> Et plugin, der giver dig mulighed for at splitte tekst op i enkelte bogstaver, ord eller linjer for at lave interessante tekstanimationer.</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Discovery;
