// import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "@/components/Button";
import { MenuIcon } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          SHIYA<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <div className="flex glass rounded-full px-4 py-2">
            {navLinks.map((navLink, index) => (
              <a
                href={navLink.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {navLink.label}
              </a>
            ))}
          </div>
        </div>

        <Button size="sm" className="hidden md:block">
          Contact Me
        </Button>

        {/* mobile menu btn */}

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={toggleMenu}
        >
          <MenuIcon className="size-6" />
        </button>
      </nav>
      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col gap-2">
            {navLinks.map((navLink, index) => (
              <a
                href={navLink.href}
                key={index}
                className="text-foreground py-2 hover:text-primary"
              >
                {navLink.label}
              </a>
            ))}

            <Button className="w-full">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
