import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

/* ================= BACKGROUND ================= */
import projectBg from "../assets/project_bg.jpg";

/* ================= THUMBNAILS ================= */
import proj1T from "../assets/project1.jpg";
import proj2T from "../assets/project2.jpg";
import proj3T from "../assets/project3.jpg";
import proj4T from "../assets/project4.jpg";
import proj5T from "../assets/project5.jpg";
import proj6T from "../assets/project6.jpg";
import proj7T from "../assets/project7.jpg";
import proj8T from "../assets/project8.jpg";
import proj9T from "../assets/project9.jpg";

/* ================= GALLERY IMAGES ================= */
/* FOLLOW YOUR NAMING RULE STRICTLY */
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
// import Proj3 from '../assets/project3_main.jpg'

/* ================= PROJECT DATA ================= */

const PROJECTS = [
  {
    id: 1,
    src: proj1T,
    images: [
      proj1T,
      Proj1a,
      Proj1b,
      Proj1c,
      Proj1d,
      Proj1e,
      Proj1f,
      Proj1g,
      Proj1h,
    ],
    title: "The Vantage House",
    categories: ["Renovation", "Construction"],
    area: "2800 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description:
      "A contemporary multi-storey residence with warm wood accents and glass balustrades.",
  },
  {
    id: 2,
    src: proj2T,
    images: [proj2T, Proj2a, Proj2b],
    title: "The Linear House",
    categories: ["Designing", "Construction"],
    area: "2700 Sq.Ft.",
    location: "Maswanpur, Kanpur, UP",
    description:
      "Minimal two-storey urban dwelling blending concrete textures.",
  },
  {
    id: 3,
    src: proj3T,
    images: [proj3T],
    title: "The Kidwai Nagar Residence",
    categories: ["Designing", "Renovation"],
    area: "5200 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description:
      "Sleek mixed-use residential building with timber vertical fins.",
  },
  {
    id: 4,
    src: proj4T,
    images: [proj4T],
    title: "Yog Tower",
    categories: ["Renovation", "Interior Designing"],
    area: "1800 Sq.Ft.",
    location: "Civil Lines, Kanpur, UP",
    description: "Short Description.",
  },
  {
    id: 5,
    src: proj5T,
    images: [proj5T],
    title: "Highway City Residence",
    categories: ["Designing"],
    area: "4800 Sq.Ft.",
    location: "New Highway City, Kanpur, UP",
    description: "Short Description.",
  },
  {
    id: 6,
    src: proj6T,
    images: [proj6T],
    title: "Raj Tower",
    categories: ["Designing", "Renovation"],
    area: "6400 Sq.Ft.",
    location: "Naubasta, Kanpur, UP",
    description: "Short Description.",
  },
  {
    id: 7,
    src: proj7T,
    images: [proj7T],
    title: "Saket Nagar Apartments",
    categories: ["Designing"],
    area: "6300 Sq.Ft.",
    location: "Saket Nagar, Kanpur, UP",
    description: "Short Description.",
  },
  {
    id: 8,
    src: proj8T,
    images: [proj8T],
    title: "Dev Tower",
    categories: ["Designing", "Construction"],
    area: "6800 Sq.Ft.",
    location: "Kidwai Nagar, Kanpur, UP",
    description: "Short Description.",
  },
  {
    id: 9,
    src: proj9T,
    images: [proj9T],
    title: "Acharya Nagar Residence",
    categories: ["Designing", "Construction"],
    area: "4100 Sq.Ft.",
    location: "Acharya Nagar, Kanpur, UP",
    description: "Short Description.",
  },
];

const CATS = [
  "All",
  "Designing",
  "Renovation",
  "Construction",
  "Interior Designing",
];

/* ================= PROJECT CARD ================= */

function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(project)}
      style={{ cursor: "pointer" }}
    >
      <div
        style={{ position: "relative", paddingTop: "75%", overflow: "hidden" }}
      >
        <img
          src={project.src}
          alt={project.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ paddingTop: "14px" }}>
        <h3
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "clamp(1rem,1.8vw,1.2rem)",
          }}
        >
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${projectBg})`,
          backgroundSize: "cover",
        }}
      />

      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "100px 40px",
        }}
      >
        {/* GRID */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: "28px",
          }}
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ScrollIndicator nextSection="contact" />

      {/* ================= LIGHTBOX GALLERY ================= */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.9)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                width: "min(1100px,95vw)",
                maxHeight: "90vh",
                overflow: "hidden",
              }}
            >
              {/* ===== SCROLLABLE IMAGE GALLERY ===== */}

              <div
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                }}
              >
                {selected.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      flex: "0 0 100%",
                      height: "55vh",
                      objectFit: "cover",
                      scrollSnapAlign: "start",
                    }}
                  />
                ))}
              </div>

              {/* ===== DETAILS ===== */}

              <div style={{ padding: "28px" }}>
                <h3
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "2rem",
                    marginBottom: "6px",
                  }}
                >
                  {selected.title}
                </h3>

                <p
                  style={{
                    letterSpacing: ".15em",
                    color: "#C9A84C",
                  }}
                >
                  {selected.area}
                </p>

                <p
                  style={{
                    marginTop: "14px",
                    lineHeight: 1.7,
                    color: "#555",
                  }}
                >
                  {selected.description}
                </p>

                <button
                  onClick={() => setSelected(null)}
                  style={{
                    marginTop: "20px",
                    border: "1px solid #111",
                    background: "transparent",
                    padding: "10px 22px",
                    cursor: "pointer",
                  }}
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
