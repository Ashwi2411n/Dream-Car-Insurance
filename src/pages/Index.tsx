import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageUpload from "@/components/ImageUpload";
import DamageResults from "@/components/DamageResults";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ImageUpload />
        <DamageResults />
      </main>
    </div>
  );
};

export default Index;
