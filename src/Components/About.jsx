import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aboutImage from "../assets/Jimmy-chin.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 1.08,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Content animation
      gsap.from(contentRef.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        {/* Image */}
        <div className="about-image" ref={imageRef}>
          <img src={aboutImage} alt="Portrait of photographer" />
        </div>

        {/* Content */}
        <div className="about-content" ref={contentRef}>
          <h2>About Me</h2>

          <p>
            I’m a climber, photographer, and filmmaker drawn to places where
            stories are earned, not staged. My work lives at the intersection
            of adventure and humanity — capturing moments that exist only when
            preparation meets uncertainty.
          </p>

          <p>
            Whether suspended on a mountain wall or embedded with a team in
            extreme conditions, I focus on trust, patience, and perspective.
            What makes my work different is proximity — physically and
            emotionally — getting close enough for the story to reveal itself.
          </p>

          <ul className="about-meta">
            <li>
              <strong>Experience:</strong> 20+ years
            </li>
            <li>
              <strong>Work:</strong> Adventure, documentary, commercial
            </li>
            <li>
              <strong>Based In:</strong> United States
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
