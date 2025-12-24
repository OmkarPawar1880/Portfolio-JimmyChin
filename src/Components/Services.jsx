import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const services = [
  
  {
    title: "Editorial Photography",
    subtitle: "Stories • Magazines • Publications",
    includes: [
      "Concept & visual direction",
      "Story-driven photo sessions",
      "High-resolution editorial images",
      "Publication-ready delivery",
    ],
    price: "Custom Pricing",
  },
  {
    title: "Commercial Photography",
    subtitle: "Brands • Campaigns • Advertising",
    includes: [
      "Creative concept development",
      "Brand-aligned visual execution",
      "Studio or on-location shoot",
      "Professional retouching",
    ],
    price: "Starting from $1,500",
  },
  {
    title: "Portrait Photography",
    subtitle: "Athletes • Creators • Leaders",
    includes: [
      "Environmental or studio portraits",
      "Natural & cinematic lighting",
      "Direction for authentic expressions",
      "High-end retouching",
    ],
    price: "Starting from $800",
  },
  {
    title: "Travel & Landscape Photography",
    subtitle: "Remote Locations • Natural Light",
    includes: [
      "Scouting & location research",
      "Golden-hour focused shooting",
      "Ultra-high-resolution landscapes",
      "Fine-art color grading",
    ],
    price: "Custom Pricing",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services-inner">
        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">
          Visual storytelling for brands, athletes, and creators who operate
          where comfort ends.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3>{service.title}</h3>
              <span className="service-subtitle">{service.subtitle}</span>

              <ul>
                {service.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <button className="service-btn">Request Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
