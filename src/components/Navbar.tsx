import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 z-50 flex w-full items-center justify-between px-margin py-4 backdrop-blur-xl transition-shadow duration-300"
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(17, 20, 21, 0.95)" : "rgba(17, 20, 21, 0.8)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "0 0 0 transparent",
      }}
    >
      <a href="/" className="flex items-center gap-3" aria-label="Jobby — strona główna">
        <img
          src="/assets/logo.png"
          alt="Jobby"
          className="h-9 w-auto object-contain md:h-10"
        />
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-title-lg text-on-surface-muted transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>

      <motion.a
        href="#waitlist"
        className="rounded-full bg-primary-fixed px-6 py-3 font-title-lg text-on-primary-fixed"
        whileHover={{ scale: 0.97 }}
        whileTap={{ scale: 0.95 }}
      >
        Dołącz
      </motion.a>
    </motion.nav>
  );
}
