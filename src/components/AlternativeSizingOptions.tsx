import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ChevronsRight, Ruler, ShirtIcon, Tally4, Sparkles } from "lucide-react";
import { BodyType } from "@/types";
import { useToast } from "@/components/ui/use-toast";

interface AlternativeSizingOptionsProps {
  onProceedToMeasurements: () => void;
  onBodyTypeSelected: (bodyType: BodyType) => void;
}

type SizingMethod = "estimation" | "standardSize" | "intuitive";

const AlternativeSizingOptions = ({ 
  onProceedToMeasurements, 
  onBodyTypeSelected 
}: AlternativeSizingOptionsProps) => {
  const [selectedMethod, setSelectedMethod] = useState<SizingMethod | null>(null);
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      height: "",
      weight: "",
      age: "",
      standardSize: "",
      shirtFit: "",
      pantsFit: "",
    },
  });
  
  const handleProceed = () => {
    if (!selectedMethod) {
      toast({
        title: "Selection Required",
        description: "Please select a sizing method before continuing.",
        variant: "destructive",
      });
      return;
    }
    
    const values = form.getValues();
    
    let estimatedBodyType: BodyType = "rectangle";
    
    if (selectedMethod === "estimation") {
      const height = parseFloat(values.height);
      const weight = parseFloat(values.weight);
      
      if (height && weight) {
        if (weight / (height * height) < 0.0018) {
          estimatedBodyType = "rectangle";
        } else if (height > 65 && weight < 150) {
          estimatedBodyType = "inverted-triangle";
        } else {
          estimatedBodyType = "hourglass";
        }
      }
    } else if (selectedMethod === "standardSize") {
      const size = values.standardSize;
      
      switch (size) {
        case "xs":
        case "s":
          estimatedBodyType = "rectangle";
          break;
        case "m":
          estimatedBodyType = "hourglass";
          break;
        case "l":
        case "xl":
        case "xxl":
          estimatedBodyType = "pear";
          break;
        default:
          estimatedBodyType = "rectangle";
      }
    } else if (selectedMethod === "intuitive") {
      const shirtFit = values.shirtFit;
      const pantsFit = values.pantsFit;
      
      if (shirtFit === "tight" && pantsFit === "tight-hips") {
        estimatedBodyType = "hourglass";
      } else if (shirtFit === "tight" && pantsFit === "just-right") {
        estimatedBodyType = "inverted-triangle";
      } else if (shirtFit === "just-right" && pantsFit === "tight-hips") {
        estimatedBodyType = "pear";
      } else if (shirtFit === "loose" && pantsFit === "tight-waist") {
        estimatedBodyType = "apple";
      } else {
        estimatedBodyType = "rectangle";
      }
    }
    
    toast({
      title: "Size Estimation Complete",
      description: "We've analyzed your information and found personalized recommendations.",
    });
    
    onBodyTypeSelected(estimatedBodyType);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Alternative Sizing Options</h2>
      <p className="text-center text-muted-foreground mb-10">
        Don't have a measuring tape? No problem! Choose one of these methods to help us find your perfect fit.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card 
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedMethod === "estimation" ? "ring-2 ring-brand-300" : ""
          }`}
          onClick={() => setSelectedMethod("estimation")}
        >
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Tally4 className="h-12 w-12 text-brand-300 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Estimate Without Measuring</h3>
              <p className="text-sm text-muted-foreground">
                Quick approximation based on height, weight, and age.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card 
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedMethod === "standardSize" ? "ring-2 ring-brand-300" : ""
          }`}
          onClick={() => setSelectedMethod("standardSize")}
        >
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <ShirtIcon className="h-12 w-12 text-brand-300 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Use Standard Size</h3>
              <p className="text-sm text-muted-foreground">
                Input your usual clothing size from a brand you know.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card 
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedMethod === "intuitive" ? "ring-2 ring-brand-300" : ""
          }`}
          onClick={() => setSelectedMethod("intuitive")}
        >
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-12 w-12 text-brand-300 mb-4" />
              <h3 className="font-semibold text-lg mb-2">AI-Assisted Approximation</h3>
              <p className="text-sm text-muted-foreground">
                Answer intuitive questions about how your clothes fit.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {selectedMethod && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <Form {...form}>
              {selectedMethod === "estimation" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Estimate Using Basic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="height"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Height (in inches)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 65" type="number" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight (in lbs)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 150" type="number" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 30" type="number" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
              
              {selectedMethod === "standardSize" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Enter Your Standard Size</h3>
                  
                  <FormField
                    control={form.control}
                    name="standardSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your usual clothing size</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="xs">XS (Extra Small)</SelectItem>
                            <SelectItem value="s">S (Small)</SelectItem>
                            <SelectItem value="m">M (Medium)</SelectItem>
                            <SelectItem value="l">L (Large)</SelectItem>
                            <SelectItem value="xl">XL (Extra Large)</SelectItem>
                            <SelectItem value="xxl">XXL (2X Large)</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              )}
              
              {selectedMethod === "intuitive" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">How Do Your Clothes Typically Fit?</h3>
                  
                  <FormField
                    control={form.control}
                    name="shirtFit"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>How do shirts usually fit around your shoulders?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="tight" id="shirt-tight" />
                              <Label htmlFor="shirt-tight">Tight across shoulders</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="just-right" id="shirt-just-right" />
                              <Label htmlFor="shirt-just-right">Just right</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="loose" id="shirt-loose" />
                              <Label htmlFor="shirt-loose">Loose/oversized</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="pantsFit"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>How do pants usually fit around your waist and hips?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="tight-waist" id="pants-tight-waist" />
                              <Label htmlFor="pants-tight-waist">Tight at waist, comfortable at hips</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="tight-hips" id="pants-tight-hips" />
                              <Label htmlFor="pants-tight-hips">Comfortable at waist, tight at hips</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="just-right" id="pants-just-right" />
                              <Label htmlFor="pants-just-right">Just right at both</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="loose" id="pants-loose" />
                              <Label htmlFor="pants-loose">Loose at both</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              )}
              
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedMethod(null)}
                >
                  Back
                </Button>
                
                <div className="space-x-2">
                  <Button
                    type="button"
                    variant="default"
                    onClick={handleProceed}
                    className="group"
                  >
                    Continue
                    <ChevronsRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Form>
          </CardContent>
        </Card>
      )}
      
      <div className="flex justify-center">
        <div className="max-w-md text-center">
          <div className="rounded-full bg-brand-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Ruler className="h-8 w-8 text-brand-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">For the most accurate results</h3>
          <p className="text-muted-foreground mb-4">
            Taking actual measurements will provide the most accurate recommendations.
          </p>
          <Button 
            onClick={onProceedToMeasurements}
            variant="outline"
          >
            I'll Take My Measurements Instead
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlternativeSizingOptions;
