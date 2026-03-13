import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

import hero1srcset from "../assets/hero1.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero2srcset from "../assets/hero2.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero3srcset from "../assets/hero3.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero4srcset from "../assets/hero4.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero5srcset from "../assets/hero5.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero6srcset from "../assets/hero6.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero7srcset from "../assets/hero7.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero8srcset from "../assets/hero8.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero9srcset from "../assets/hero9.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";
import hero10srcset from "../assets/hero10.jpg?w=480;768;1280;1920;3840&format=webp&as=srcset";

import hero1fb from "../assets/hero1.jpg";
import hero2fb from "../assets/hero2.jpg";
import hero3fb from "../assets/hero3.jpg";
import hero4fb from "../assets/hero4.jpg";
import hero5fb from "../assets/hero5.jpg";
import hero6fb from "../assets/hero6.jpg";
import hero7fb from "../assets/hero7.jpg";
import hero8fb from "../assets/hero8.jpg";
import hero9fb from "../assets/hero9.jpg";
import hero10fb from "../assets/hero10.jpg";

const SLIDES = [
  { srcset: hero1srcset, fallback: hero1fb, pos: "center 35%" },
  { srcset: hero2srcset, fallback: hero2fb, pos: "center 40%" },
  { srcset: hero3srcset, fallback: hero3fb, pos: "center 30%" },
  { srcset: hero4srcset, fallback: hero4fb, pos: "center center" },
  { srcset: hero5srcset, fallback: hero5fb, pos: "center 40%" },
  { srcset: hero6srcset, fallback: hero6fb, pos: "center center" },
  { srcset: hero7srcset, fallback: hero7fb, pos: "center 35%" },
  { srcset: hero8srcset, fallback: hero8fb, pos: "center center" },
  { srcset: hero9srcset, fallback: hero9fb, pos: "center 30%" },
  { srcset: hero10srcset, fallback: hero10fb, pos: "center center" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const preloaded = new Set([0]);
    const preloadImg = (fallbackSrc) => {
      const img = new Image();
      img.src = fallbackSrc;
    };
    // Slides 1 & 2 immediately
    preloadImg(SLIDES[1].fallback);
    preloadImg(SLIDES[2].fallback);
    preloaded.add(1);
    preloaded.add(2);
    // Rest staggered
    let delay = 800;
    SLIDES.forEach((s, i) => {
      if (preloaded.has(i)) return;
      setTimeout(() => preloadImg(s.fallback), delay);
      delay += 800;
    });
  }, []);

  useEffect(() => {
    const nextIdx = (current + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[nextIdx].fallback;
  }, [current]);

  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 40]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0.9]);
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      6000,
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (window.scrollY > window.innerHeight * 0.6) return;
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % SLIDES.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);


  const wheelCooldown = useRef(false);

  const handleWheel = (e) => {
    if (window.scrollY > window.innerHeight * 0.6) return;
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    if (Math.abs(e.deltaX) < 10) return;
    if (wheelCooldown.current) return;
    wheelCooldown.current = true;
    setTimeout(() => {
      wheelCooldown.current = false;
    }, 700);
    if (e.deltaX > 0) setCurrent((c) => (c + 1) % SLIDES.length);
    else setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  };

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    touchStartY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    const dx = endX - touchStartX.current;
    const dy = endY - touchStartY.current;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) {
        /* Swipe LEFT → next slide */
        setCurrent((c) => (c + 1) % SLIDES.length);
      } else {
        /* Swipe RIGHT → previous slide */
        setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const slide = SLIDES[current];

  return (
    <div id="home">
      <style>{`
        @media (max-height: 480px) and (orientation: landscape) {
          .hero-content  { padding-top: 28px !important; padding-bottom: 52px !important; }
          .hero-h1       { font-size: 1rem !important; line-height: 1.4 !important; }
          .hero-divider  { margin-top: 8px !important; margin-bottom: 8px !important; }
          .hero-eyebrow  { margin-bottom: 0 !important; }
          .hero-estd     { margin-bottom: 8px !important; }
          .hero-cta      { margin-top: 8px !important; }
        }
        @media (max-width: 360px) {
          .hero-h1      { font-size: 1rem !important; letter-spacing: 0.06em !important; }
          .hero-eyebrow { letter-spacing: 0.14em !important; font-size: 7px !important; }
          .hero-dot     { width: 14px !important; }
        }
        @media (min-width: 2560px) {
          .hero-inner   { max-width: 1000px !important; }
          .hero-h1      { font-size: 3.6rem !important; }
          .hero-eyebrow { font-size: 14px !important; }
          .hero-estd    { font-size: 11px !important; }
          .hero-cta     { font-size: 13px !important; padding: 16px 44px !important; }
        }
      `}</style>

      <section
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{
          position: "relative",
          width: "100%",
          height: "100svh",
          minHeight: "320px",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              y: imageY,
              background: "#111",
            }}
          >
            <picture
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <source srcSet={slide.srcset} type="image/webp" sizes="100vw" />
              <img
                src={slide.fallback}
                alt={`Hero slide ${current + 1}`}
                fetchPriority={current === 0 ? "high" : "low"}
                decoding={current === 0 ? "sync" : "async"}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: slide.pos,
                  willChange: "opacity, transform",
                }}
              />
            </picture>

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg," +
                  "rgba(0,0,0,0.65) 0%," +
                  "rgba(0,0,0,0.22) 45%," +
                  "rgba(0,0,0,0.22) 55%," +
                  "rgba(0,0,0,0.80) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            opacity: 0.18,
            zIndex: 2,
          }}
        >
          <div style={{ borderRight: "1px solid rgba(255,255,255,0.15)" }} />
          <div style={{ borderRight: "1px solid rgba(255,255,255,0.15)" }} />
          <div />
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        <motion.div
          className="hero-content"
          style={{
            opacity: opacityFade,
            y: contentY,
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingBottom: "clamp(60px,10vh,90px)",
            paddingTop: "clamp(60px,8vh,80px)",
            pointerEvents: "none",
            boxSizing: "border-box",
          }}
        >
          <div
            className="hero-inner"
            style={{
              maxWidth: "760px",
              width: "clamp(260px,88vw,760px)",
              pointerEvents: "auto",
              padding: "0 clamp(16px,5vw,0px)",
            }}
          >
            <motion.p
              className="hero-eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(7.5px,1.8vw,11px)",
                letterSpacing: "clamp(0.16em,0.4vw,0.48em)",
                color: "#C9A84C",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Architecture · Interior · Construction
            </motion.p>

            <motion.div
              className="hero-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                width: "clamp(40px,10vw,100px)",
                height: "1px",
                margin: "clamp(10px,3vh,30px) auto",
                background:
                  "linear-gradient(90deg,transparent,#C9A84C,transparent)",
              }}
            />

            <motion.p
              className="hero-estd"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(7px,1.6vw,9px)",
                letterSpacing: "clamp(0.14em,0.4vw,0.48em)",
                color: "#ffffff",
                marginTop: "4px",
                marginBottom: "clamp(12px,3vh,25px)",
                textTransform: "uppercase",
              }}
            >
              |&nbsp;&nbsp;Estd. 2020&nbsp;&nbsp;|
            </motion.p>

            <motion.h1
              className="hero-h1"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(1.05rem,5.5vw,2.7rem)",
                marginTop: "clamp(4px,1.5vh,10px)",
                marginBottom: "0px",
                color: "#fff",
                lineHeight: 1.55,
                letterSpacing: "clamp(0.04em,2.5vw,0.35em)",
                opacity: 0.5,
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              ARCHITECTURE
              <br />
              DESIGNED WITH
              <br />
              INTENT
            </motion.h1>

            <motion.div
              className="hero-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                width: "clamp(40px,10vw,100px)",
                height: "1px",
                margin: "clamp(8px,2.5vh,19px) auto",
                background:
                  "linear-gradient(90deg,transparent,#C9A84C,transparent)",
              }}
            />

            <motion.button
              className="hero-cta"
              initial={{ opacity: 0, y: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff",
                color: "#111",
              }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                marginTop: "clamp(10px,2.5vh,20px)",
                padding: "clamp(9px,1.8vh,13px) clamp(16px,4vw,34px)",
                border: "1px solid rgba(255,255,255,0.8)",
                background: "transparent",
                color: "#fff",
                cursor: "pointer",
                letterSpacing: "clamp(0.1em,1.5vw,0.35em)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(8px,1.8vw,11px)",
                minHeight: "40px",
                minWidth: "100px",
                touchAction: "manipulation",
              }}
            >
              VIEW PROJECTS ›
            </motion.button>
          </div>
        </motion.div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 11,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(8px,1.8vh,18px)",
            paddingBottom:
              "calc(env(safe-area-inset-bottom,0px) + clamp(10px,2vh,20px))",
            pointerEvents: "none",
          }}
        >
          <ScrollIndicator nextSection="about" dark={true} hero={true} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "clamp(6px,1.2vw,14px)",
              paddingLeft: "16px",
              paddingRight: "16px",
              flexWrap: "nowrap",
              pointerEvents: "auto",
            }}
          >
{/* coment the buttons as bhaiya said he does not want em! */}
            
            {/* <button
              onClick={() =>
                setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
              }
              aria-label="Previous slide"
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                border: "1px solid rgba(201,168,76,0.45)",
                background: "rgba(10,8,5,0.45)",
                color: "rgba(201,168,76,0.70)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: 0,
                minWidth: "unset",
                minHeight: "unset",
                transition: "border-color 0.3s, background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C9A84C";
                e.currentTarget.style.background = "rgba(10,8,5,0.70)";
                e.currentTarget.style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)";
                e.currentTarget.style.background = "rgba(10,8,5,0.45)";
                e.currentTarget.style.color = "rgba(201,168,76,0.70)";
              }}
            >
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button> */}

            {SLIDES.map((_, i) => (
              <div
                key={i}
                className="hero-dot"
                onClick={() => setCurrent(i)}
                style={{
                  width: "clamp(18px,3.5vw,38px)",
                  height: "3px",
                  flexShrink: 0,
                  background:
                    i === current ? "#C9A84C" : "rgba(255,255,255,0.35)",
                  transition: "background-color .45s ease",
                  cursor: "pointer",
                }}
              />
            ))}
            
{/* coment the buttons as bhaiya said he does not want em! */}
            {/* <button
              onClick={() => setCurrent((c) => (c + 1) % SLIDES.length)}
              aria-label="Next slide"
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                border: "1px solid rgba(201,168,76,0.45)",
                background: "rgba(10,8,5,0.45)",
                color: "rgba(201,168,76,0.70)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: 0,
                minWidth: "unset",
                minHeight: "unset",
                transition: "border-color 0.3s, background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C9A84C";
                e.currentTarget.style.background = "rgba(10,8,5,0.70)";
                e.currentTarget.style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)";
                e.currentTarget.style.background = "rgba(10,8,5,0.45)";
                e.currentTarget.style.color = "rgba(201,168,76,0.70)";
              }}
            >
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button> */}
          </div>
        </div>

      </section>
    </div>
  );
}
