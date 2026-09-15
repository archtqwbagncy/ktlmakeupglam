import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Letlhogonolo Radise",
      review: "Exceptional work! 💋🌺, not just make up, but ART. So clean, flawless and long lasting. She listened exactly what I wanted and delivered beyond. If you want to look like a queen book her. 100/10🙌",
      rating: 5,
    },
    {
      name: "Angelique Durand",
      review: "Hazel is a superb makeup artist! I needed someone to do my makeup for my son's wedding and I didn't know of anyone.",
      rating: 5,
    },
    {
      name: "Nonkululeko Dineka",
      review: "Hazel was so welcoming and friendly. She treated us like her friends, we talked and laughed, but very professional.",
      rating: 5,
    },
    {
      name: "Mashadi Mabena",
      review: "Thank you for being an incredible make up artist and absolutely I love how you made my face looks so much different ❤️👌",
      rating: 5,
    },
    {
      name: "Clio Rasebeka",
      review: "The service was best and very professional",
      rating: 5,
    },
    {
      name: "Jamira Maria Kara",
      review: "Was excellent job",
      rating: 5,
    },
    {
      name: "Thuliswa Mbangula",
      review: "She knows what shes doing... You will never be sorry 🩷🩷🩷🌟🌟🌟🌟🌟",
      rating: 5,
    },
    {
      name: "Rose Mahlophe",
      review: "Very professional make up artist, I was very impressed with the outcome. I would highly recommend KTL Makeup Glam to anyone who wants a natural, elegant look.",
      rating: 5,
    },
    {
      name: "LNM_CAPTIONS PHOTOGRAPHY",
      review: "Very Professional Make Up Artist, Such bubbly personality easy to work with.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground flex items-center justify-center gap-1.5">
            All 5-star reviews from
            <span className="font-semibold text-foreground">Google</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "animate-fade-in"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.review}"
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
