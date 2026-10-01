import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

function buildProjectUrl(projectId) {
  const url = new URL(window.location.href);

  url.searchParams.set("project", String(projectId));
  url.hash = "projects";

  return url.toString();
}

function buildShareText(project) {
  return `${project.title} — ${project.categories.join(", ")} | ${project.area} | ${project.location}. ${project.description}`;
}

export default function ProjectShare({ project, onClose }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const dialogRef = useRef(null);
  const copyTimerRef = useRef(null);

  const shareUrl = useMemo(
    () => buildProjectUrl(project.id),
    [project.id]
  );

  const shareText = useMemo(
    () => buildShareText(project),
    [project]
  );

  const socialLinks = useMemo(() => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);
    const encodedTitle = encodeURIComponent(project.title);

    return [
      {
        label: "WhatsApp",
        href: `https://wa.me/?text=${encodeURIComponent(
          `${shareText}\n${shareUrl}`
        )}`,
      },
      {
        label: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      },
      {
        label: "X",
        href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      },
      {
        label: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      },
      {
        label: "Telegram",
        href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      },
      {
        label: "Reddit",
        href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      },
    ];
  }, [project.title, shareText, shareUrl]);

  const nativeShareSupported =
    typeof navigator !== "undefined" &&
    typeof navigator.share === "function";

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;

      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const copyLink = async () => {
    setError("");

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement("textarea");

        textarea.value = shareUrl;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        textarea.style.pointerEvents = "none";

        document.body.appendChild(textarea);
        textarea.select();

        const copiedSuccessfully = document.execCommand("copy");

        document.body.removeChild(textarea);

        if (!copiedSuccessfully) {
          throw new Error("Clipboard copy failed");
        }
      }

      setCopied(true);

      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }

      copyTimerRef.current = setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
      setError(
        "The browser blocked clipboard access. Please copy the URL manually."
      );
    }
  };

  const nativeShare = async () => {
    setError("");

    try {
      await navigator.share({
        title: project.title,
        text: shareText,
        url: shareUrl,
      });
    } catch (shareError) {
      if (shareError?.name !== "AbortError") {
        setError("The share sheet could not be opened.");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 11000,
        background: "rgba(0,0,0,0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-share-title"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={event => event.stopPropagation()}
        onKeyDown={event => {
          if (event.key === "Escape") {
            event.stopPropagation();
            onClose();
          }
        }}
        style={{
          width: "100%",
          maxWidth: "560px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#fff",
          boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
          padding: "clamp(22px,4vw,34px)",
          outline: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 7px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#C9A84C",
              }}
            >
              Share Project
            </p>

            <h2
              id="project-share-title"
              style={{
                margin: 0,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(1.2rem,3vw,1.7rem)",
                lineHeight: 1.25,
                color: "#1a1a1a",
              }}
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close share dialog"
            style={{
              width: "42px",
              height: "42px",
              minWidth: "42px",
              minHeight: "42px",
              border: "1px solid rgba(26,26,26,0.18)",
              background: "#fff",
              color: "#1a1a1a",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <p
          style={{
            margin: "0 0 18px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            fontSize: "12px",
            lineHeight: 1.7,
            color: "#666",
          }}
        >
          Share this specific Aagam Designs project with clients or contacts.
        </p>

        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "stretch",
            marginBottom: "12px",
          }}
        >
          <input
            type="text"
            value={shareUrl}
            readOnly
            aria-label="Project share link"
            style={{
              flex: 1,
              minWidth: 0,
              height: "46px",
              border: "1px solid rgba(26,26,26,0.18)",
              padding: "0 12px",
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              color: "#555",
              background: "#fafafa",
              outline: "none",
            }}
          />

          <button
            type="button"
            onClick={copyLink}
            style={{
              minWidth: "112px",
              minHeight: "46px",
              border: "1px solid #1a1a1a",
              background: copied ? "#1a1a1a" : "#fff",
              color: copied ? "#fff" : "#1a1a1a",
              cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: "0.16em",
            }}
          >
            {copied ? "COPIED" : "COPY LINK"}
          </button>
        </div>

        {nativeShareSupported && (
          <button
            type="button"
            onClick={nativeShare}
            style={{
              width: "100%",
              minHeight: "46px",
              marginBottom: "20px",
              border: "1px solid #C9A84C",
              background: "#C9A84C",
              color: "#1a1a1a",
              cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: "0.18em",
            }}
          >
            SHARE USING DEVICE
          </button>
        )}

        <div
          style={{
            height: "1px",
            background: "rgba(26,26,26,0.08)",
            margin: "4px 0 20px",
          }}
        />

        <p
          style={{
            margin: "0 0 12px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "9px",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#888",
          }}
        >
          Share to
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "9px",
          }}
        >
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${project.title} on ${label}`}
              style={{
                minHeight: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                border: "1px solid rgba(26,26,26,0.15)",
                background: "#fff",
                color: "#1a1a1a",
                fontFamily: "Poppins, sans-serif",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={event => {
                event.currentTarget.style.background = "#1a1a1a";
                event.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={event => {
                event.currentTarget.style.background = "#fff";
                event.currentTarget.style.color = "#1a1a1a";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {error && (
          <p
            role="alert"
            style={{
              margin: "14px 0 0",
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              lineHeight: 1.5,
              color: "#9b4a3c",
            }}
          >
            {error}
          </p>
        )}

        <p
          style={{
            margin: "18px 0 0",
            fontFamily: "Inter, sans-serif",
            fontSize: "10px",
            lineHeight: 1.6,
            color: "#aaa",
          }}
        >
          The native share option uses the device/browser share sheet, so the
          available apps depend on the user's device and browser.
        </p>
      </motion.div>
    </motion.div>
  );
}