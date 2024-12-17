import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Examples() {
  const rotateRef = useRef(null);
  const kill = () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  useEffect(() => {
    const containers = gsap.utils.toArray('.container');

    containers.forEach((container) => {
      gsap.fromTo(container, 
        {
          autoAlpha: 0,
          x: 100
        }, 
        {
          autoAlpha: 1,
          x: 0, 
          duration: 1, 
          ease: 'back',
          scrollTrigger: {
            trigger: container,
            start: "top 70%", 
            end: "top 60%", 
            toggleActions: "play none none none", 
          }
        }
      )
    })
  }, [])

  useEffect(() => {
    gsap.to('.scroll', {
      borderRadius: '80',
      rotate: 180,
      backgroundColor: '#380f4e',
      scrollTrigger: {
        trigger: '.scroll',
        start: "top 90%",
        end: "top 20%", 
        scrub: true, 
      }
    });
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rotateRef.current,
        start: "top 80%",
        toggleActions: "restart pause reverse pause",
      }
    });
    tl.to(rotateRef.current, {scale: 3, rotate: 360, duration: 1, delay: 0.5, y: -100,})
      .to(rotateRef.current, {backgroundColor: '#380f4e', duration: 1, delay: 1});
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.stagger',
        start: "top 70%",
        toggleActions: "restart pause reverse pause",
      }
    });
    tl.to('.stagger', {
      y: -20,
      scale: 0.2,
      stagger: 0.2,
      ease: 'back.inOut',
    })
      .to('.stagger', {
        rotate: 360,
        scale: 1,
        stagger: 0.2,
      })
      .to('.stagger', {
        x: -40,
        backgroundColor: '#380f4e',
        stagger: 0.2
      });
    return () => {
      kill();
    };
  }, []);

  useEffect(() => {
    const timelines = document.querySelectorAll('.timeline');
  
    timelines.forEach((element, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'restart pause reverse pause',
        },
      })
      .to(element, {
        scale: 0.5,
        duration: 2,
        ease: 'power4.inOut'
      })
      .to(element, {
        y: -70,
        duration: 2,
        ease: 'power4.inOut'
      })
      .to(element, {
        y: 0,
        rotate: 360,
        scale: 1,
        borderRadius: 100,
        duration: 3,
        ease: 'power4.inOut',
        backgroundColor: '#380f4e',  
      });
    });
  }, []);

  return (
    <section className="examples">
      <div className="bgColorSc">
        <div className="container">
          <h2>Stagger Animationer</h2>
          <p>Tilføj forsinkelse mellem animationer af flere elementer for at skabe en sekventiel effekt. F.eks. et gitter eller en liste, der animeres trinvis.</p>
          <pre>
          <code>
            {`
gsap.timeline({
  scrollTrigger: {
    trigger: '.stagger',
    start: "top 70%",
    toggleActions: "restart pause reverse pause",
  }
})
.to('.stagger', {
  y: -20,
  scale: 0.2,
  stagger: 0.2,
  ease: 'back.inOut',
})
.to('.stagger', {
  rotate: 360,
  scale: 1,
  stagger: 0.2,
})
.to('.stagger', {
  x: -40,
  backgroundColor: '#380f4e',
  stagger: 0.2
});
          `}
          </code>
        </pre>
        </div>
        <div className="boxContainer">
          <div className="stagger boxSquareBig"></div>
          <div className="stagger boxSquareBig"></div>
          <div className="stagger boxSquareBig"></div>
          <div className="stagger boxSquareBig"></div>
          <div className="stagger boxSquareBig"></div>
        </div>
      </div>

      <div className="bgColor">
        <div className="container">
          <h2>Timeline</h2>
          <p>Opret komplekse animationer med flere trin i en præcis rækkefølge. Giver kontrol over timingen og koordineringen af flere animationer.</p>
          <pre>
          <code>
            {`
gsap.timeline({
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top 75%',
    toggleActions: 'restart pause reverse pause',
  },
})
.to('.timeline', {
  scale: 0.5,
  duration: 2,
  ease: 'power4.inOut',
})
.to('.timeline', {
  y: -70,
  duration: 2,
  ease: 'power4.inOut',
})
.to('.timeline', {
  y: 0,
  rotate: 360,
  scale: 1,
  borderRadius: 100,
  duration: 3,
  ease: 'power4.inOut',
  backgroundColor: '#380f4e',
});
            `}
          </code>
        </pre>
        </div>
        <div className="boxContainer">
          <div className="timeline boxSquareExtraBig"></div>
        </div>
      </div>

      <div className="bgColorSc">
        <div className="container">
          <h2>Skalering og Rotation</h2>
          <p>Forstør eller formindsk elementer dynamisk med scale for at fremhæve vigtige detaljer. Brug rotate til at dreje elementer og tilføje en følelse af bevægelse og energi til dit design.</p>
                  {/* Kodeeksempel under animationen */}
        <pre>
          <code>
            {`
gsap.to('.scroll', {
  borderRadius: '80',
  rotate: 180,
  backgroundColor: '#380f4e',
  scrollTrigger: {
    trigger: '.scroll',
    start: "top 90%",
    end: "top 20%", 
    scrub: true,
  }
});
            `}
          </code>
        </pre>
        </div>
        <div className="boxContainer">
          <div ref={rotateRef} className="boxSquare"></div>
        </div>
      </div>

      <div className="bgColor">
        <div className="container">
          <h2>Scrolltrigger</h2>
          <p>Skab imponerende rulleanimationer, hvor elementer aktiveres, bevæger sig eller ændrer sig baseret på brugerens scroll-position. Perfekt til interaktive websider.</p>
          <pre>
          <code>
            {`
gsap.fromTo(container, {
  autoAlpha: 0,
  x: 100
}, {
  autoAlpha: 1,
  x: 0, 
  duration: 1, 
  ease: 'back',
  scrollTrigger: {
    trigger: container,
    start: "top 70%",
    end: "top 60%",
    toggleActions: "play none none none",
  }
});
            `}
          </code>
        </pre>
        </div>
        <div className="scrollTrigger boxContainer">
          <div className="scroll boxSquareExtraBig"></div>
        </div>
      </div>
    </section>
  );
}

export default Examples;
