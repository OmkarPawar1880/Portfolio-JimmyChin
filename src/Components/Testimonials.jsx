import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Working with him was effortless. He captured our brand exactly how we imagined — and then elevated it.",
    name: "Aarav Mehta",
    brand: "Founder, Urban Brew Co.",
  },
  {
    quote:
      "The visuals felt real, emotional, and premium. Our engagement doubled after the campaign.",
    name: "Neha Sharma",
    brand: "Marketing Lead, Café Aura",
  },
  {
    quote:
      "Professional, calm, and incredibly creative. Every frame told a story.",
    name: "Rohan Kulkarni",
    brand: "Content Director, WildFrames",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="testimonials-inner">
        <h2 className="testimonials-title">Client Words</h2>
        <p className="testimonials-subtitle">
          Real experiences from brands and creators I’ve worked with
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div
              className="testimonial-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <p className="testimonial-quote">“{item.quote}”</p>

              <div className="testimonial-author">
                <span className="name">{item.name}</span>
                <span className="brand">{item.brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
