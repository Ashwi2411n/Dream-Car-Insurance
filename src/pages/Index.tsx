import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PreLoginHeroSection from "@/components/PreLoginHeroSection";
import { FeaturesSection, HowItWorksSection, TestimonialsSection } from "@/components/PreLoginSections";
import ImageUpload from "@/components/ImageUpload";
import DamageResults from "@/components/DamageResults";
import InteractiveBackground from "@/components/InteractiveBackground";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <Header />
      <main className="relative z-10">
        {isAuthenticated ? (
          <>
            <HeroSection />
            <ImageUpload />
            <DamageResults />
          </>
        ) : (
          <>
            <PreLoginHeroSection onGetStartedClick={handleGetStartedClick} />
            <FeaturesSection />
            <HowItWorksSection />
            <TestimonialsSection />
          </>
        )}
      </main>
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
