
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="text-xl font-bold gradient-text">SwayamAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#benefits" className="text-foreground/80 hover:text-primary transition-colors">Benefits</a>
            <a href="#process" className="text-foreground/80 hover:text-primary transition-colors">How It Works</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
            <Button size="sm" className="ml-4">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4 items-center">
            <a 
              href="#services" 
              className="text-foreground/80 hover:text-primary transition-colors w-full py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#benefits" 
              className="text-foreground/80 hover:text-primary transition-colors w-full py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#process" 
              className="text-foreground/80 hover:text-primary transition-colors w-full py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-primary transition-colors w-full py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
