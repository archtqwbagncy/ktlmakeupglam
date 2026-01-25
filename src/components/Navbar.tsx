import { Home, Sparkles, LayoutGrid, User, Calendar } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "Why Choose Us",
      link: "why-choose-us",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      name: "Services",
      link: "services",
      icon: <LayoutGrid className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "about",
      icon: <User className="h-4 w-4" />,
    },
    {
      name: "Booking",
      link: "booking",
      icon: <Calendar className="h-4 w-4" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
