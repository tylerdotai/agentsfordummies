"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "./useActiveSection";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "What is an AI Agent?", href: "#what-is" },
  { label: "Why Care?", href: "#why-care" },
  { label: "Get Started", href: "#setup-cloud" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Resources", href: "#resources" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection } = useActiveSection();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const getHrefId = (href: string) => href.replace("#", "");

  return (
    <>
      {/* Hamburger — hidden when overlay is open on mobile */}
      {!isOpen && (
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={false}
        >
          <span className={styles.hamburgerLine} data-open={false} />
          <span className={styles.hamburgerLine} data-open={false} />
          <span className={styles.hamburgerLine} data-open={false} />
        </button>
      )}

      {/* Active section indicator — desktop pill */}
      <div className={styles.activeIndicator}>
        {navLinks.map((link) => {
          const id = getHrefId(link.href);
          const isActive = activeSection === id;
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={styles.indicatorLink}
              data-active={isActive}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.span
                  layoutId="active-nav-pill"
                  className={styles.activePill}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={styles.indicatorLabel}>{link.label}</span>
            </a>
          );
        })}
      </div>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <nav className={styles.nav} role="navigation" aria-label="Main navigation">
              <ul className={styles.navList}>
                {navLinks.map((link, i) => {
                  const id = getHrefId(link.href);
                  const isActive = activeSection === id;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                    >
                      <a
                        href={link.href}
                        className={styles.navLink}
                        data-active={isActive}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                        tabIndex={isOpen ? 0 : -1}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
