import { Button } from "@/components/ui/button";
import { Camera, Zap, Shield, CheckCircle, ArrowRight, Star, Users, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface PreLoginHeroSectionProps {
  onGetStartedClick: () => void;
}

const PreLoginHeroSection: React.FC<PreLoginHeroSectionProps> = ({ onGetStartedClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const section = sectionRef.current;
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-pearl"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-accent opacity-10 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 50}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full bg-charcoal opacity-5 blur-2xl transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -80}px, ${mousePosition.y * 80}px)`,
            right: '15%',
            bottom: '25%',
          }}
        />
      </div>

      {/* Minimal grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--charcoal)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--charcoal)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-charcoal">
              AI-Powered Car <br />
              <span className="text-transparent bg-clip-text bg-gradient-accent">
                Insurance Claims
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate leading-relaxed max-w-3xl mx-auto">
              Get instant, accurate insurance quotes with our advanced AI technology. 
              Upload photos of your damaged vehicle and receive professional assessments in minutes.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                variant="premium" 
                size="lg" 
                className="text-lg px-8 py-4 group"
                onClick={onGetStartedClick}
              >
                <Shield className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="minimal" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div 
                className="group p-6 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 cursor-pointer border border-silver/30 hover:border-accent-purple/30"
                style={{
                  transform: `translateY(${mousePosition.y * -5}px)`,
                  transitionDelay: '0ms'
                }}
              >
                <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-accent-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-charcoal">Instant Processing</h3>
                <p className="text-sm text-slate">Get your damage assessment in under 2 minutes</p>
              </div>
              
              <div 
                className="group p-6 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 cursor-pointer border border-silver/30 hover:border-accent-purple/30"
                style={{
                  transform: `translateY(${mousePosition.y * -7}px)`,
                  transitionDelay: '100ms'
                }}
              >
                <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-accent-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-charcoal">99.8% Accuracy</h3>
                <p className="text-sm text-slate">Industry-leading AI technology for precise assessments</p>
              </div>
              
              <div 
                className="group p-6 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 cursor-pointer border border-silver/30 hover:border-accent-purple/30"
                style={{
                  transform: `translateY(${mousePosition.y * -7}px)`,
                  transitionDelay: '200ms'
                }}
              >
                <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-success-sage" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-charcoal">50K+ Users</h3>
                <p className="text-sm text-slate">Trusted by thousands of car owners nationwide</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-warning-amber fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-success-sage" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent-teal" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreLoginHeroSection;
