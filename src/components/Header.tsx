import { Button } from "@/components/ui/button";
import { Shield, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-charcoal" />
            <span className="text-xl font-bold text-charcoal">Dream Car Insurance</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-slate hover:text-charcoal transition-colors duration-300 relative group">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="text-slate hover:text-charcoal transition-colors duration-300 relative group">
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-slate hover:text-charcoal transition-colors duration-300 relative group">
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-slate hover:text-charcoal transition-colors duration-300 relative group">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-charcoal" />
                <span className="text-slate">1-800-DREAM-INS</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-charcoal" />
                <span className="text-slate">help@dreamcarinsurance.com</span>
              </div>
            </div>
            <Button variant="premium" size="sm">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;