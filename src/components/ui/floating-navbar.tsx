"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import logo from "@/assets/ktl-web-logo.png";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex max-w-fit fixed inset-x-0 mx-auto border border-border dark:border-border/50 rounded-full bg-card/95 dark:bg-card/95 backdrop-blur-md shadow-elegant z-[5000] pr-3 pl-4 py-2 items-center justify-center space-x-1 sm:space-x-4 transition-all duration-300",
          className
        )}
        style={{ top: "calc(1.5rem + var(--banner-height, 0px))" }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center transition-transform duration-300 hover:scale-105 pr-2"
        >
          <img src={logo} alt="KTL Makeup Glam" className="h-10 w-auto" />
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((navItem, idx) => (
            <button
              key={`link-${idx}`}
              onClick={() => scrollToSection(navItem.link)}
              className={cn(
                "relative text-foreground/80 items-center flex space-x-1 hover:text-primary transition-colors px-3 py-2 rounded-full text-sm font-medium"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </button>
          ))}
        </div>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>

          <a
            href="tel:+27647081562"
            className="hidden sm:flex border text-sm font-medium relative border-primary/30 dark:border-primary/50 text-foreground px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            <span>064 708 1562</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 mx-auto bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-elegant z-[4999] p-4 md:hidden transition-all duration-300"
            style={{ top: "calc(6rem + var(--banner-height, 0px))" }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((navItem, idx) => (
                <button
                  key={`mobile-link-${idx}`}
                  onClick={() => scrollToSection(navItem.link)}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4 py-3 text-left hover:bg-secondary rounded-lg flex items-center gap-2"
                >
                  {navItem.icon}
                  {navItem.name}
                </button>
              ))}
              <a
                href="tel:+27647081562"
                className="text-primary font-bold px-4 py-3 text-center border border-primary rounded-lg hover:bg-primary/10 mt-2"
              >
                064 708 1562
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
