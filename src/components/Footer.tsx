import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent-purple" />
              <span className="text-xl font-bold">Dream Car Insurance</span>
            </div>
            <p className="text-slate leading-relaxed">
              Revolutionizing car insurance with AI-powered damage assessment technology. 
              Get instant, accurate quotes and seamless claims processing.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-slate hover:text-white transition-colors">Contact</a></li>
              <li><a href="#privacy" className="text-slate hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-slate hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#damage-assessment" className="text-slate hover:text-white transition-colors">Damage Assessment</a></li>
              <li><a href="#instant-quotes" className="text-slate hover:text-white transition-colors">Instant Quotes</a></li>
              <li><a href="#claims-processing" className="text-slate hover:text-white transition-colors">Claims Processing</a></li>
              <li><a href="#ai-analysis" className="text-slate hover:text-white transition-colors">AI Analysis</a></li>
              <li><a href="#customer-support" className="text-slate hover:text-white transition-colors">24/7 Support</a></li>
              <li><a href="#mobile-app" className="text-slate hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-purple" />
                <span className="text-slate">1-800-DREAM-INS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-purple" />
                <span className="text-slate">help@dreamcarinsurance.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-purple" />
                <span className="text-slate">123 Insurance Ave, Tech City, TC 12345</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Newsletter Signup</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-charcoal-light border border-silver/30 rounded-md text-white placeholder-slate focus:outline-none focus:border-accent-purple"
                />
                <Button variant="premium" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-silver/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate text-sm">
              © 2024 Dream Car Insurance. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-slate hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-slate hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-slate hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
