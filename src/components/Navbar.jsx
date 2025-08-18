import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check for saved theme preference or default to 'dark' mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center hover:opacity-80 transition-opacity"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Dims
            </span>{" "}
            <span className="text-foreground/90">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          {/* Dark Mode Toggle - Desktop */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-foreground/80 hover:text-primary hover:bg-foreground/10 rounded-lg transition-all duration-300"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button and Dark Mode Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Dark Mode Toggle - Mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-foreground/80 hover:text-primary hover:bg-foreground/10 rounded-lg transition-all duration-300"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground z-50 relative hover:bg-foreground/10 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )}
              />
              <X 
                size={24} 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-2xl text-foreground/80 hover:text-primary transition-all duration-300 font-medium",
                  "transform hover:scale-105",
                  isMenuOpen ? "animate-in slide-in-from-top-4" : ""
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
                onClick={handleNavClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};