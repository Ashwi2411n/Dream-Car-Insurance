import { Button } from "@/components/ui/button";
import { Camera, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-car-insurance.jpg";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
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
                Damage Assessment
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate leading-relaxed max-w-3xl mx-auto">
              Upload photos of your damaged vehicle and get instant, accurate insurance quotes. 
              Our advanced AI technology makes claims faster and more reliable than ever.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="premium" size="lg" className="text-lg px-8 py-4 group">
                <Camera className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Start Damage Assessment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="minimal" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div 
                className="group p-6 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 cursor-pointer border border-silver/30 hover:border-accent-purple/30"
                style={{
                  transform: `translateY(${mousePosition.y * -5}px)`,
                }}
              >
                <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-8 w-8 text-accent-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-charcoal">Upload Photos</h3>
                <p className="text-sm text-slate">Take pictures of damage from multiple angles for accurate assessment</p>
              </div>
              
              <div 
                className="group p-6 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 cursor-pointer border border-silver/30 hover:border-accent-purple/30"
                style={{
                  transform: `translateY(${mousePosition.y * -3}px)`,
                  transitionDelay: '100ms'
                }}
              >
                <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-accent-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-charcoal">AI Analysis</h3>
                <p className="text-sm text-slate">Get instant damage assessment powered by advanced machine learning</p>
              </div>
              
              <div 
                className="group p-6 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 cursor-pointer border border-silver/30 hover:border-accent-purple/30"
                style={{
                  transform: `translateY(${mousePosition.y * -7}px)`,
                  transitionDelay: '200ms'
                }}
              >
                <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-success-sage" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-charcoal">Claim Approval</h3>
                <p className="text-sm text-slate">Receive your quote and submit claims with streamlined processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;