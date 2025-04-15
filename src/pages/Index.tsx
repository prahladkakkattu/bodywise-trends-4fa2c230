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

type Step = "intro" | "alternative" | "measurement" | "results";

const Index = () => {
  const [bodyType, setBodyType] = useState<BodyType | null>(null);
  const [measurements, setMeasurements] = useState<BodyMeasurement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("intro");
  const { toast } = useToast();
  
  const handleBodyTypeChange = (newBodyType: BodyType, newMeasurements: BodyMeasurement) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setBodyType(newBodyType);
      setMeasurements(newMeasurements);
      setIsLoading(false);
      setCurrentStep("results");
      
      if (newBodyType !== "unknown") {
        toast({
          title: "Body Shape Analysis Complete",
          description: `We've analyzed your measurements and found personalized recommendations.`,
          duration: 5000,
        });
      }
    }, 1500);
  };
  
  const handleAlternativeSizing = (estimatedBodyType: BodyType) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setBodyType(estimatedBodyType);
      setIsLoading(false);
      setCurrentStep("results");
    }, 1000);
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case "intro":
        return (
          <section className="flex flex-col items-center text-center max-w-4xl mx-auto py-10">
            <div className="mb-8">
              <img 
                src="/public/lovable-uploads/1665848b-7c1f-48e3-9406-15136bbfeb29.png" 
                alt="StyleMyFit Logo" 
                className="h-28 mx-auto"
              />
            </div>
            
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
              {[
                { 
                  icon: Ruler, 
                  title: "Precise Recommendations", 
                  description: "Get clothing suggestions perfectly matched to your unique body shape.",
                  bg: "bg-soft-purple" 
                },
                { 
                  icon: ShirtIcon, 
                  title: "Perfect Fit Every Time", 
                  description: "Say goodbye to returns and exchanges with our tailored size guidance.",
                  bg: "bg-soft-blue" 
                },
                { 
                  icon: Sparkles, 
                  title: "Styling Expertise", 
                  description: "Discover which styles enhance your natural shape and personal style.",
                  bg: "bg-soft-green" 
                }
              ].map(({ icon: Icon, title, description, bg }, index) => (
                <div key={index} className={`${bg} rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow`}>
                  <Icon className="h-10 w-10 text-brand-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </section>
        );
        
      case "alternative":
        return <AlternativeSizingOptions 
                 onProceedToMeasurements={() => setCurrentStep("measurement")} 
                 onBodyTypeSelected={handleAlternativeSizing}
               />;
        
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
            {measurements && (
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
                        Enter your measurements to discover your body shape and get personalized style recommendations.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {!measurements && bodyType && (
              <div className="mb-16">
                <BodyTypeResult bodyType={bodyType} />
              </div>
            )}
            
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
    <div className="min-h-screen bg-soft-gray">
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
              {[1, 2, 3].map((step) => (
                <div key={step} className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-brand-300 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">{step}</div>
                  <h3 className="font-medium mb-2">
                    {step === 1 && "Enter Your Measurements"}
                    {step === 2 && "Discover Your Body Shape"}
                    {step === 3 && "Get Personalized Recommendations"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step === 1 && "Input your key body measurements accurately for the best results."}
                    {step === 2 && "Our algorithm identifies your body shape and provides styling tips."}
                    {step === 3 && "Browse clothing options specially curated for your body shape."}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <footer className="bg-white border-t py-8">
        <div className="container">
          <div className="text-center">
            <h3 className="font-bold text-xl text-brand-500 mb-2">StyleMyFit</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Personalized fashion recommendations based on your unique body shape.
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
