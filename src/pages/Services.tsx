import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Zap, Shield, CheckCircle, Clock, DollarSign, Headphones, FileText, Car, Smartphone, ArrowRight, Star, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const ServicesPage = () => {
  const services = [
    {
      icon: <Camera className="h-12 w-12 text-accent-purple" />,
      title: "AI Damage Assessment",
      description: "Advanced computer vision technology analyzes damage photos with 99.8% accuracy. Our AI can detect even minor scratches, dents, and structural damage.",
      features: ["99.8% accuracy rate", "Multiple angle analysis", "Real-time processing", "Detailed damage reports"],
      price: "Free"
    },
    {
      icon: <Zap className="h-12 w-12 text-accent-teal" />,
      title: "Instant Insurance Quotes",
      description: "Get accurate insurance quotes in under 2 minutes. No more waiting days or weeks for manual assessments.",
      features: ["2-minute processing", "Real-time quotes", "Multiple provider options", "Transparent pricing"],
      price: "Free"
    },
    {
      icon: <FileText className="h-12 w-12 text-success-sage" />,
      title: "Digital Claims Processing",
      description: "Submit and track your insurance claims entirely online. Streamlined process with real-time updates.",
      features: ["Online submission", "Real-time tracking", "Document management", "Status notifications"],
      price: "Free"
    },
    {
      icon: <Headphones className="h-12 w-12 text-warning-amber" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock customer support for all your insurance needs. Expert assistance whenever you need it.",
      features: ["24/7 availability", "Expert support", "Multiple contact methods", "Quick response times"],
      price: "Free"
    },
    {
      icon: <Car className="h-12 w-12 text-accent-purple" />,
      title: "Multi-Vehicle Support",
      description: "Works with cars, trucks, motorcycles, and commercial vehicles. Comprehensive coverage for all vehicle types.",
      features: ["All vehicle types", "Commercial vehicles", "Motorcycles", "Fleet management"],
      price: "Free"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-accent-teal" />,
      title: "Mobile App",
      description: "Access all services through our mobile app. Take photos, submit claims, and track progress on the go.",
      features: ["Mobile app", "Photo capture", "Push notifications", "Offline capability"],
      price: "Free"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Sign Up & Login",
      description: "Create your account in seconds with just your email and basic information. Secure and encrypted.",
      icon: <Shield className="h-8 w-8 text-accent-purple" />
    },
    {
      number: "02",
      title: "Upload Damage Photos",
      description: "Take clear photos of your vehicle damage from multiple angles. Our AI will guide you for best results.",
      icon: <Camera className="h-8 w-8 text-accent-teal" />
    },
    {
      number: "03",
      title: "AI Analysis & Assessment",
      description: "Our advanced AI analyzes your photos and provides detailed damage assessment with repair estimates.",
      icon: <Zap className="h-8 w-8 text-success-sage" />
    },
    {
      number: "04",
      title: "Get Instant Quote",
      description: "Receive your insurance quote instantly. Compare options and choose the best coverage for your needs.",
      icon: <DollarSign className="h-8 w-8 text-warning-amber" />
    },
    {
      number: "05",
      title: "Submit Claim",
      description: "Submit your claim with one click. Track progress in real-time and get updates via email and SMS.",
      icon: <FileText className="h-8 w-8 text-accent-purple" />
    },
    {
      number: "06",
      title: "Claim Approval",
      description: "Get your claim approved quickly. Our AI reduces processing time from weeks to days.",
      icon: <CheckCircle className="h-8 w-8 text-accent-teal" />
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 bg-pearl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-charcoal">
                Our <span className="text-transparent bg-clip-text bg-gradient-accent">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate leading-relaxed">
                Comprehensive AI-powered insurance solutions designed to make your life easier. 
                From damage assessment to claim processing, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                What We Offer
              </h2>
              <p className="text-xl text-slate max-w-3xl mx-auto">
                All our services are completely free to use. No hidden fees, no surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border border-silver/30 hover:border-accent-purple/30">
                  <CardContent className="p-0">
                    <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-6 w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-charcoal">{service.title}</h3>
                    <p className="text-slate mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate">
                          <CheckCircle className="h-4 w-4 text-success-sage mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-accent-purple">{service.price}</span>
                      <Button variant="premium" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-pearl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                How It Works
              </h2>
              <p className="text-xl text-slate max-w-3xl mx-auto">
                Our streamlined process makes insurance claims faster and more accurate than ever before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-accent/10 p-6 rounded-3xl mx-auto w-fit mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-accent-purple text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-charcoal">{step.title}</h3>
                  <p className="text-slate leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-slate max-w-3xl mx-auto">
                Our numbers speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-accent/10 p-6 rounded-3xl mb-4 w-fit mx-auto">
                  <Users className="h-12 w-12 text-accent-purple" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-charcoal">50K+</h3>
                <p className="text-slate">Happy Customers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-accent/10 p-6 rounded-3xl mb-4 w-fit mx-auto">
                  <Award className="h-12 w-12 text-accent-teal" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-charcoal">99.8%</h3>
                <p className="text-slate">Accuracy Rate</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-accent/10 p-6 rounded-3xl mb-4 w-fit mx-auto">
                  <Clock className="h-12 w-12 text-success-sage" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-charcoal">2 Min</h3>
                <p className="text-slate">Average Processing</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-accent/10 p-6 rounded-3xl mb-4 w-fit mx-auto">
                  <Star className="h-12 w-12 text-warning-amber" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-charcoal">4.9/5</h3>
                <p className="text-slate">Customer Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied customers and experience the future of car insurance.
              </p>
              <Button variant="premium" size="lg" className="text-lg px-8 py-4">
                <Shield className="mr-2 h-5 w-5" />
                Start Your Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
