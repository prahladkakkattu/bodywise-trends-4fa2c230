import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { BodyType } from "@/types";

interface GuidedBodyShapeFlowProps {
  onComplete: (bodyType: BodyType, predictions: string[]) => void;
  onBack: () => void;
}

type FlowStep = 1 | 2 | 3 | 4 | "results";

interface QuizAnswers {
  shouldersVsHips: "wider" | "same" | "narrower" | null;
  waistDefinition: "very" | "slightly" | "not" | "fuller" | null;
  braSize: string | null;
  height: number | null;
  heightUnit: "cm" | "inches";
  thighBuild: "thin" | "fuller" | null;
}

const braToCategory = (braSize: string): "small" | "medium" | "full" => {
  const size = braSize.slice(-1);
  if (size === "A" || size === "B") return "small";
  if (size === "C") return "medium";
  return "full";
};

const predictBodyShapes = (answers: QuizAnswers): { primary: BodyType; subVariations: string[] } => {
  const { shouldersVsHips, waistDefinition, braSize, thighBuild } = answers;
  
  // Basic shape determination
  let primaryShape: BodyType;
  let variations: string[] = [];
  
  if (shouldersVsHips === "wider") {
    primaryShape = "inverted-triangle";
    variations = ["IT1", "IT2", "IT3", "IT4"];
  } else if (shouldersVsHips === "narrower") {
    primaryShape = "pear";
    variations = ["P1", "P2", "P3", "P4"];
  } else if (waistDefinition === "very" || waistDefinition === "slightly") {
    primaryShape = "hourglass";
    variations = ["H1", "H2", "H3", "H4", "H5"];
  } else if (waistDefinition === "fuller") {
    primaryShape = "apple";
    variations = ["A1", "A2", "A3", "A4"];
  } else {
    primaryShape = "rectangle";
    variations = ["R1", "R2", "R3", "R4"];
  }
  
  // Refine variations based on other factors
  const bustCategory = braSize ? braToCategory(braSize) : "medium";
  
  // Return 2 closest variations based on answers
  const filteredVariations = variations.slice(0, 2);
  
  return {
    primary: primaryShape,
    subVariations: filteredVariations
  };
};

const GuidedBodyShapeFlow = ({ onComplete, onBack }: GuidedBodyShapeFlowProps) => {
  const [currentStep, setCurrentStep] = useState<FlowStep>(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    shouldersVsHips: null,
    waistDefinition: null,
    braSize: null,
    height: null,
    heightUnit: "cm",
    thighBuild: null
  });
  
  const [selectedVariation, setSelectedVariation] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<{ primary: BodyType; subVariations: string[] } | null>(null);

  const progress = currentStep === "results" ? 100 : (currentStep / 4) * 100;

  const handleNext = () => {
    if (currentStep === 4) {
      const results = predictBodyShapes(answers);
      setPredictions(results);
      setCurrentStep("results");
    } else if (typeof currentStep === "number") {
      setCurrentStep((currentStep + 1) as FlowStep);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onBack();
    } else if (currentStep === "results") {
      setCurrentStep(4);
    } else if (typeof currentStep === "number") {
      setCurrentStep((currentStep - 1) as FlowStep);
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1: return answers.shouldersVsHips !== null;
      case 2: return answers.waistDefinition !== null;
      case 3: return answers.braSize !== null;
      case 4: return answers.height !== null && answers.thighBuild !== null;
      default: return false;
    }
  };

  const handleVariationSelect = (variation: string) => {
    if (predictions) {
      onComplete(predictions.primary, [variation]);
    }
  };

  const braSizes = [
    "30A", "30B", "30C", "30D", "30DD",
    "32A", "32B", "32C", "32D", "32DD",
    "34A", "34B", "34C", "34D", "34DD",
    "36A", "36B", "36C", "36D", "36DD",
    "38A", "38B", "38C", "38D", "38DD",
    "40A", "40B", "40C", "40D", "40DD"
  ];

  if (currentStep === "results" && predictions) {
    return (
      <Card className="max-w-2xl mx-auto p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-fashion-teal mb-4">Your Predicted Body Shapes</h2>
          <p className="text-fashion-teal/80">Based on your answers, here are the two shapes that match you best:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {predictions.subVariations.map((variation, index) => (
            <div
              key={variation}
              className="border-2 border-fashion-beige rounded-lg p-6 text-center cursor-pointer hover:border-fashion-coral transition-colors"
              onClick={() => handleVariationSelect(variation)}
            >
              <div className="h-40 bg-fashion-beige/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl font-bold text-fashion-teal">{variation}</div>
              </div>
              <h3 className="text-lg font-semibold text-fashion-teal mb-2">{predictions.primary.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} {variation}</h3>
              <p className="text-sm text-fashion-teal/70">
                {index === 0 ? "Primary match" : "Alternative match"}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-fashion-teal/80 mb-6">Which of these feels most like you?</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-fashion-teal">Find Your Body Shape</h2>
          <span className="text-sm text-fashion-teal/70">Step {currentStep} of 4</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-fashion-teal mb-2">How do your shoulders compare to your hips?</h3>
            <p className="text-fashion-teal/70 mb-6">Think about the width of your shoulders versus your hip area.</p>
          </div>
          
          <RadioGroup 
            value={answers.shouldersVsHips || ""} 
            onValueChange={(value) => setAnswers(prev => ({ ...prev, shouldersVsHips: value as any }))}
          >
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-fashion-beige/20">
              <RadioGroupItem value="wider" id="wider" />
              <Label htmlFor="wider" className="flex-1 cursor-pointer">My shoulders are wider than my hips</Label>
            </div>
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-fashion-beige/20">
              <RadioGroupItem value="same" id="same" />
              <Label htmlFor="same" className="flex-1 cursor-pointer">My shoulders are about the same as my hips</Label>
            </div>
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-fashion-beige/20">
              <RadioGroupItem value="narrower" id="narrower" />
              <Label htmlFor="narrower" className="flex-1 cursor-pointer">My shoulders are narrower than my hips</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-fashion-teal mb-2">How would you describe your waist?</h3>
            <p className="text-fashion-teal/70 mb-6">Consider how defined or pronounced your waistline appears.</p>
          </div>
          
          <RadioGroup 
            value={answers.waistDefinition || ""} 
            onValueChange={(value) => setAnswers(prev => ({ ...prev, waistDefinition: value as any }))}
          >
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-fashion-beige/20">
              <RadioGroupItem value="very" id="very" />
              <Label htmlFor="very" className="flex-1 cursor-pointer">Very defined - clear waistline</Label>
            </div>
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-fashion-beige/20">
              <RadioGroupItem value="slightly" id="slightly" />
              <Label htmlFor="slightly" className="flex-1 cursor-pointer">Slightly defined - some waist curve</Label>
            </div>
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-fashion-beige/20">
              <RadioGroupItem value="not" id="not" />
              <Label htmlFor="not" className="flex-1 cursor-pointer">Not defined - straight silhouette</Label>
            </div>
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-fashion-beige/20">
              <RadioGroupItem value="fuller" id="fuller" />
              <Label htmlFor="fuller" className="flex-1 cursor-pointer">Fuller waist - carries weight in midsection</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-fashion-teal mb-2">What's your bra size?</h3>
            <p className="text-fashion-teal/70 mb-6">This helps us understand your bust proportions.</p>
          </div>
          
          <Select 
            value={answers.braSize || ""} 
            onValueChange={(value) => setAnswers(prev => ({ ...prev, braSize: value }))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your bra size" />
            </SelectTrigger>
            <SelectContent>
              {braSizes.map(size => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {currentStep === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-fashion-teal mb-2">Tell us about your height and thigh build</h3>
            <p className="text-fashion-teal/70 mb-6">These final details help create your complete profile.</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">Height</Label>
              <div className="flex gap-2">
                <Input 
                  type="number" 
                  placeholder={answers.heightUnit === "cm" ? "170" : "5'7\""}
                  value={answers.height || ""}
                  onChange={(e) => setAnswers(prev => ({ ...prev, height: Number(e.target.value) }))}
                  className="flex-1"
                />
                <Select 
                  value={answers.heightUnit} 
                  onValueChange={(value) => setAnswers(prev => ({ ...prev, heightUnit: value as "cm" | "inches" }))}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cm">cm</SelectItem>
                    <SelectItem value="inches">ft/in</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Thigh build</Label>
              <RadioGroup 
                value={answers.thighBuild || ""} 
                onValueChange={(value) => setAnswers(prev => ({ ...prev, thighBuild: value as any }))}
              >
                <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-fashion-beige/20">
                  <RadioGroupItem value="thin" id="thin" />
                  <Label htmlFor="thin" className="flex-1 cursor-pointer">Thin to medium thighs</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-fashion-beige/20">
                  <RadioGroupItem value="fuller" id="fuller-thighs" />
                  <Label htmlFor="fuller-thighs" className="flex-1 cursor-pointer">Fuller thighs</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={handleBack}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          {currentStep === 1 ? "Cancel" : "Back"}
        </Button>
        
        <Button 
          onClick={handleNext} 
          disabled={!isStepComplete()}
          className="min-w-24"
        >
          {currentStep === 4 ? "Get Results" : "Next"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default GuidedBodyShapeFlow;