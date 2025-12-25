import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Editorial Photography",
    subtitle: "Stories • Magazines • Publications",
    features: [
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
    features: [
      "Creative concept development",
      "Brand-aligned visual execution",
      "Studio or on-location shoots",
      "Professional retouching",
    ],
    price: "Starting from $1,500",
  },
  {
    title: "Portrait Photography",
    subtitle: "Athletes • Creators • Leaders",
    features: [
      "Environmental or studio portraits",
      "Natural & cinematic lighting",
      "Direction for authentic expressions",
      "High-end retouching",
    ],
    price: "Starting from $800",
  },
];

const ServiceCard = ({ title, subtitle, features, price }) => {
  return (
    <article className="service-card">
      <h3 className="service-title">{title}</h3>
      <p className="service-subtitle">{subtitle}</p>

      <ul className="service-features">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="service-price">{price}</div>
    </article>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" ref={sectionRef}>
      <div className="services-container">
        <h2 className="services-title" ref={titleRef}>
          Services
        </h2>

        <p className="services-subtitle" ref={subtitleRef}>
        Visual storytelling for brands, athletes, and creators who operate
         where comfort ends.
        </p>

        <div className="services-cta">
        <button className="services-btn">Request a Project</button>
        </div>

<       div className="services-grid">
        {servicesData.map((service, index) => (
      <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
      <ServiceCard {...service} />
        </div>
        ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
