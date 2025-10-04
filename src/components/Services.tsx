import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import softGlamImage from "@/assets/soft-glam.png";
import fullGlamImage from "@/assets/full-glam.png";
import weddingGlamImage from "@/assets/wedding-glam.png";
import matricDanceImage from "@/assets/matric-dance.png";
import officialPhotoGlamImage from "@/assets/official-photo-glam.png";
import trialMakeupImage from "@/assets/trial-makeup.png";
import stripMinkLashesImage from "@/assets/strip-mink-lashes.png";
import birthdayGlamImage from "@/assets/birthday-glam.png";

const services = [
  {
    name: "Soft Glam",
    price: "R440",
    description:
      "A natural look with a touch of elegance, perfect for day-to-day wear or casual events.",
    image: softGlamImage,
  },
  {
    name: "Full Glam",
    price: "R520",
    description: "A bold, polished look for special occasions and nights out.",
    image: fullGlamImage,
  },
  {
    name: "Wedding Glam",
    price: "Bride: R550 | Bridesmaids: R400",
    description:
      "Flawless bridal looks designed to last through your special day, plus elegant coordinated makeup for your bridal party.",
    image: weddingGlamImage,
  },
  {
    name: "Trial Makeup",
    price: "R350",
    description:
      "Perfect your look before the big day. Trial sessions help us understand your vision and preferences.",
    image: trialMakeupImage,
  },
  {
    name: "Strip Mink Lashes",
    price: "R150",
    description:
      "Add drama and definition to your eyes with premium strip mink lashes for a glamorous finish.",
    image: stripMinkLashesImage,
  },
  {
    name: "Matric Dance",
    price: "R400",
    description:
      "Stand out at your matric farewell with a glamorous, age-appropriate look.",
    image: matricDanceImage,
  },
  {
    name: "Official Photo Glam",
    price: "R390",
    description:
      "Camera-ready makeup for graduations, photoshoots, and corporate images.",
    image: officialPhotoGlamImage,
  },
  {
    name: "Birthday Glam",
    price: "R450",
    description: "Celebrate in style with a makeup look tailored for your big day.",
    image: birthdayGlamImage,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`overflow-hidden hover:shadow-gold transition-all duration-500 hover:scale-105 group cursor-pointer border-2 border-transparent hover:border-primary ${
                isVisible
                  ? "animate-scale-in"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {service.image && (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {service.name}
                  </h3>
                  <span className="text-lg font-bold text-primary block">
                    {service.price}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
