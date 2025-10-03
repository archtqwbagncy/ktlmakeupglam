import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const services = [
  {
    name: "Soft Glam",
    price: "R440",
    description:
      "A natural look with a touch of elegance, perfect for day-to-day wear or casual events.",
  },
  {
    name: "Full Glam",
    price: "R520",
    description: "A bold, polished look for special occasions and nights out.",
  },
  {
    name: "Wedding Glam (Bride)",
    price: "R550",
    description:
      "A flawless bridal look designed to last through your special day.",
  },
  {
    name: "Bridesmaids",
    price: "R400",
    description: "Elegant, coordinated makeup looks for your bridal party.",
  },
  {
    name: "Matric Dance",
    price: "R400",
    description:
      "Stand out at your matric farewell with a glamorous, age-appropriate look.",
  },
  {
    name: "Official Photo Glam",
    price: "R390",
    description:
      "Camera-ready makeup for graduations, photoshoots, and corporate images.",
  },
  {
    name: "Birthday Glam",
    price: "R450",
    description: "Celebrate in style with a makeup look tailored for your big day.",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional makeup services tailored to make
            you look and feel your absolute best.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`p-6 hover:shadow-gold transition-all duration-500 hover:scale-105 group cursor-pointer border-2 border-transparent hover:border-primary ${
                isVisible
                  ? "animate-scale-in"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <span className="text-2xl font-bold text-primary">
                  {service.price}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
