import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef(null);
  const linksRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header slide-in
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Nav links stagger
      gsap.from(linksRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.3,
        ease: "power3.out",
      });
    }, headerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <header className="header" ref={headerRef}>
      {/* Logo */}
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
