import { SITE_META } from "../constants/index";
import kanpurBg from "../assets/kanpur_dark_footer.png";
import { color } from "framer-motion";


const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/aagam_designs/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 17, height: 17 }}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: 17, height: 17 }}
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/918601111494`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: 17, height: 17 }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.057 23.386a.5.5 0 0 0 .615.634l5.701-1.453A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.028-1.383l-.36-.214-3.733.951.99-3.614-.235-.373A9.818 9.818 0 1 1 12 21.818z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/utsav-gupta-629985197/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: 17, height: 17 }}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const SERVICES_LIST = [
  "Architecture",
  "Construction",
  "Renovation & Remodelling",
  "Interior Designing",
  "Turnkey Solutions",
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        background: "#0d0d0d",
        overflow: "hidden",
      }}
    >

      <img
        src={kanpurBg}
        alt="Kanpur Skyline"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 37%",
          pointerEvents: "none",
          zIndex: 0,
          filter: "brightness(0.78) contrast(1.08)",
        }}
      />



      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "clamp(260px,38vh,460px)",
          pointerEvents: "none",
          zIndex: 1,
          background: `
    radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.65) 100%)
  `,
        }}
      />




      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "clamp(220px,32vh,380px)",
          pointerEvents: "none",
          zIndex: 1,
          background:
            "linear-gradient(to bottom, #0d0d0d 0%, rgba(13,13,13,0.55) 40%, rgba(13,13,13,0.15) 100%)",
        }}
      />








      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />



      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          zIndex: 4,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.45) 30%, rgba(201,168,76,0.45) 70%, transparent 100%)",
        }}
      />



      <div style={{ position: "relative", zIndex: 5 }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "clamp(48px,7vh,80px) clamp(24px,6vw,80px) 0",
          }}
        >


          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
              gap: "clamp(32px,5vw,64px)",
              paddingBottom: "clamp(40px,6vh,64px)",
            }}
          >

            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(15px,1.6vw,19px)",
                    letterSpacing: "0.10em",
                    color: "#ffffff",
                    margin: "0 0 3px",
                  }}
                >
                  AAGAM DESIGNS
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(9px,0.95vw,10px)",
                    letterSpacing: "0.32em",
                    color: "#C9A84C",
                    margin: 0,
                    // textTransform: "uppercase",
                  }}
                >
                  by Ar. Utsav Gupta
                </p>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "rgba(201,168,76,0.45)",
                }}
              />
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(11px,1.05vw,12.5px)",
                  lineHeight: 1.78,
                  color: "rgba(255,255,255,0.38)",
                  margin: 0,
                }}
              >
                Designing spaces with clarity and purpose from concept to
                completion, across North India and beyond.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginTop: "2px",
                }}
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid rgba(201,168,76,0.20)",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.40)",
                      textDecoration: "none",
                      transition: "all 0.28s ease",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#C9A84C";
                      e.currentTarget.style.color = "#C9A84C";
                      e.currentTarget.style.background =
                        "rgba(201,168,76,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(201,168,76,0.20)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.40)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>


            <div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(9px,1vw,10.5px)",
                  letterSpacing: "0.32em",
                  color: "#C9A84C",
                  textTransform: "uppercase",
                  margin: "0 0 clamp(18px,3vh,26px)",
                }}
              >
                Quick Links
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {QUICK_LINKS.map((lk) => (
                  <button
                    key={lk.id}
                    onClick={() => scrollTo(lk.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      padding: "clamp(7px,1.2vh,10px) 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(11px,1.05vw,12.5px)",
                      letterSpacing: "0.06em",
                      color: "rgba(255,255,255,0.42)",
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      transition: "color 0.24s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C9A84C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                    }}
                  >
                    <span
                      style={{
                        color: "#C9A84C",
                        opacity: 0.55,
                        fontSize: "11px",
                        lineHeight: 1,
                      }}
                    >
                      ›
                    </span>
                    {lk.label}
                  </button>
                ))}
              </div>
            </div>



            <div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(9px,1vw,10.5px)",
                  letterSpacing: "0.32em",
                  color: "#C9A84C",
                  textTransform: "uppercase",
                  margin: "0 0 clamp(18px,3vh,26px)",
                }}
              >
                Our Services
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {SERVICES_LIST.map((svc) => (
                  <button
                    key={svc}
                    onClick={() => scrollTo("services")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      padding: "clamp(7px,1.2vh,10px) 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(11px,1.05vw,12.5px)",
                      letterSpacing: "0.06em",
                      color: "rgba(255,255,255,0.42)",
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      transition: "color 0.24s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C9A84C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                    }}
                  >
                    <span
                      style={{
                        color: "#C9A84C",
                        opacity: 0.55,
                        fontSize: "11px",
                        lineHeight: 1,
                      }}
                    >
                      ›
                    </span>
                    {svc}
                  </button>
                ))}
              </div>
            </div>


            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(18px,3vh,26px)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(9px,1vw,10.5px)",
                    letterSpacing: "0.32em",
                    color: "#C9A84C",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Contact Info
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(10px,1.6vh,14px)",
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        width: 15,
                        height: 15,
                        flexShrink: 0,
                        opacity: 0.65,
                        marginTop: "1.9px",
                      }}
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>

                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(11px,1.05vw,1px)",
                        lineHeight: "1.4",
                        color: "rgba(255,255,255,0.38)",
                        margin: 0,
                      }}
                    >
                      {SITE_META.address}
                    </p>
                  </div>


                  <div
                    style={{
                      display: "flex",
                      gap: "11px",
                      alignItems: "flex-start",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        width: 15,
                        height: 15,
                        flexShrink: 0,
                        opacity:0.65,
                      }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>

                    <a
                      href={`tel:${SITE_META.phone1.replace(/\s/g, "")}`}
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(11px,1.05vw,12.5px)",
                        color: "rgba(255,255,255,0.38)",
                        textDecoration: "none",
                        lineHeight: "1.4",
                        transition: "color 0.24s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#C9A84C";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.38)";
                      }}
                    >
                      {SITE_META.phone1}
                    </a>
                  </div>


                  <div
                    style={{
                      display: "flex",
                      gap: "11px",
                      marginTop: "-27px",
                      alignItems: "flex-start",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        width: 15,
                        height: 15,
                        flexShrink: 0,
                        opacity: 0.65,
                        marginTop: "0.9px",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="16" rx="2" />
                      <polyline points="2,4 12,13 22,4" />
                    </svg>

                    <a
                      href="mailto:architectutsavgupta@gmail.com"
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(11px,1.05vw,12.5px)",
                        color: "rgba(255,255,255,0.38)",
                        textDecoration: "none",
                        lineHeight: "-5px",
                        transition: "color 0.24s",
                        wordBreak: "break-all",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#C9A84C";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.38)";
                      }}
                    >
                      architectutsavgupta@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 20%, rgba(201,168,76,0.9) 50%, rgba(201,168,76,0.6) 80%, transparent 100%)",
            }}
          />


          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              textAlign: "center",
              gap: "12px",
              padding: "clamp(16px,2.5vh,22px)",
              paddingBottom: "clamp(200px,28vh,260px)",
            }}
            className="footer-bottom"
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(8px,0.8vw,11px)",
                letterSpacing: "0.22em",
                color: "#C9A84C",
                margin: 0,
              }}
            >
              © {year} AAGAM DESIGNS. ALL PROJECT IMAGES ARE PROTECTED
              INTELLECTUAL PROPERTY. UNAUTHORIZED COMMERCIAL USE IS PROHIBITED.
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(8px,0.8vw,11px)",
                letterSpacing: "0.16em",
                color: "#C9A84C",
                margin: 0,
              }}
            >
              ARCHITECTURE · INTERIOR DESIGNING · CONSTRUCTION · RENOVATION
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(8px,0.8vw,11px)",
                letterSpacing: "0.16em",
                color: "#C9A84C",
                margin: 0,
              }}
            >
              DESIGNED & DEVELOPED WITH{" "}
              <span style={{ color: "#C9A84C" }}>♥</span> BY{" "}
              <a
                href="https://mydataapplied.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#C9A84C",
                  textDecoration: "none",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                MYDATAAPPLIED.COM
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
