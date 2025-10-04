import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.png";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              The Wait Is Finally{" "}
              <span className="text-gradient-gold">Over!</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              JHB South and Alberton, Your makeup artist is here.
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
              Welcome to KTL Makeup Glam! We believe in bringing out the beauty in
              every individual. Whether you're preparing for a special event or
              just want to look your best, we have the perfect service for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToBooking}
                className="group"
              >
                Book An Appointment
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <img
              src={heroImage}
              alt="Professional makeup artist applying makeup"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
