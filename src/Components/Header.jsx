import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const Header = () => {
  const headerRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(linksRef.current, {
        opacity: 0,
        y: -10,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="header" ref={headerRef}>
      {/* Logo / Brand */}
      <div className="header-logo">
        Jimmy<span>Chin</span>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        {[
          { label: "Home", id: "hero" },
          { label: "About", id: "about" },
          { label: "Work", id: "portfolio" },
          { label: "Services", id: "services" },
          { label: "Reviews", id: "testimonials" },
        ].map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            ref={(el) => (linksRef.current[i] = el)}
            className="nav-link"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a href="#contact" className="header-cta">
        Hire Me
      </a>
    </header>
  );
};

export default Header;
