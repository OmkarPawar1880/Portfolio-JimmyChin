import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import heroVideo from "../assets/showreel.mp4";
import heroImage from "../assets/Hero.jpg";

const Hero = ({
  mode = "videographer", // "photographer" | "videographer" | "creator"
}) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          subtextRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // Background subtle zoom
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 3,
          ease: "power2.out",
        }
      );
    }, heroRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Background */}
      <div className="hero-bg" ref={bgRef}>
        {mode === "videographer" && (
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}

        {mode === "photographer" && (
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}

        {mode === "creator" && (
          <div className="hero-collage">
            <span />
            <span />
            <span />
          </div>
        )}

        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 ref={headlineRef}>
          I create cinematic visuals <br /> that tell real stories.
        </h1>

        <p ref={subtextRef}>
          Photographer & Videographer for brands, cafés & creators
        </p>

        <div className="hero-cta" ref={ctaRef}>
          <button className="primary-btn">View My Work</button>
          <button className="secondary-btn">Hire Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
