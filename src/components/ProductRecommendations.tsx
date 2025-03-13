
import { useEffect, useState } from "react";
import { ClothingItem, BodyType } from "@/types";
import { getRecommendedClothing } from "@/data/mockClothingData";
import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductRecommendationsProps {
  bodyType: BodyType;
}

const ProductRecommendations = ({ bodyType }: ProductRecommendationsProps) => {
  const [recommendations, setRecommendations] = useState<ClothingItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");
  
  useEffect(() => {
    if (bodyType && bodyType !== "unknown") {
      const items = getRecommendedClothing(bodyType);
      setRecommendations(items);
    }
  }, [bodyType]);
  
  const filterByType = (type: string) => {
    if (type === "all") {
      return recommendations;
    }
    return recommendations.filter(item => item.type === type);
  };
  
  if (bodyType === "unknown" || recommendations.length === 0) {
    return (
      <div className="w-full py-8 text-center">
        <p className="text-muted-foreground">
          {bodyType === "unknown" 
            ? "Please provide your measurements to get personalized recommendations."
            : "No recommendations found for this body type. Try adjusting your measurements."}
        </p>
      </div>
    );
  }
  
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-semibold text-center">
        <span className="text-brand-600">Recommended</span> <span className="text-brand-300">for Your Body Type</span>
      </h2>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="tops">Tops</TabsTrigger>
            <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
            <TabsTrigger value="dresses">Dresses</TabsTrigger>
            <TabsTrigger value="outerwear">Outerwear</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filterByType(activeTab).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filterByType(activeTab).length === 0 && (
            <p className="text-center py-8 text-muted-foreground">
              No items found in this category for your body type.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductRecommendations;
