import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle2, Clock, DollarSign, FileText, Car } from "lucide-react";

interface DamageAssessment {
  severity: "minor" | "moderate" | "severe";
  confidence: number;
  estimatedCost: number;
  repairTime: string;
  description: string;
  parts: string[];
}

const mockAssessment: DamageAssessment = {
  severity: "moderate",
  confidence: 94,
  estimatedCost: 2850,
  repairTime: "3-5 business days",
  description: "Front bumper damage with minor scratches on the left fender. The damage appears to be from a low-speed collision.",
  parts: ["Front bumper replacement", "Left fender repair", "Paint touch-up", "Headlight alignment check"]
};

const DamageResults = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "minor":
        return "bg-trust-green";
      case "moderate":
        return "bg-warning-amber";
      case "severe":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "minor":
        return <CheckCircle2 className="h-5 w-5 text-trust-green" />;
      case "moderate":
        return <AlertTriangle className="h-5 w-5 text-warning-amber" />;
      case "severe":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Analysis Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI has analyzed your vehicle damage and generated a comprehensive assessment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Assessment Card */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-medium bg-gradient-card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Damage Assessment</h3>
                  <Badge 
                    variant="secondary" 
                    className={`${getSeverityColor(mockAssessment.severity)} text-white font-semibold px-3 py-1`}
                  >
                    {getSeverityIcon(mockAssessment.severity)}
                    {mockAssessment.severity.toUpperCase()}
                  </Badge>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">AI Confidence Level</span>
                    <span className="font-bold text-insurance-blue">{mockAssessment.confidence}%</span>
                  </div>
                  <Progress value={mockAssessment.confidence} className="h-3" />
                </div>

                <div className="bg-background/60 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Car className="mr-2 h-5 w-5 text-insurance-blue" />
                    Damage Description
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {mockAssessment.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background/60 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <DollarSign className="mr-2 h-5 w-5 text-trust-green" />
                      <span className="font-medium">Estimated Cost</span>
                    </div>
                    <p className="text-2xl font-bold text-trust-green">
                      ${mockAssessment.estimatedCost.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="mr-2 h-5 w-5 text-insurance-blue" />
                      <span className="font-medium">Repair Time</span>
                    </div>
                    <p className="text-2xl font-bold text-insurance-blue">
                      {mockAssessment.repairTime}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Required Parts */}
              <Card className="p-6 shadow-soft">
                <h4 className="font-semibold mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-insurance-blue" />
                  Required Repairs
                </h4>
                <ul className="space-y-2">
                  {mockAssessment.parts.map((part, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-trust-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{part}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 shadow-soft">
                <h4 className="font-semibold mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button variant="premium" className="w-full">
                    Submit Insurance Claim
                  </Button>
                  <Button variant="outline" className="w-full">
                    Find Approved Shops
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Report
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Inspection
                  </Button>
                </div>
              </Card>

              {/* Trust Indicators */}
              <Card className="p-6 shadow-soft bg-gradient-to-br from-trust-green/5 to-insurance-blue/5">
                <h4 className="font-semibold mb-4 text-trust-green">Why Trust Our AI?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-trust-green" />
                    <span>99.2% accuracy rate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-trust-green" />
                    <span>Trained on 2M+ vehicle images</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-trust-green" />
                    <span>Certified by industry experts</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DamageResults;