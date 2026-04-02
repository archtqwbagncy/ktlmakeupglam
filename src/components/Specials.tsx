import { Button } from "@/components/ui/button";
import gradSpecials from "@/assets/grad-specials.png";
import { motion } from "framer-motion";

const Specials = () => {
  return (
    <section id="specials" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Limited Time Offers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-foreground">
            Our Latest <span className="text-gradient-gold">Specials</span>
          </h2>
          
          <div className="relative group overflow-hidden rounded-3xl shadow-elegant border-4 border-primary/20">
            <img 
              src={gradSpecials} 
              alt="Graduation & Matric Dance Specials flyer" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          <div className="mt-12 bg-secondary/30 p-8 rounded-3xl border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Don't miss out on these glam deals!</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Book your session today and shine for your special occasion.
            </p>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Book Your Special Appointment Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specials;
