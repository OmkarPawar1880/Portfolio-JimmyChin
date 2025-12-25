import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

// Replace with real images
const images = [
  {
    src: "https://th.bing.com/th/id/OIP.C7ztEXLBn6Abb9K4vfaj2QHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    category: "Portraits",
  },
  {
    src: "https://th.bing.com/th/id/OIP.vioSId9Rx93tBTXjrE-BNQHaJ4?w=189&h=252&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    category: "Portraits",
  },
  {
    src: "https://images.unsplash.com/photo-1580250642511-1660fe42ad58?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    category: "Events",
  },
  {
    src: "https://tse3.mm.bing.net/th/id/OIP.Jxm8ioDHc1co0dzpVqqx0AHaEH?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    category: "Travel",
  },
  {
    src: "https://tse1.mm.bing.net/th/id/OIP.5oFsN46dk-lTXnD-mZjxSwHaLJ?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Travel",
  },
];

const categories = ["All", "Portraits", "Events", "Travel"];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [active, setActive] = useState("All");

  const filteredImages =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-item ",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
      gsap.from(".portfolio-header > *", {
        y: 40,
         opacity: 0,
         duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
         trigger: ".portfolio-header",
        start: "top 80%",
        },
        });

    }, sectionRef);

    return () => ctx.revert(); // cleanup before next filter change
  }, [active]);

  return (
    <section className="portfolio" id="portfolio" ref={sectionRef}>
      {/* Header */}
      <div className="portfolio-header">
        <h2>Selected Work</h2>
        <p>Stories shaped by risk, trust, and presence.</p>
      </div>

      {/* Filters */}
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid" ref={gridRef}>
        {filteredImages.map((img, i) => (
          <div className="portfolio-item" key={i}>
            <img src={img.src} alt={img.category} />
            <div className="overlay">
              <span>{img.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
