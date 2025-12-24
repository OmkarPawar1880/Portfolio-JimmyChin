import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-animate", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
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
    <section className="contact-cta" id="contact" ref={sectionRef}>
      <div className="contact-cta__inner">
        <h2 className="cta-animate">Let’s create something together.</h2>

        <p className="cta-animate">
          Have a project, story, or idea in mind?  
          I’d love to hear about it.
        </p>

        <div className="contact-links cta-animate">
          <a href="mailto:hello@jimmychin.com">
            <MdEmail /> hello@jimmychin.com
          </a>

          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://instagram.com/jimmychin"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
