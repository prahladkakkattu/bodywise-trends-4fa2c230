
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MeasurementForm from "@/components/MeasurementForm";
import BodyTypeResult from "@/components/BodyTypeResult";
import ProductRecommendations from "@/components/ProductRecommendations";
import { BodyMeasurement, BodyType } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, ShirtIcon } from "lucide-react";
import { Sparkles } from "@/components/ui/icons";
import AlternativeSizingOptions from "@/components/AlternativeSizingOptions";
import QuickMeasurementGuide from "@/components/QuickMeasurementGuide";

// Steps in the user flow
type Step = "intro" | "alternative" | "measurement" | "results";

const Index = () => {
  const [bodyType, setBodyType] = useState<BodyType | null>(null);
  const [measurements, setMeasurements] = useState<BodyMeasurement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("intro");
  const { toast } = useToast();
  
  const handleBodyTypeChange = (newBodyType: BodyType, newMeasurements: BodyMeasurement) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setBodyType(newBodyType);
      setMeasurements(newMeasurements);
      setIsLoading(false);
      setCurrentStep("results");
      
      if (newBodyType !== "unknown") {
        toast({
          title: "Body Type Analysis Complete",
          description: `We've analyzed your measurements and found personalized recommendations.`,
          duration: 5000,
        });
      }
    }, 1500);
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case "intro":
        return (
          <section className="flex flex-col items-center text-center max-w-4xl mx-auto py-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-brand-600 mb-6 tracking-tight">
              Find Your Perfect Fit, Instantly
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              No more sizing guesswork. Get accurate recommendations with or without exact measurements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button 
                size="lg" 
                onClick={() => setCurrentStep("measurement")}
                className="group"
              >
                Start Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setCurrentStep("alternative")}
              >
                I Don't Know My Measurements
              </Button>
            </div>
            
            <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <Ruler className="h-10 w-10 text-brand-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Precise Recommendations</h3>
                <p className="text-muted-foreground">Get clothing suggestions perfectly matched to your unique body shape.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <ShirtIcon className="h-10 w-10 text-brand-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Perfect Fit Every Time</h3>
                <p className="text-muted-foreground">Say goodbye to returns and exchanges with our tailored size guidance.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <Sparkles className="h-10 w-10 text-brand-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Styling Expertise</h3>
                <p className="text-muted-foreground">Discover which styles enhance your natural shape and personal style.</p>
              </div>
            </div>
          </section>
        );
        
      case "alternative":
        return <AlternativeSizingOptions onProceedToMeasurements={() => setCurrentStep("measurement")} />;
        
      case "measurement":
        return (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <MeasurementForm onBodyTypeChange={handleBodyTypeChange} isLoading={isLoading} />
              </div>
              
              <div className="w-full md:w-1/2">
                <QuickMeasurementGuide />
              </div>
            </div>
          </div>
        );
        
      case "results":
        return (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-16">
              <div className="w-full md:w-1/2">
                <MeasurementForm onBodyTypeChange={handleBodyTypeChange} isLoading={isLoading} />
              </div>
              
              <div className="w-full md:w-1/2">
                {bodyType ? (
                  <BodyTypeResult bodyType={bodyType} />
                ) : (
                  <div className="h-full flex items-center justify-center p-6 bg-muted/20 rounded-lg border border-dashed">
                    <p className="text-muted-foreground text-center">
                      Enter your measurements to discover your body type and get personalized style recommendations.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {bodyType && bodyType !== "unknown" && (
              <section className="mb-12">
                <ProductRecommendations bodyType={bodyType} />
              </section>
            )}
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-[#fcfaff]">
      <Navbar />
      
      <main className="container pt-24 pb-16">
        {renderStep()}
        
        {currentStep !== "intro" && (
          <div className="flex justify-center mt-8">
            <Button 
              variant="ghost" 
              onClick={() => setCurrentStep("intro")}
              className="text-muted-foreground"
            >
              Back to Home
            </Button>
          </div>
        )}
        
        {currentStep === "intro" && (
          <section className="max-w-3xl mx-auto text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">How StyleMyFit Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="bg-brand-300 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="font-medium mb-2">Enter Your Measurements</h3>
                <p className="text-sm text-muted-foreground">Input your key body measurements accurately for the best results.</p>
              </div>
              
              <div className="p-4">
                <div className="bg-brand-300 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="font-medium mb-2">Discover Your Body Type</h3>
                <p className="text-sm text-muted-foreground">Our algorithm identifies your body shape and provides styling tips.</p>
              </div>
              
              <div className="p-4">
                <div className="bg-brand-300 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="font-medium mb-2">Get Personalized Recommendations</h3>
                <p className="text-sm text-muted-foreground">Browse clothing options specially curated for your body type.</p>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <footer className="bg-white border-t py-8">
        <div className="container">
          <div className="text-center">
            <h3 className="font-bold text-xl text-brand-500 mb-2">StyleMyFit</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Personalized fashion recommendations based on your unique body type.
            </p>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">FAQ</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">Contact Us</a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} StyleMyFit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
