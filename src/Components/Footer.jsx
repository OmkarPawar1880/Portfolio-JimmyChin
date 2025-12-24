import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-inner">
        
        {/* Brand */}
        <h3 className="footer-brand">Jimmy Chin</h3>

        {/* Optional Tagline */}
        <p className="footer-tagline">
          Visual storytelling from the edge of the world.
        </p>

        {/* Social Links */}
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Jimmy Chin. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
