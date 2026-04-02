import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specials from "@/components/Specials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import CountdownBanner from "@/components/CountdownBanner";

const Index = () => {
  // Always scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <CountdownBanner />
      <Navbar />
      <Hero />
      <Specials />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <About />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
