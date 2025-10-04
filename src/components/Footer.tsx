import logo from "@/assets/ktl-logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="KTL Makeup Glam" className="h-12 w-auto" />
              <span className="text-xl font-bold text-foreground">KTL Makeup Glam</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Professional makeup artistry services serving JHB South and Alberton.
              Making you look and feel your absolute best.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div className="text-muted-foreground">
                  71 Le Maitre Street
                  <br />
                  Brackenhurst, Alberton
                  <br />
                  1448
                </div>
              </div>
              <a 
                href="tel:+27647081562" 
                className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground hover:text-primary">064 708 1562</span>
              </a>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@ktlmakeupglam.co.za</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#why-choose-us"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#booking"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Booking
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} KTL Makeup Glam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
