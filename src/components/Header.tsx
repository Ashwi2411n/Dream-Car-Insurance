import { Button } from "@/components/ui/button";
import { Shield, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <>
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-charcoal" />
              <span className="text-xl font-bold text-charcoal">Dream Car Insurance</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/" className="text-slate hover:text-charcoal transition-colors duration-300 relative group">
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link to="/services" className="text-slate hover:text-charcoal transition-colors duration-300 relative group">
                  <span className="relative z-10">Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link to="/about" className="text-slate hover:text-charcoal transition-colors duration-300 relative group">
                  <span className="relative z-10">About</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300"></span>
                </Link>
              </nav>
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="h-4 w-4 text-charcoal" />
                    <span className="text-slate">Welcome, {user?.name}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="premium" 
                  size="sm"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Sign Up
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;