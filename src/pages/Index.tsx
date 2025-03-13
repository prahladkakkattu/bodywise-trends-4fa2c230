
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MeasurementForm from "@/components/MeasurementForm";
import BodyTypeResult from "@/components/BodyTypeResult";
import ProductRecommendations from "@/components/ProductRecommendations";
import { BodyMeasurement, BodyType } from "@/types";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [bodyType, setBodyType] = useState<BodyType | null>(null);
  const [measurements, setMeasurements] = useState<BodyMeasurement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleBodyTypeChange = (newBodyType: BodyType, newMeasurements: BodyMeasurement) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setBodyType(newBodyType);
      setMeasurements(newMeasurements);
      setIsLoading(false);
      
      if (newBodyType !== "unknown") {
        toast({
          title: "Body Type Analysis Complete",
          description: `We've analyzed your measurements and found personalized recommendations.`,
          duration: 5000,
        });
      }
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-[#fcfaff]">
      <Navbar />
      
      <main className="container pt-24 pb-16">
        <section className="w-full max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-500 mb-3">Find Your Perfect Style</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your measurements and discover clothing recommendations tailored to your unique body type.
          </p>
        </section>
        
        <section className="flex flex-col md:flex-row gap-8 mb-16 max-w-6xl mx-auto">
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
        </section>
        
        {bodyType && bodyType !== "unknown" && (
          <section className="mb-12">
            <ProductRecommendations bodyType={bodyType} />
          </section>
        )}
        
        <section className="max-w-3xl mx-auto text-center py-8">
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
      </main>
      
      <footer className="bg-white border-t py-8">
        <div className="container">
          <div className="text-center">
            <h3 className="font-bold text-xl text-brand-500 mb-2">StyleMyFit</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Personalized fashion recommendations based on your unique body type.
            </p>
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
