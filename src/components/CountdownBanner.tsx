import { useState, useEffect } from "react";
import { Timer, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CountdownBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Current date is 2026-04-02 according to system context
    const targetDate = new Date("2026-05-31T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.setProperty('--banner-height', '60px');
    } else {
      document.documentElement.style.setProperty('--banner-height', '0px');
    }
    
    return () => {
      document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="bg-primary text-primary-foreground py-2 px-4 fixed top-0 w-full z-[6000] shadow-md flex items-center justify-center md:justify-between flex-wrap gap-2 md:gap-4 overflow-hidden"
      >
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-white/20 p-1.5 md:p-2 rounded-full hidden xs:block">
            <Timer className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-center md:text-left leading-tight">
            <span className="hidden sm:inline">Special Offer: </span>
            Graduation & Matric Dance Specials end in:
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex gap-1 md:gap-2 text-xs md:text-sm font-bold">
            <div className="bg-black/20 px-2 md:px-3 py-1 rounded backdrop-blur-sm min-w-[2.5rem] md:min-w-[3rem] text-center">
              <span>{timeLeft.days}</span>
              <span className="text-[8px] md:text-[10px] block uppercase font-normal opacity-70">Days</span>
            </div>
            <div className="bg-black/20 px-2 md:px-3 py-1 rounded backdrop-blur-sm min-w-[2.5rem] md:min-w-[3rem] text-center">
              <span>{timeLeft.hours}</span>
              <span className="text-[8px] md:text-[10px] block uppercase font-normal opacity-70">Hrs</span>
            </div>
            <div className="bg-black/20 px-2 md:px-3 py-1 rounded backdrop-blur-sm min-w-[2.5rem] md:min-w-[3rem] text-center">
              <span>{timeLeft.minutes}</span>
              <span className="text-[8px] md:text-[10px] block uppercase font-normal opacity-70">Min</span>
            </div>
            <div className="bg-black/20 px-2 md:px-3 py-1 rounded backdrop-blur-sm min-w-[2.5rem] md:min-w-[3rem] text-center">
              <span>{timeLeft.seconds}</span>
              <span className="text-[8px] md:text-[10px] block uppercase font-normal opacity-70">Sec</span>
            </div>
          </div>

          <button 
            onClick={() => {
              const element = document.getElementById('specials');
              if (element) {
                const offset = 120; // Extra offset for the banner and navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="flex items-center gap-1 bg-white text-primary px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold hover:bg-opacity-90 transition-all"
          >
            Claim Now <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CountdownBanner;
