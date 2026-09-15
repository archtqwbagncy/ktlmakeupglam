import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import galleryOne from "@/assets/gallery/photo_2026-09-14_20-28-08.jpg";
import galleryTwo from "@/assets/gallery/photo_2026-09-14_20-28-01.jpg";
import galleryThree from "@/assets/gallery/photo_2026-09-14_20-27-50.jpg";
import galleryFour from "@/assets/gallery/photo_2026-09-14_20-27-49.jpg";
import galleryFive from "@/assets/gallery/photo_2026-09-14_20-27-48.jpg";
import gallerySix from "@/assets/gallery/photo_2026-09-14_20-27-47.jpg";
import gallerySeven from "@/assets/gallery/photo_2026-09-14_20-27-45.jpg";
import galleryEight from "@/assets/gallery/photo_2026-09-14_20-27-43.jpg";
import galleryNine from "@/assets/gallery/photo_2026-09-14_20-27-42.jpg";
import galleryTen from "@/assets/gallery/photo_2026-09-14_20-27-41.jpg";
import galleryEleven from "@/assets/gallery/photo_2026-09-14_20-27-40.jpg";
import galleryTwelve from "@/assets/gallery/photo_2026-09-14_20-27-38.jpg";
import galleryThirteen from "@/assets/gallery/photo_2026-09-14_20-27-37.jpg";
import galleryFourteen from "@/assets/gallery/photo_2026-09-14_20-27-30.jpg";

const galleryImages = [
  galleryFour,
  galleryEight,
  galleryFive,
  galleryOne,
  galleryThree,
  galleryTen,
  galleryTwo,
  galleryNine,
  gallerySeven,
  gallerySix,
  galleryEleven,
  galleryTwelve,
  galleryThirteen,
  galleryFourteen,
];

const tileClasses = [
  "md:col-span-5 md:row-span-2",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-5",
  "md:col-span-3",
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.08 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex]);

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" ref={sectionRef} className="overflow-hidden bg-secondary/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 flex items-end gap-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="shrink-0 text-4xl font-bold text-foreground sm:text-5xl">
            Our <span className="text-gradient-gold">Gallery</span>
          </h2>
          <div className="mb-2 h-px flex-1 bg-border" />
          <span className="mb-1 hidden font-sans text-sm text-muted-foreground sm:block">01 — 14</span>
        </div>

        <div className="grid auto-rows-[17rem] grid-cols-2 gap-2 md:auto-rows-[15rem] md:grid-cols-12 md:gap-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${tileClasses[index]} ${
                index === 0 || index === 4 || index === 8 || index === 12 ? "col-span-2" : "col-span-1"
              }`}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img
                src={image}
                alt={`KTL Makeup Glam client look ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background/80 font-sans text-xs text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[6000] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.img
              key={galleryImages[selectedIndex]}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={galleryImages[selectedIndex]}
              alt={`KTL Makeup Glam client look ${selectedIndex + 1}`}
              className="max-h-[88vh] max-w-[92vw] object-contain shadow-elegant"
              onClick={(event) => event.stopPropagation()}
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-4 rounded-full"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close gallery"
            >
              <X />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full sm:left-6"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full sm:right-6"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;