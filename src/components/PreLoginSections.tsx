import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Zap, Shield, CheckCircle, ArrowRight, Star, Clock, DollarSign, Headphones, FileText, Car, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-accent-purple" />,
      title: "AI Photo Analysis",
      description: "Advanced computer vision technology analyzes damage photos with 99.8% accuracy"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent-teal" />,
      title: "Instant Results",
      description: "Get your damage assessment and quote in under 2 minutes"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-success-sage" />,
      title: "Fair Pricing",
      description: "Transparent pricing based on actual damage assessment, not estimates"
    },
    {
      icon: <Headphones className="h-8 w-8 text-warning-amber" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your insurance needs"
    },
    {
      icon: <FileText className="h-8 w-8 text-accent-purple" />,
      title: "Digital Claims",
      description: "Submit and track your insurance claims entirely online"
    },
    {
      icon: <Car className="h-8 w-8 text-accent-teal" />,
      title: "All Vehicle Types",
      description: "Works with cars, trucks, motorcycles, and commercial vehicles"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            Why Choose Dream Car Insurance?
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Experience the future of car insurance with our cutting-edge AI technology and customer-first approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border border-silver/30 hover:border-accent-purple/30">
              <CardContent className="p-0">
                <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-4 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-charcoal">{feature.title}</h3>
                <p className="text-slate leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in seconds with just your email and basic information",
      icon: <Smartphone className="h-12 w-12 text-accent-purple" />
    },
    {
      number: "02", 
      title: "Upload Photos",
      description: "Take clear photos of your vehicle damage from multiple angles",
      icon: <Camera className="h-12 w-12 text-accent-teal" />
    },
    {
      number: "03",
      title: "AI Analysis",
      description: "Our AI analyzes your photos and provides detailed damage assessment",
      icon: <Zap className="h-12 w-12 text-success-sage" />
    },
    {
      number: "04",
      title: "Get Quote",
      description: "Receive your instant insurance quote and submit your claim",
      icon: <CheckCircle className="h-12 w-12 text-warning-amber" />
    }
  ];

  return (
    <section className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            How It Works
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Get your insurance quote in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
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
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Car Owner",
      content: "Dream Car Insurance saved me hours of paperwork. The AI assessment was incredibly accurate and I got my claim approved in just 2 days!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      content: "As someone who manages a fleet of vehicles, this service has been a game-changer. The instant quotes help me make quick decisions.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Insurance Agent",
      content: "I've been recommending Dream Car Insurance to all my clients. The technology is impressive and the customer service is outstanding.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Dream Car Insurance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border border-silver/30">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning-amber fill-current" />
                  ))}
                </div>
                <p className="text-slate mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-accent/20 rounded-full w-12 h-12 flex items-center justify-center text-charcoal font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                    <p className="text-sm text-slate">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection, HowItWorksSection, TestimonialsSection };
