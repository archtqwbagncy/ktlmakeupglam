import { useEffect, useRef, useState } from "react";
import { Sparkles, Heart, Award } from "lucide-react";

const WhyChooseUs = () => {
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

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient-gold">Us</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div
              className={`bg-card p-8 rounded-2xl shadow-elegant transition-all duration-700 delay-100 ${
                isVisible
                  ? "animate-fade-in"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Struggling to find a reliable and skilled makeup artist?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Are you looking for someone who can understand and enhance your
                    unique beauty?
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`bg-card p-8 rounded-2xl shadow-elegant transition-all duration-700 delay-200 ${
                isVisible
                  ? "animate-fade-in"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    We know the frustration of inconsistent results and impersonal service.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At KTL Makeup Glam, we offer personalized makeup services that
                    cater to your individual needs, ensuring you look and feel your
                    best for any occasion.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`bg-card p-8 rounded-2xl shadow-elegant transition-all duration-700 delay-300 ${
                isVisible
                  ? "animate-fade-in"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Our expert makeup artist provides consistent, high-quality results every time, making your beauty experience stress-free and enjoyable.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether it's a full face beat or a soft glam look, our attention
                    to detail and commitment to excellence ensures you leave feeling
                    confident and glamorous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
