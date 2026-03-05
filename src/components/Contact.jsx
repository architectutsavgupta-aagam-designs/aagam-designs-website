import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { fadeInLeft, fadeInRight } from "../animations/variants";

const SOCIALS = [
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/aagam_designs/",
    hoverBg: "#E1306C",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/utsav-gupta-629985197/",
    hoverBg: "#0077B5",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    href: "https://wa.me/918601111494",
    hoverBg: "#25D366",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      style={{
        background: "#FCFCFC",
        padding: "clamp(56px,9vh,128px) clamp(20px,6vw,96px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      



      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg,transparent,rgba(201,168,76,0.40) 25%,rgba(201,168,76,0.40) 75%,transparent)",
          pointerEvents: "none",
        }}
      />


      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg,transparent,rgba(201,168,76,0.30) 25%,rgba(201,168,76,0.30) 75%,transparent)",
          pointerEvents: "none",
        }}
      />


      <svg
        aria-hidden
        viewBox="0 0 900 900"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "clamp(520px,92vw,1040px)",
          height: "clamp(520px,92vw,1040px)",
          opacity: 0.07,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <circle
          cx="450"
          cy="450"
          r="420"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.8"
        />
        <circle
          cx="450"
          cy="450"
          r="378"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="6 8"
        />
        <circle
          cx="450"
          cy="450"
          r="336"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.8"
        />
        <circle
          cx="450"
          cy="450"
          r="294"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
        <circle
          cx="450"
          cy="450"
          r="252"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.8"
        />
        <circle
          cx="450"
          cy="450"
          r="210"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="3 5"
        />
        <circle
          cx="450"
          cy="450"
          r="168"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.8"
        />
        <circle
          cx="450"
          cy="450"
          r="126"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="2 4"
        />
        <circle
          cx="450"
          cy="450"
          r="84"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.8"
        />
        <circle
          cx="450"
          cy="450"
          r="42"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <circle cx="450" cy="450" r="5" fill="#8B6914" opacity="0.6" />
        <line
          x1="30"
          y1="450"
          x2="870"
          y2="450"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <line
          x1="450"
          y1="30"
          x2="450"
          y2="870"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <line
          x1="153"
          y1="153"
          x2="747"
          y2="747"
          stroke="#8B6914"
          strokeWidth="0.3"
          strokeDasharray="4 10"
        />
        <line
          x1="747"
          y1="153"
          x2="153"
          y2="747"
          stroke="#8B6914"
          strokeWidth="0.3"
          strokeDasharray="4 10"
        />
        {[42, 84, 126, 168, 210, 252, 294, 336, 378, 420].map((r, i) => (
          <g key={i}>
            <line
              x1={450 - r - 6}
              y1="450"
              x2={450 - r + 6}
              y2="450"
              stroke="#8B6914"
              strokeWidth="0.6"
            />
            <line
              x1={450 + r - 6}
              y1="450"
              x2={450 + r + 6}
              y2="450"
              stroke="#8B6914"
              strokeWidth="0.6"
            />
            <line
              x1="450"
              y1={450 - r - 6}
              x2="450"
              y2={450 - r + 6}
              stroke="#8B6914"
              strokeWidth="0.6"
            />
            <line
              x1="450"
              y1={450 + r - 6}
              x2="450"
              y2={450 + r + 6}
              stroke="#8B6914"
              strokeWidth="0.6"
            />
          </g>
        ))}
      </svg>


      <svg
        aria-hidden
        viewBox="0 0 400 400"
        style={{
          position: "absolute",
          top: "-12%",
          right: "-8%",
          width: "clamp(180px,26vw,360px)",
          height: "clamp(180px,26vw,360px)",
          opacity: 0.065,
          pointerEvents: "none",
        }}
      >
        <circle
          cx="200"
          cy="200"
          r="185"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.7"
        />
        <circle
          cx="200"
          cy="200"
          r="155"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
        <circle
          cx="200"
          cy="200"
          r="125"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.7"
        />
        <circle
          cx="200"
          cy="200"
          r="95"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="3 5"
        />
        <circle
          cx="200"
          cy="200"
          r="65"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.7"
        />
        <circle
          cx="200"
          cy="200"
          r="35"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <circle
          cx="200"
          cy="200"
          r="12"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <circle cx="200" cy="200" r="3" fill="#8B6914" />
        <line
          x1="15"
          y1="200"
          x2="385"
          y2="200"
          stroke="#8B6914"
          strokeWidth="0.4"
        />
        <line
          x1="200"
          y1="15"
          x2="200"
          y2="385"
          stroke="#8B6914"
          strokeWidth="0.4"
        />
        <line
          x1="74"
          y1="74"
          x2="326"
          y2="326"
          stroke="#8B6914"
          strokeWidth="0.25"
          strokeDasharray="3 8"
        />
        <line
          x1="326"
          y1="74"
          x2="74"
          y2="326"
          stroke="#8B6914"
          strokeWidth="0.25"
          strokeDasharray="3 8"
        />
      </svg>


      <svg
        aria-hidden
        viewBox="0 0 360 360"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-6%",
          width: "clamp(160px,24vw,320px)",
          height: "clamp(160px,24vw,320px)",
          opacity: 0.065,
          pointerEvents: "none",
        }}
      >
        <circle
          cx="180"
          cy="180"
          r="168"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.7"
        />
        <circle
          cx="180"
          cy="180"
          r="138"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="4 5"
        />
        <circle
          cx="180"
          cy="180"
          r="108"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.7"
        />
        <circle
          cx="180"
          cy="180"
          r="78"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
        <circle
          cx="180"
          cy="180"
          r="48"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.7"
        />
        <circle
          cx="180"
          cy="180"
          r="20"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <circle cx="180" cy="180" r="4" fill="#8B6914" />
        <line
          x1="12"
          y1="180"
          x2="348"
          y2="180"
          stroke="#8B6914"
          strokeWidth="0.4"
        />
        <line
          x1="180"
          y1="12"
          x2="180"
          y2="348"
          stroke="#8B6914"
          strokeWidth="0.4"
        />
        <line
          x1="60"
          y1="60"
          x2="300"
          y2="300"
          stroke="#8B6914"
          strokeWidth="0.25"
          strokeDasharray="3 8"
        />
        <line
          x1="300"
          y1="60"
          x2="60"
          y2="300"
          stroke="#8B6914"
          strokeWidth="0.25"
          strokeDasharray="3 8"
        />
      </svg>


      <svg
        aria-hidden
        viewBox="0 0 220 220"
        style={{
          position: "absolute",
          top: "5%",
          left: "2%",
          width: "clamp(90px,14vw,180px)",
          height: "clamp(90px,14vw,180px)",
          opacity: 0.055,
          pointerEvents: "none",
        }}
      >
        <circle
          cx="110"
          cy="110"
          r="100"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.6"
        />
        <circle
          cx="110"
          cy="110"
          r="78"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.4"
          strokeDasharray="3 5"
        />
        <circle
          cx="110"
          cy="110"
          r="56"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.6"
        />
        <circle
          cx="110"
          cy="110"
          r="34"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.4"
          strokeDasharray="2 4"
        />
        <circle
          cx="110"
          cy="110"
          r="14"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.4"
        />
        <circle cx="110" cy="110" r="3" fill="#8B6914" />
        <line
          x1="10"
          y1="110"
          x2="210"
          y2="110"
          stroke="#8B6914"
          strokeWidth="0.35"
        />
        <line
          x1="110"
          y1="10"
          x2="110"
          y2="210"
          stroke="#8B6914"
          strokeWidth="0.35"
        />
      </svg>


      <svg
        aria-hidden
        viewBox="0 0 180 180"
        style={{
          position: "absolute",
          bottom: "8%",
          right: "3%",
          width: "clamp(70px,11vw,150px)",
          height: "clamp(70px,11vw,150px)",
          opacity: 0.055,
          pointerEvents: "none",
        }}
      >
        <circle
          cx="90"
          cy="90"
          r="82"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.6"
        />
        <circle
          cx="90"
          cy="90"
          r="62"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.4"
          strokeDasharray="3 4"
        />
        <circle
          cx="90"
          cy="90"
          r="42"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.6"
        />
        <circle
          cx="90"
          cy="90"
          r="24"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.4"
          strokeDasharray="2 3"
        />
        <circle
          cx="90"
          cy="90"
          r="8"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.4"
        />
        <circle cx="90" cy="90" r="2.5" fill="#8B6914" />
        <line
          x1="8"
          y1="90"
          x2="172"
          y2="90"
          stroke="#8B6914"
          strokeWidth="0.3"
        />
        <line
          x1="90"
          y1="8"
          x2="90"
          y2="172"
          stroke="#8B6914"
          strokeWidth="0.3"
        />
      </svg>


      <svg
        aria-hidden
        viewBox="0 0 140 140"
        style={{
          position: "absolute",
          top: "42%",
          left: "-2%",
          width: "clamp(55px,8vw,110px)",
          height: "clamp(55px,8vw,110px)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <circle
          cx="70"
          cy="70"
          r="64"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <circle
          cx="70"
          cy="70"
          r="48"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.35"
          strokeDasharray="2 4"
        />
        <circle
          cx="70"
          cy="70"
          r="32"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <circle
          cx="70"
          cy="70"
          r="16"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.35"
          strokeDasharray="1 3"
        />
        <circle cx="70" cy="70" r="2" fill="#8B6914" />
        <line
          x1="6"
          y1="70"
          x2="134"
          y2="70"
          stroke="#8B6914"
          strokeWidth="0.3"
        />
        <line
          x1="70"
          y1="6"
          x2="70"
          y2="134"
          stroke="#8B6914"
          strokeWidth="0.3"
        />
      </svg>


      <svg
        aria-hidden
        viewBox="0 0 140 140"
        style={{
          position: "absolute",
          top: "55%",
          right: "-2%",
          width: "clamp(55px,8vw,110px)",
          height: "clamp(55px,8vw,110px)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <circle
          cx="70"
          cy="70"
          r="64"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <circle
          cx="70"
          cy="70"
          r="48"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.35"
          strokeDasharray="2 4"
        />
        <circle
          cx="70"
          cy="70"
          r="32"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <circle
          cx="70"
          cy="70"
          r="16"
          fill="none"
          stroke="#8B6914"
          strokeWidth="0.35"
          strokeDasharray="1 3"
        />
        <circle cx="70" cy="70" r="2" fill="#8B6914" />
        <line
          x1="6"
          y1="70"
          x2="134"
          y2="70"
          stroke="#8B6914"
          strokeWidth="0.3"
        />
        <line
          x1="70"
          y1="6"
          x2="70"
          y2="134"
          stroke="#8B6914"
          strokeWidth="0.3"
        />
      </svg>


      {[
        {
          top: "clamp(14px,2.5vh,28px)",
          left: "clamp(12px,2.5vw,36px)",
          rotate: "0deg",
        },
        {
          top: "clamp(14px,2.5vh,28px)",
          right: "clamp(12px,2.5vw,36px)",
          rotate: "90deg",
        },
        {
          bottom: "clamp(14px,2.5vh,28px)",
          left: "clamp(12px,2.5vw,36px)",
          rotate: "270deg",
        },
        {
          bottom: "clamp(14px,2.5vh,28px)",
          right: "clamp(12px,2.5vw,36px)",
          rotate: "180deg",
        },
      ].map((pos, i) => (
        <svg
          key={i}
          aria-hidden
          viewBox="0 0 28 28"
          width="28"
          height="28"
          style={{
            position: "absolute",
            ...pos,
            opacity: 0.22,
            pointerEvents: "none",
            transform: `rotate(${pos.rotate})`,
          }}
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="16"
            stroke="#8B6914"
            strokeWidth="1.2"
          />
          <line
            x1="0"
            y1="0"
            x2="16"
            y2="0"
            stroke="#8B6914"
            strokeWidth="1.2"
          />
        </svg>
      ))}


      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "clamp(6px,1.5vw,18px)",
          top: "15%",
          bottom: "15%",
          width: "1px",
          background:
            "linear-gradient(180deg,transparent,rgba(184,134,11,0.18) 20%,rgba(184,134,11,0.18) 80%,transparent)",
          pointerEvents: "none",
        }}
      />



      <div
        ref={ref}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(9px,1.2vw,10px)",
            letterSpacing: "0.42em",
            color: "#C9A84C",
            textTransform: "uppercase",
            margin: "0 0 10px",
          }}
        >
          Get In Touch
        </motion.p>


        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.75 }}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.8rem, 4.2vw, 3.3rem)",
            color: "#1a1a1a",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Let's Build Something
          <br />
          <em style={{ fontStyle: "italic" }}>Extraordinary Together</em>
        </motion.h2>


        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.75, delay: 0.24 }}
          style={{
            width: "clamp(48px,5vw,64px)",
            height: "1px",
            background: "#C9A84C",
            transformOrigin: "left",
            margin: "clamp(18px,3.5vh,24px) 0 clamp(36px,6.5vh,56px)",
          }}
        />


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(32px,6vw,64px)",
          }}
        >

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(24px,4.5vh,40px)",
            }}
          >

            <div>
              <InfoLabel icon={<PinIcon />}>Office Address</InfoLabel>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(10px,1.2vw,11px)",
                  letterSpacing: "0.18em",
                  color: "#1a1a1a",
                  margin: "0 0 6px",
                }}
              >
                AAGAM DESIGNS
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(13px,1.5vw,15px)",
                  lineHeight: 1.9,
                  color: "#2a2a2a",
                  margin: 0,
                }}
              >
                127/785, W Block
                <br />
                Keshav Nagar, Kanpur
                <br />
                Uttar Pradesh, India
              </p>
            </div>


            <div>
              <InfoLabel icon={<PhoneIcon />}>Phone</InfoLabel>
              <a
                href="tel:+918601111494"
                style={{
                  display: "block",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px,1.6vw,16px)",
                  color: "#2a2a2a",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6914")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2a2a2a")}
              >
                +91 86011 11494
              </a>
              <a
                href="tel:+918318415303"
                style={{
                  display: "block",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px,1.6vw,16px)",
                  color: "#2a2a2a",
                  textDecoration: "none",
                  transition: "color 0.25s",
                  marginTop: "4px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6914")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2a2a2a")}
              >
                +91 83184 15303
              </a>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(11px,1.3vw,12px)",
                  color: "#999",
                  margin: "6px 0 0",
                  letterSpacing: "0.04em",
                }}
              >
                Monday – Saturday | 10:30 AM – 7:00 PM
              </p>
            </div>


            <div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(9px,1.2vw,10px)",
                  letterSpacing: "0.32em",
                  color: "#C9A84C",
                  textTransform: "uppercase",
                  margin: "0 0 clamp(10px,2vh,16px)",
                }}
              >
                Follow Our Work
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "clamp(8px,1.5vw,14px)",
                  flexWrap: "wrap",
                }}
              >
                {SOCIALS.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: "clamp(36px,4.5vw,42px)",
                      height: "clamp(36px,4.5vw,42px)",
                      border: "1px solid #ddd",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#555",
                      fontSize: "clamp(13px,1.6vw,15px)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = s.hoverBg;
                      e.currentTarget.style.borderColor = s.hoverBg;
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.borderColor = "#ddd";
                      e.currentTarget.style.color = "#555";
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>


          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(9px,1.2vw,10px)",
                letterSpacing: "0.32em",
                color: "#C9A84C",
                textTransform: "uppercase",
                margin: "0 0 10px",
              }}
            >
              Visit Our Studio
            </p>
            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(1.2rem,2vw,1.75rem)",
                color: "#1a1a1a",
                margin: "0 0 clamp(16px,3vh,22px)",
              }}
            >
              Find Us On Map
            </h3>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                border: "1px solid rgba(184,134,11,0.20)",
                height: "clamp(220px,30vh,360px)",
              }}
            >
              <iframe
                title="Aagam Designs Office Location"
                src="https://www.google.com/maps?q=26.4245278,80.3181111&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(12%)",
                  borderRadius: "12px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function InfoLabel({ icon, children }) {
  return (
    <p
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: "clamp(9px,1.2vw,10px)",
        letterSpacing: "0.32em",
        color: "#C9A84C",
        textTransform: "uppercase",
        margin: "0 0 clamp(8px,1.5vh,12px)",
      }}
    >
      {icon}
      {children}
    </p>
  );
}
function PinIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}
