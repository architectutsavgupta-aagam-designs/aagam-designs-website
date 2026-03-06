import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";



import projectBg from "../assets/project_bg.jpg";



import proj1T from "../assets/project1.jpg";
import proj2T from "../assets/project2.jpg";
import proj3T from "../assets/project3.jpg";
import proj4T from "../assets/project4.jpg";
import proj5T from "../assets/project5.jpg";
import proj6T from "../assets/project6.jpg";
import proj7T from "../assets/project7.jpg";
import proj8T from "../assets/project8.jpg";
import proj9T from "../assets/project9.jpg";
import proj10T from "../assets/project10.jpg";
import proj11T from "../assets/project11.jpg";
import proj12T from "../assets/project12.jpg";
import proj13T from "../assets/project13.jpg";
import proj14T from "../assets/project14.jpg";
import proj15T from "../assets/project15.jpg";
import proj16T from "../assets/project16.jpg";
import proj17T from "../assets/project17.jpg";
import proj18T from "../assets/project18.jpg";
import proj19T from "../assets/project19.jpg";
import proj20T from "../assets/project20.jpg";
import proj21T from "../assets/project21.jpg";




// Project 1 - The Vantage House
import Proj1a from "../assets/project1a.jpg";
import Proj1b from "../assets/project1b.jpg";
import Proj1c from "../assets/project1c.jpg";
import Proj1d from "../assets/project1d.jpg";
import Proj1e from "../assets/project1e.jpg";
import Proj1f from "../assets/project1f.jpg";
import Proj1g from "../assets/project1g.jpg";
import Proj1h from "../assets/project1h.jpg";

//Project 2 - The Linear House
import Proj2a from "../assets/project2a.jpg";
import Proj2b from "../assets/project2b.jpg";

//Project 3 - The Kidwai Nagar Residence
import Proj3a from "../assets/project3a.jpg";
import Proj3b from "../assets/project3b.jpg";

//Project 4 - Agarwal Residence
import Proj4a from "../assets/project4a.jpg";
import Proj4a1 from "../assets/project4a1.jpg";
import Proj4a2 from "../assets/project4a2.jpg";
import Proj4a3 from "../assets/project4a3.jpg";
import Proj4b from "../assets/project4b.jpg";
import Proj4b1 from "../assets/project4b1.jpg";
import Proj4b2 from "../assets/project4b2.jpg";
import Proj4c from "../assets/project4c.jpg";
import Proj4c1 from "../assets/project4c1.jpg";
import Proj4d from "../assets/project4d.jpg";
import Proj4d1 from "../assets/project4d1.jpg";
import Proj4d2 from "../assets/project4d2.jpg";
import Proj4d3 from "../assets/project4d3.jpg";
import Proj4d4 from "../assets/project4d4.jpg";
import Proj4d5 from "../assets/project4d5.jpg";
import Proj4d6 from "../assets/project4d6.jpg";
import Proj4e from "../assets/project4e.jpg";


//Project 5 - Highway City Residence
import Proj5a from "../assets/project5a.jpg";

//Project 6 - Raj Tower -- Had only one image
//Project 7 - Saket Nagar Apartments -- Had only one image
//Project 8 - Dev Tower
import Proj8a from "../assets/project8a.jpg";

//Project 9 - Acharya Nagar Residence
import Proj9a from "../assets/project9a.jpg";

//Project 10 - Kidwai Nagar Apartment -- one image only
//Project 11 - Yashodanagar residence
import Proj11a from "../assets/project11a.jpg";

//Project 12 - Lucknow Residence - One image only
//Project 13 - Lucknow Residence - One image only
//Project 14 - Keshav Nagar Residence
import Proj14a from "../assets/project14a.jpg";
import Proj14b from "../assets/project14b.jpg";

//Project 15 - Shukla Niwas
import Proj15a from "../assets/project15a.jpg";
import Proj15b from "../assets/project15b.jpg";
import Proj15c from "../assets/project15c.jpg";
import Proj15d from "../assets/project15d.jpg";
import Proj15e from "../assets/project15e.jpg";

//Project 16 - Mansarovar Residence
import Proj16a from "../assets/project16a.jpg";

//Project 17 - Ratanlal Nagar Residence
import Proj17a from "../assets/project17a.jpg";

//Project 18 - Swaroop Nagar Residence
import Proj18a from "../assets/project18a.jpg";
import Proj18b from "../assets/project18b.jpg";
import Proj18c from "../assets/project18c.jpg";


//Project 19 - Kakadev Hotel - Meridian Sky
import Proj19a from "../assets/project19a.jpg";
import Proj19b from "../assets/project19b.jpg";
import Proj19c from "../assets/project19c.jpg";
import Proj19d from "../assets/project19d.jpg";
import Proj19e from "../assets/project19e.jpg";

//Project 20 - Kokkum Cafe
import Proj20a from "../assets/project20a.jpg";
import Proj20b from "../assets/project20b.jpg";
import Proj20c from "../assets/project20c.jpg";
import Proj20d from "../assets/project20d.jpg";
import Proj20e from "../assets/project20e.jpg";
import Proj20f from "../assets/project20f.jpg";


//Project 21 - Gulmohar Vihar Renovation
import Proj21a from "../assets/project21a.jpg";
import Proj21b from "../assets/project21b.jpg";
import Proj21c from "../assets/project21c.jpg";
import Proj21d from "../assets/project21d.jpg";
import Proj21e from "../assets/project21e.jpg";
import Proj21f from "../assets/project21f.jpg";
import Proj21g from "../assets/project21g.jpg";
import Proj21h from "../assets/project21h.jpg";
import Proj21i from "../assets/project21i.jpg";


const PROJECTS = [
  {
    id: 1,
    src: proj1T,
    images: [proj1T, Proj1a, Proj1b, Proj1c, Proj1d, Proj1e, Proj1f, Proj1g, Proj1h],
    title: "The Vantage House",
    categories: ["Renovation", "Construction"],
    area: "2800 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description: "A renovation construction project aimed to modernise the house facade and to accommodate family's changing lifestyle.",
  },
  {
    id: 15,
    src: proj15T,
    images: [proj15T, Proj15a, Proj15b, Proj15c, Proj15d, Proj15e],
    title: "Shukla Niwas",
    categories: ["Designing", "Renovation"],
    area: "4800 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description: "A renovation facade design project that was aimed to modernize the old facade into a modern contemporary one.",
  },
  {
    id: 21,
    src: proj21T,
    images: [proj21T, Proj21a, Proj21b, Proj21c, Proj21d, Proj21e, Proj21f, Proj21g, Proj21h, Proj21i],
    title: "Gulmohar Vihar Renovation",
    categories: ["Renovation", "Construction"],
    area: "1200 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description: "This interior design project features a warm, inviting dining space that combines classic European-inspired aesthetics with modern functional elements.",
  },
  {
    id: 2,
    src: proj2T,
    images: [proj2T, Proj2a, Proj2b],
    title: "The Linear House",
    categories: ["Designing", "Construction"],
    area: "2700 Sq.Ft.",
    location: "Maswanpur, Kanpur, UP",
    description: "A compact 3 bkh contemporary house located in maswanpur locality of kanpur city.",
  },
  {
    id: 20,
    src: proj20T,
    images: [proj20T, Proj20a, Proj20b, Proj20c, Proj20d, Proj20e, Proj20f],
    title: "Kokkum Cafe",
    categories: ["Interior Designing"],
    area: "1200 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description: "This interior design project features a warm, inviting dining space that combines classic European-inspired aesthetics with modern functional elements.",
  },
  
  {
    id: 3,
    src: proj3T,
    images: [proj3T, Proj3a, Proj3b],
    title: "The Kidwai Nagar Residence",
    categories: ["Designing", "Renovation"],
    area: "5200 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description: "Sleek mixed-use residential building with timber vertical fins.",
  },
  {
    id: 4,
    src: proj4T,
    images: [proj4T, Proj4a, Proj4a1, Proj4a2, Proj4a3, Proj4b, Proj4b1, Proj4b2, Proj4c, Proj4c1, Proj4d, Proj4d1, Proj4d2, Proj4d3, Proj4d4, Proj4d5, Proj4d6, Proj4e],
    title: "Agarwal Residence",
    categories: ["Renovation", "Interior Designing"],
    area: "1800 Sq.Ft.",
    location: "Civil Lines, Kanpur, UP",
    description: "An interior renovation project designed to merge two existing flats into a single cohesive residence while modernizing the overall interior design.",
  },

  {
    id: 19,
    src: proj19T,
    images: [proj19T, Proj19a, Proj19b, Proj19c, Proj19d, Proj19e],
    title: "Meridian Sky",
    categories: ["Interior Designing"],
    area: "48000 Sq.Ft.",
    location: "Namak factory, Kakadev, Kanpur, UP",
    description: "A modern luxurious hospitality establishment in the heart of city containing fifty rooms, four banquets, two restaurants, rooftop infinity pool and other modern amenities.",
  },
  {
    id: 18,
    src: proj18T,
    images: [proj18T, Proj18a, Proj18b, Proj18c],
    title: "Swaroop Nagar Residence",
    categories: ["Designing", "Renovation"],
    area: "11200 Sq.Ft.",
    location: "Swaroop Nagar, Kanpur, UP",
    description: "A renovation construction project to redevelop a forty year old bungalow to meet modern living standards of a family of CA's.",
  },
  {
    id: 14,
    src: proj14T,
    images: [proj14T, Proj14a, Proj14b],
    title: "Keshav Nagar Residence",
    categories: ["Designing", "Renovation"],
    area: "4500 Sq.Ft.",
    location: "Keshav Nagar, Kanpur, UP",
    description: "Renovation extension project for an elderly couple. Aim of the project was to extend a floor containing a 2 bhk portion on top of existing single storey building.",
  },
  {
    id: 8,
    src: proj8T,
    images: [proj8T, Proj8a],
    title: "Dev Tower",
    categories: ["Designing", "Construction"],
    area: "6800 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description: "Located in Kidwai Nagar area of Kanpur City, a sophisticated commercial development designed to offer a carpet area of close to 1000sqft per floor. The complex offers upper ground, lower ground plus two commercial floors was undertaken as a turnkey project.",
  },
  {
    id: 17,
    src: proj17T,
    images: [proj17T, Proj17a],
    title: "Ratanlal Nagar Residence",
    categories: ["Designing", "Renovation"],
    area: "4900 Sq.Ft.",
    location: "Ratanlal Nagar, Kanpur, UP",
    description: "A multi-story residence featuring clean minimalist facade. Designed for a single family of eight people, containing a 6 bhk establishment with a garden and lot of open spaces.",
  },
  {
    id: 11,
    src: proj11T,
    images: [proj11T, Proj11a],
    title: "Yashoda Nagar Residence",
    categories: ["Designing"],
    area: "5400 Sq.Ft.",
    location: "Yashoda Nagar, Kanpur, UP",
    description: "A five bhk bungalow designed for a family of eight members in kanpur city.",
  },
  {
    id: 16,
    src: proj16T,
    images: [proj16T, Proj16a],
    title: "Mansarovar Residence",
    categories: ["Designing"],
    area: "7300 Sq.Ft.",
    location: "Mansarovar Yojna, Lucknow, UP",
    description: "A residential project located in Mansarovar Yojna locality of Lucknow city covering a builtup 7300 Sq.Ft.",
  },
  {
    id: 9,
    src: proj9T,
    images: [proj9T, Proj9a],
    title: "Acharya Nagar Residence",
    categories: ["Designing", "Construction"],
    area: "4100 Sq.Ft.",
    location: "Acharya Nagar, Kanpur, UP",
    description: "A contemporary multi-story home designed to accommodate two families. With a 2bhk portion on each floor and common amenities and car parking on ground floor.",
  },
  {
    id: 5,
    src: proj5T,
    images: [proj5T, Proj5a],
    title: "Highway City Residence",
    categories: ["Designing"],
    area: "4800 Sq.Ft.",
    location: "New Highway City, Kanpur, UP",
    description: "A multi storey contemporary residence made for three families in a builtup area of 6400sqft.",
  },
  {
    id: 6,
    src: proj6T,
    images: [proj6T],
    title: "Raj Tower",
    categories: ["Designing", "Renovation"],
    area: "6400 Sq.Ft.",
    location: "Naubasta, Kanpur, UP",
    description: "A mixed use building with a builtup area of 6400sqft.",
  },
  {
    id: 7,
    src: proj7T,
    images: [proj7T],
    title: "Saket Nagar Apartments",
    categories: ["Designing"],
    area: "6300 Sq.Ft.",
    location: "Saket Nagar, Kanpur, UP",
    description: "A modern luxurious apartment designed in builtup area of 6300sqft in saket nagar area of kanpur city.",
  },
  {
    id: 10,
    src: proj10T,
    images: [proj10T],
    title: "Kidwai Nagar Apartment",
    categories: ["Designing"],
    area: "1450 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description: "A striking mixed-use complex designed to incorporate two floors for commercial and three floors of residential units. Residential floor has two units of three bhk each floor.",
  },
  {
    id: 12,
    src: proj12T,
    images: [proj12T],
    title: "Indira Nagar Residence",
    categories: ["Designing"],
    area: "3250 Sq.Ft.",
    location: "Indira Nagar, Lucknow, UP",
    description: "A residential project located in Indira Nagar locality of Lucknow city covering a builtup 3250 Sq.Ft.",
  },
  {
    id: 13,
    src: proj13T,
    images: [proj13T],
    title: "Vrindavan Colony Residence",
    categories: ["Designing"],
    area: "3550 Sq.Ft.",
    location: "Vrindavan colony, Lucknow, UP",
    description: "A residential project located in Vrindavan colony locality of Lucknow city covering a builtup 3550 Sq.Ft.",
  },
];

const CATS = ["All", "Designing", "Renovation", "Construction", "Interior Designing"];


function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onClick(project)}
      whileHover={{ y: -5 }}
      style={{ cursor: "pointer" }}
    >
      <div style={{ position: "relative", paddingTop: "100%", paddingBottom: "25%", overflow: "hidden" }}>
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", transition: "transform 0.7s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div
          style={{
            position: "absolute", inset: 0, background: "rgba(0,0,0,0)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.45s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(0,0,0,0.52)";
            e.currentTarget.querySelector(".ov").style.opacity = "1";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(0,0,0,0)";
            e.currentTarget.querySelector(".ov").style.opacity = "0";
          }}
        >
          <div className="ov" style={{ opacity: 0, textAlign: "center", transition: "opacity 0.3s" }}>
            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(9px,1.3vw,10px)", letterSpacing: "0.3em", color: "#fff", margin: "0 0 8px", textTransform: "uppercase" }}>
              View Project
            </p>
            <div style={{ width: "28px", height: "1px", background: "#C9A84C", margin: "0 auto" }} />
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "clamp(10px,1.8vh,16px)", paddingBottom: "clamp(6px,1vh,10px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "7px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {project.categories.map(cat => (
              <span key={cat} style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(7px,1vw,8.5px)", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.38)", padding: "2px 7px", whiteSpace: "nowrap" }}>
                {cat}
              </span>
            ))}
          </div>
          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300, fontSize: "clamp(8px,1.1vw,9.5px)", color: "#aaa", whiteSpace: "nowrap" }}>
            {project.location}
          </span>
        </div>
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "clamp(0.95rem,1.8vw,1.2rem)", color: "#1a1a1a", margin: "0 0 4px" }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300, fontSize: "clamp(8px,1vw,9.5px)", color: "#999", margin: 0, letterSpacing: "0.14em" }}>
          {project.area}
        </p>
      </div>
    </motion.div>
  );
}


function Lightbox({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const total = project.images.length;

  const prev = useCallback(e => {
    e?.stopPropagation();
    setImgIndex(i => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(e => {
    e?.stopPropagation();
    setImgIndex(i => (i + 1) % total);
  }, [total]);

  /* ── Keyboard navigation + body scroll lock ─────────────── */
  useEffect(() => {
    const handleKey = e => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [prev, next, onClose]);

  const wheelCooldown = useRef(false);

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return; 
    if (Math.abs(e.deltaX) < 10) return;                 
    if (wheelCooldown.current) return;                   
    wheelCooldown.current = true;
    setTimeout(() => { wheelCooldown.current = false; }, 600);
    if (e.deltaX > 0) next(); else prev();
  };


  const swipeStartX = useRef(null);
  const swipeStartY = useRef(null);

  const handleSwipeStart = (e) => {
    const touch = e.touches?.[0] ?? e;
    swipeStartX.current = touch.clientX;
    swipeStartY.current = touch.clientY;
  };

  const handleSwipeEnd = (e) => {
    if (swipeStartX.current === null) return;
    const touch = e.changedTouches?.[0] ?? e;
    const dx = touch.clientX - swipeStartX.current;
    const dy = touch.clientY - swipeStartY.current;
    swipeStartX.current = null;
    swipeStartY.current = null;
    if (Math.abs(dx) < 30 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next(); else prev();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 10000,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(10px,3vw,32px)",
        cursor: "pointer",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        style={{
          background: "#111",
          width: "100%",
          maxWidth: "min(800px, 96vw)",
          maxHeight: "92vh",
          overflowY: "auto",
          overflowX: "hidden",
          cursor: "default",
          position: "relative",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          style={{ position: "relative", background: "#000", touchAction: "none", userSelect: "none" }}
          onTouchStart={handleSwipeStart}
          onTouchEnd={handleSwipeEnd}
          onWheel={handleWheel}
          onContextMenu={e => e.preventDefault()}
        >

          <style>{`
            .lb-img-wrap { aspect-ratio: 16 / 10; }
            @media (max-width: 480px) { .lb-img-wrap { aspect-ratio: 4 / 3; } }
            .lb-modal::-webkit-scrollbar { display: none; }
          `}</style>

          <div className="lb-img-wrap" style={{ width: "100%", position: "relative", overflow: "hidden" }}>

            <AnimatePresence mode="wait">
              <motion.img
                key={imgIndex}
                src={project.images[imgIndex]}
                alt={`${project.title} — photo ${imgIndex + 1}`}
                className="lb-image"
                draggable={false}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                  userSelect: "none",
                  WebkitUserDrag: "none",
                }}
              />
            </AnimatePresence>



            {total > 1 && (
              <button
                onClick={prev}
                onTouchEnd={e => { e.stopPropagation(); prev(); }}
                aria-label="Previous image"
                style={{
                  position: "absolute", left: 0, top: 0, bottom: 0,
                  width: "clamp(44px,9vw,70px)",
                  background: "linear-gradient(to right, rgba(0,0,0,0.50), transparent)",
                  border: "none", cursor: "pointer", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "flex-start",
                  paddingLeft: "clamp(10px,2vw,20px)",
                  transition: "background 0.2s",
                  zIndex: 3, minWidth: "unset", minHeight: "unset",
                  pointerEvents: "auto",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(to right, rgba(0,0,0,0.72), transparent)"}
                onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(to right, rgba(0,0,0,0.50), transparent)"}
              >
                <svg width="clamp(16px,2.5vw,22px)" height="clamp(16px,2.5vw,22px)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            
            {total > 1 && (
              <button
                onClick={next}
                onTouchEnd={e => { e.stopPropagation(); next(); }}
                aria-label="Next image"
                style={{
                  position: "absolute", right: 0, top: 0, bottom: 0,
                  width: "clamp(44px,9vw,70px)",
                  background: "linear-gradient(to left, rgba(0,0,0,0.50), transparent)",
                  border: "none", cursor: "pointer", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "flex-end",
                  paddingRight: "clamp(10px,2vw,20px)",
                  transition: "background 0.2s",
                  zIndex: 3, minWidth: "unset", minHeight: "unset",
                  pointerEvents: "auto",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(to left, rgba(0,0,0,0.72), transparent)"}
                onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(to left, rgba(0,0,0,0.50), transparent)"}
              >
                <svg width="clamp(16px,2.5vw,22px)" height="clamp(16px,2.5vw,22px)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}



            {total > 1 && (
              <div style={{
                position: "absolute", bottom: "10px", right: "14px",
                background: "rgba(0,0,0,0.58)",
                borderRadius: "20px",
                padding: "3px 11px",
                fontFamily: "Inter, sans-serif", fontWeight: 400,
                fontSize: "clamp(9px,1.1vw,11px)", letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.85)", zIndex: 3, whiteSpace: "nowrap",
              }}>
                {imgIndex + 1} / {total}
              </div>
            )}


            {total > 1 && total <= 16 && (
              <div style={{
                position: "absolute", bottom: "12px", left: "50%",
                transform: "translateX(-50%)",
                display: "flex", gap: "4px", zIndex: 3,
              }}>
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={e => { e.stopPropagation(); setImgIndex(i); }}
                    aria-label={`Photo ${i + 1}`}
                    style={{
                      width: i === imgIndex ? "20px" : "5px",
                      height: "3px",
                      borderRadius: "2px",
                      border: "none",
                      cursor: "pointer",
                      background: i === imgIndex ? "#C9A84C" : "rgba(255,255,255,0.35)",
                      transition: "all 0.3s ease",
                      padding: 0,
                      minWidth: "unset", minHeight: "unset",
                    }}
                  />
                ))}
              </div>
            )}



            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute", top: "10px", right: "10px",
                width: "32px", height: "32px",
                background: "rgba(0,0,0,0.58)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "2px",
                cursor: "pointer", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 10, transition: "background 0.2s",
                minWidth: "unset", minHeight: "unset",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.80)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.58)"}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        
        <div style={{ padding: "clamp(18px,3.5vw,28px)", background: "#fff" }}>



          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {project.categories.map(cat => (
                <span key={cat} style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(8px,1.1vw,9.5px)", letterSpacing: "0.25em", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.4)", padding: "3px 9px" }}>
                  {cat}
                </span>
              ))}
            </div>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300, fontSize: "clamp(9px,1.2vw,10px)", color: "#aaa" }}>
              {project.location}
            </span>
          </div>


          <h3 style={{fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "clamp(1.25rem,3vw,1.9rem)", color: "#1a1a1a", margin: "0 0 4px" }}>
            {project.title}
          </h3>

          <p style={{fontFamily: "Poppins, sans-serif", fontWeight: 300, fontSize: "clamp(9px,1.1vw,10.5px)", letterSpacing: "0.15em", color: "#C9A84C", margin: "0 0 clamp(10px,1.8vh,16px)" }}>
            {project.area}
          </p>
          <p style={{fontFamily: "Poppins, sans-serif", fontWeight: 300, fontSize: "clamp(12px,1.4vw,14px)", lineHeight: 1.72, color: "#555", margin: 0 }}>
            {project.description}
          </p>


          <button
            onClick={onClose}
            style={{
              marginTop: "clamp(16px,3vh,24px)",
              fontFamily: "Poppins, sans-serif", fontWeight: 500,
              fontSize: "clamp(9px,1.2vw,11px)", letterSpacing: "0.2em",
              padding: "clamp(8px,1.5vh,11px) clamp(16px,2.5vw,22px)",
              border: "1px solid #1a1a1a", background: "transparent",
              color: "#1a1a1a", cursor: "pointer", transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1a1a"; }}
          >
            CLOSE
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}


export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.categories.includes(filter));

  return (
    <section id="projects" style={{background: "#FCFCFC", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(184,134,11,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(184,134,11,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "clamp(36px,5vw,56px) clamp(36px,5vw,56px)",
      }} />

      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.05) 25%,rgba(201,168,76,0.40) 75%,transparent)",
        pointerEvents: "none",
      }} />

      <svg aria-hidden viewBox="0 0 500 500" style={{ position: "absolute", top: "-8%", right: "-5%", width: "clamp(240px,36vw,480px)", height: "clamp(240px,36vw,480px)", opacity: 0.055, pointerEvents: "none" }}>
        <circle cx="250" cy="250" r="230" fill="none" stroke="#8B6914" strokeWidth="0.8" />
        <circle cx="250" cy="250" r="170" fill="none" stroke="#8B6914" strokeWidth="0.5" strokeDasharray="4 6" />
        <circle cx="250" cy="250" r="110" fill="none" stroke="#8B6914" strokeWidth="0.5" />
        <circle cx="250" cy="250" r="50"  fill="none" stroke="#8B6914" strokeWidth="0.5" strokeDasharray="2 4" />
        <line x1="20" y1="250" x2="480" y2="250" stroke="#8B6914" strokeWidth="0.6" />
        <line x1="250" y1="20" x2="250" y2="480" stroke="#8B6914" strokeWidth="0.6" />
        <line x1="88" y1="88" x2="412" y2="412" stroke="#8B6914" strokeWidth="0.3" strokeDasharray="3 7" />
        <line x1="412" y1="88" x2="88" y2="412" stroke="#8B6914" strokeWidth="0.3" strokeDasharray="3 7" />
        <circle cx="250" cy="250" r="5" fill="#8B6914" opacity="0.5" />
      </svg>

      <svg aria-hidden viewBox="0 0 260 260" style={{ position: "absolute", bottom: "4%", left: 0, width: "clamp(120px,20vw,260px)", height: "clamp(120px,20vw,260px)", opacity: 0.055, pointerEvents: "none" }}>
        <line x1="0" y1="260" x2="260" y2="0" stroke="#8B6914" strokeWidth="0.8" />
        <line x1="0" y1="210" x2="210" y2="0" stroke="#8B6914" strokeWidth="0.5" />
        <line x1="0" y1="160" x2="160" y2="0" stroke="#8B6914" strokeWidth="0.4" />
        <line x1="0" y1="110" x2="110" y2="0" stroke="#8B6914" strokeWidth="0.3" />
      </svg>

      {[
        { top: "clamp(14px,2.5vh,28px)",    left:  "clamp(12px,2.5vw,36px)", rotate: "0deg"   },
        { top: "clamp(14px,2.5vh,28px)",    right: "clamp(12px,2.5vw,36px)", rotate: "90deg"  },
        { bottom: "clamp(14px,2.5vh,28px)", left:  "clamp(12px,2.5vw,36px)", rotate: "270deg" },
        { bottom: "clamp(14px,2.5vh,28px)", right: "clamp(12px,2.5vw,36px)", rotate: "180deg" },
      ].map((pos, i) => (
        <svg key={i} aria-hidden viewBox="0 0 28 28" width="28" height="28"
          style={{ position: "absolute", ...pos, opacity: 0.22, pointerEvents: "none", transform: `rotate(${pos.rotate})` }}>
          <line x1="0" y1="0" x2="0"  y2="16" stroke="#8B6914" strokeWidth="1.2" />
          <line x1="0" y1="0" x2="16" y2="0"  stroke="#8B6914" strokeWidth="1.2" />
        </svg>
      ))}

      <div aria-hidden style={{
        position: "absolute", right: "clamp(6px,1.5vw,18px)", top: "15%", bottom: "15%", width: "1px",
        background: "linear-gradient(180deg,transparent,rgba(184,134,11,0.18) 20%,rgba(184,134,11,0.18) 80%,transparent)",
        pointerEvents: "none",
      }} />

      <div style={{position: "absolute", inset: 0, zIndex: 1, background: "rgba(252,251,250,0.2)" }} />
      <div ref={ref} style={{position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "clamp(56px,9vh,128px) clamp(20px,6vw,96px)" }}>

        <div style={{ display:"flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "clamp(16px,3vh,24px)", marginBottom: "clamp(28px,5vh,52px)" }}>
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7 }}
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(9px,1.2vw,10px)", letterSpacing: "0.42em", color: "#C9A84C", textTransform: "uppercase", margin: "0 0 10px" }}>
              Our Work
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "clamp(1.8rem,4.2vw,3.2rem)", color: "#1a1a1a", margin: 0 }}>
              Selected Projects
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.7, delay: 0.25 }}
              style={{ width: "clamp(36px,4vw,48px)", height: "1px", background: "#C9A84C", transformOrigin: "left", marginTop: "clamp(12px,2vh,18px)" }} />
          </div>

          <motion.div initial={{opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.28 }}
            style={{ display: "flex", gap: "clamp(5px,0.8vw,10px)", flexWrap: "wrap", alignItems: "center" }}>
            {CATS.map(cat => {
              const active = filter === cat;
              const count = cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.categories.includes(cat)).length;
              return (
                <button key={cat} onClick={() => setFilter(cat)}
                  style={{
                    fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(8px,1.1vw,10.5px)", letterSpacing: "0.16em",
                    padding: "clamp(5px,1vh,8px) clamp(9px,1.4vw,15px)",
                    border: active ? "1px solid #1a1a1a" : "1px solid rgba(26,26,26,0.22)",
                    background: active ? "#1a1a1a" : "rgba(252,251,250,0.80)",
                    color: active ? "#fff" : "#666",
                    cursor: "pointer", transition: "all 0.28s ease", whiteSpace: "nowrap",
                    display: "inline-flex", alignItems: "center", gap: "4px",
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#1a1a1a"; e.currentTarget.style.background = "rgba(252,251,250,0.98)"; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = "rgba(26,26,26,0.22)"; e.currentTarget.style.color = "#666"; e.currentTarget.style.background = "rgba(252,251,250,0.80)"; } }}
                >
                  {cat}
                  <span style={{ fontSize: "clamp(7px,0.9vw,8.5px)", opacity: 0.55, fontWeight: 400 }}>({count})</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <motion.div layout style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "clamp(16px,2.5vw,28px)" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onClick={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>


        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "clamp(40px,8vh,80px) 0" }}>
            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300, fontSize: "clamp(11px,1.4vw,13px)", letterSpacing: "0.25em", color: "#bbb", textTransform: "uppercase" }}>
              No projects in this category yet
            </p>
          </motion.div>
        )}



        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          style={{ textAlign: "center", fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "clamp(8.5px,1.2vw,10px)", letterSpacing: "0.3em", color: "#bbb", marginTop: "clamp(28px,5vh,48px)", textTransform: "uppercase" }}>
          !!Next One Can Be Yours!!
        </motion.p>
      </div>

      <ScrollIndicator nextSection="contact" dark={false} />


      <AnimatePresence>
        {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

    </section>
  );
}