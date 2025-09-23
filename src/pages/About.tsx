import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Target, Lightbulb, Heart, ArrowRight, Star, CheckCircle, Globe, Zap, Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former insurance executive with 15+ years experience in claims processing and customer service innovation.",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "AI researcher and former Google engineer specializing in computer vision and machine learning applications.",
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      bio: "UX designer and product strategist focused on creating intuitive experiences for complex insurance workflows.",
      avatar: "EJ"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack engineer with expertise in scalable systems and real-time data processing for insurance applications.",
      avatar: "DK"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-accent-purple" />,
      title: "Accuracy First",
      description: "We prioritize precision in every assessment, ensuring our AI delivers the most accurate damage evaluations possible."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-teal" />,
      title: "Speed & Efficiency",
      description: "Our technology reduces claim processing time from weeks to minutes, getting you back on the road faster."
    },
    {
      icon: <Heart className="h-8 w-8 text-success-sage" />,
      title: "Customer-Centric",
      description: "Every decision we make is guided by what's best for our customers, from transparent pricing to 24/7 support."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-warning-amber" />,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with AI and insurance technology."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Dream Car Insurance was founded with a vision to revolutionize the insurance industry through AI technology."
    },
    {
      year: "2021", 
      title: "AI Development",
      description: "Developed our proprietary computer vision algorithms for accurate damage assessment."
    },
    {
      year: "2022",
      title: "Beta Launch",
      description: "Launched beta version with 1,000 early adopters, achieving 95% accuracy rate."
    },
    {
      year: "2023",
      title: "Public Launch",
      description: "Officially launched to the public, reaching 10,000 users in the first month."
    },
    {
      year: "2024",
      title: "Scale & Growth",
      description: "Reached 50,000+ users with 99.8% accuracy rate and expanded to all vehicle types."
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
                About <span className="text-transparent bg-clip-text bg-gradient-accent">Dream Car Insurance</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate leading-relaxed">
                We're revolutionizing car insurance through cutting-edge AI technology, 
                making claims faster, more accurate, and completely transparent.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                  Our Mission
                </h2>
                <p className="text-lg text-slate mb-6 leading-relaxed">
                  To transform the car insurance industry by making damage assessment faster, 
                  more accurate, and completely transparent. We believe that technology should 
                  work for people, not against them.
                </p>
                <p className="text-lg text-slate mb-8 leading-relaxed">
                  Our AI-powered platform eliminates the guesswork and delays that have 
                  plagued traditional insurance claims, giving you instant, accurate results 
                  when you need them most.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success-sage" />
                    <span className="text-slate">99.8% Accuracy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success-sage" />
                    <span className="text-slate">2-Minute Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success-sage" />
                    <span className="text-slate">50K+ Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-accent/10 p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-accent/20 p-4 rounded-2xl mb-4 w-fit mx-auto">
                      <Camera className="h-8 w-8 text-accent-purple" />
                    </div>
                    <h3 className="font-semibold text-charcoal mb-2">AI-Powered</h3>
                    <p className="text-sm text-slate">Advanced computer vision</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-accent/20 p-4 rounded-2xl mb-4 w-fit mx-auto">
                      <Zap className="h-8 w-8 text-accent-teal" />
                    </div>
                    <h3 className="font-semibold text-charcoal mb-2">Lightning Fast</h3>
                    <p className="text-sm text-slate">Instant results</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-accent/20 p-4 rounded-2xl mb-4 w-fit mx-auto">
                      <Shield className="h-8 w-8 text-success-sage" />
                    </div>
                    <h3 className="font-semibold text-charcoal mb-2">Secure</h3>
                    <p className="text-sm text-slate">Bank-level security</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-accent/20 p-4 rounded-2xl mb-4 w-fit mx-auto">
                      <Globe className="h-8 w-8 text-warning-amber" />
                    </div>
                    <h3 className="font-semibold text-charcoal mb-2">Global</h3>
                    <p className="text-sm text-slate">Available worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-pearl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Our Values
              </h2>
              <p className="text-xl text-slate max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border border-silver/30 hover:border-accent-purple/30">
                  <CardContent className="p-0 text-center">
                    <div className="bg-gradient-accent/10 p-4 rounded-2xl mb-4 w-fit mx-auto">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-charcoal">{value.title}</h3>
                    <p className="text-slate leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Meet Our Team
              </h2>
              <p className="text-xl text-slate max-w-3xl mx-auto">
                The passionate people behind Dream Car Insurance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border border-silver/30 hover:border-accent-purple/30">
                  <CardContent className="p-0 text-center">
                    <div className="bg-gradient-accent/20 rounded-full w-20 h-20 flex items-center justify-center text-charcoal font-bold text-xl mb-4 mx-auto">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-charcoal">{member.name}</h3>
                    <p className="text-accent-purple font-medium mb-3">{member.role}</p>
                    <p className="text-slate text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-pearl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Our Journey
              </h2>
              <p className="text-xl text-slate max-w-3xl mx-auto">
                From startup to industry leader
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-accent text-white text-lg font-bold rounded-full w-16 h-16 flex items-center justify-center">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-charcoal">{milestone.title}</h3>
                      <p className="text-slate leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                By the Numbers
              </h2>
              <p className="text-xl text-slate max-w-3xl mx-auto">
                Our impact in the insurance industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-accent/10 p-6 rounded-3xl mb-4 w-fit mx-auto">
                  <Users className="h-12 w-12 text-accent-purple" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-charcoal">50K+</h3>
                <p className="text-slate">Customers Served</p>
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
                  <Star className="h-12 w-12 text-success-sage" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-charcoal">4.9/5</h3>
                <p className="text-slate">Customer Rating</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-accent/10 p-6 rounded-3xl mb-4 w-fit mx-auto">
                  <Globe className="h-12 w-12 text-warning-amber" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-charcoal">25+</h3>
                <p className="text-slate">Countries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied customers and see why Dream Car Insurance is changing the industry.
              </p>
              <Button variant="premium" size="lg" className="text-lg px-8 py-4">
                <Shield className="mr-2 h-5 w-5" />
                Get Started Today
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

export default AboutPage;
