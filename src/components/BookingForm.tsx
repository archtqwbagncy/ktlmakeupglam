import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const services = [
  "Soft Glam — R440",
  "Full Glam — R520",
  "Wedding Glam — Bride: R550 | Bridesmaids: R400",
  "Trial Makeup — R350",
  "Strip Mink Lashes — R150",
  "Matric Dance — R400",
  "Official Photo Glam — R390",
  "Birthday Glam — R450",
];

const BookingForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    dateTime: "",
    notes: "",
    travelService: false,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.dateTime) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Format the booking details for WhatsApp
    const date = new Date(formData.dateTime);
    const formattedDate = date.toLocaleDateString('en-ZA', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const formattedTime = date.toLocaleTimeString('en-ZA', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    const message = `*New Booking Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Date:* ${formattedDate}%0A` +
      `*Time:* ${formattedTime}%0A` +
      `*Travel Service:* ${formData.travelService ? 'Yes' : 'No'}%0A` +
      (formData.notes ? `*Notes:* ${formData.notes}%0A` : '');

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/27647081562?text=${message}`, '_blank');

    // Success message
    toast.success("Opening WhatsApp to send your booking request!");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      dateTime: "",
      notes: "",
      travelService: false,
    });
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div
            className={`text-center mb-12 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Ready to <span className="text-gradient-gold">Glam Up?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Fill out the form below to schedule your appointment.
            </p>
            <p className="text-base text-muted-foreground">
              You can also WhatsApp or call us to book your session.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div
            className={`bg-card p-8 sm:p-12 rounded-2xl shadow-elegant transition-all duration-700 ${
              isVisible ? "animate-scale-in" : "opacity-0 scale-95"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2 border-border focus:border-primary"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2 border-border focus:border-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-2 border-border focus:border-primary"
                    placeholder="+27 123 456 789"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="service" className="text-foreground font-medium">
                    Service *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="mt-2 border-border focus:border-primary bg-background">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dateTime" className="text-foreground font-medium">
                    Preferred Date/Time *
                  </Label>
                  <Input
                    id="dateTime"
                    type="datetime-local"
                    value={formData.dateTime}
                    onChange={(e) =>
                      setFormData({ ...formData, dateTime: e.target.value })
                    }
                    className="mt-2 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-foreground font-medium">
                  Special Requests / Notes
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="mt-2 border-border focus:border-primary min-h-[100px]"
                  placeholder="Tell us anything special we should know..."
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-secondary/50 rounded-lg">
                <Checkbox
                  id="travel"
                  checked={formData.travelService}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, travelService: checked as boolean })
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="travel"
                  className="text-foreground font-medium cursor-pointer leading-relaxed"
                >
                  I want KTL Makeup Glam to come to me (travel fee applies)
                </Label>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
              >
                Submit Booking Request
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
