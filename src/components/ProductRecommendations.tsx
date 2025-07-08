
import { useEffect, useState } from "react";
import { ClothingItem, BodyType } from "@/types";
import { getRecommendedClothing } from "@/data/mockClothingData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import BodyShapeIcon from "@/components/BodyShapeIcon";
import { useNavigate } from "react-router-dom";

interface ProductRecommendationsProps {
  bodyType: BodyType;
}

const ProductRecommendations = ({ bodyType }: ProductRecommendationsProps) => {
  const [recommendations, setRecommendations] = useState<ClothingItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
  
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

  const toggleFavorite = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };
  
  if (bodyType === "unknown" || recommendations.length === 0) {
    return (
      <div className="w-full py-8 text-center">
        <p className="text-muted-foreground">
          {bodyType === "unknown" 
            ? "Please provide your measurements to get personalized recommendations."
            : "No recommendations found for this body shape. Try adjusting your measurements."}
        </p>
      </div>
    );
  }
  
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-semibold text-center">
        <span className="text-brand-600">Recommended</span> <span className="text-brand-300">for Your Body Shape</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filterByType(activeTab).map(product => (
              <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id)}>
                <div className="relative aspect-[3/4] bg-fashion-beige/20 rounded-lg overflow-hidden mb-3">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white w-8 h-8"
                    onClick={(e) => toggleFavorite(e, product.id)}
                  >
                    <Heart className={`h-4 w-4 ${favorites.has(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                  <div className="absolute bottom-2 right-2 flex flex-col gap-1">
                    {product.bodyTypes.map((bodyType, index) => (
                      <BodyShapeIcon key={index} bodyType={bodyType} size="sm" />
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-fashion-teal/60 uppercase tracking-wide">{product.type}</p>
                  <h3 className="font-medium text-fashion-teal text-sm">{product.name}</h3>
                  <div className="flex items-center justify-end">
                    <p className="font-semibold text-fashion-teal">€ {product.price}.00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filterByType(activeTab).length === 0 && (
            <p className="text-center py-8 text-muted-foreground">
              No items found in this category for your body shape.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductRecommendations;
