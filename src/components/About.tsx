import { useEffect, useRef, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/27123456789", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+27123456789";
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About <span className="text-gradient-gold">Us</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <img
                src={aboutImage}
                alt="KTL Makeup Glam - Professional Makeup Services"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>

            <div
              className={`bg-card p-8 sm:p-12 rounded-2xl shadow-elegant transition-all duration-700 ${
                isVisible
                  ? "animate-scale-in"
                  : "opacity-0 scale-95"
              }`}
            >
              <p className="text-lg text-foreground leading-relaxed mb-8 text-center">
                At KTL Makeup Glam, we are passionate about makeup artistry and
                dedicated to making you look and feel your best. Serving JHB South
                and Alberton, we offer personalized makeup services tailored to your
                needs.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-secondary/50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Come To Us
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    71 Le Maitre Street
                    <br />
                    Brackenhurst, Alberton
                    <br />
                    1448
                  </p>
                </div>

                <div className="bg-secondary/50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      We Come To You
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Have us come to you at a fee, we ensure a professional and
                    enjoyable experience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleWhatsApp}
                  className="group"
                >
                  Chat With Us
                  <span className="ml-2 group-hover:scale-110 transition-transform">
                    💬
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleCall}
                >
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
