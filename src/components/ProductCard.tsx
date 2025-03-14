
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ClothingItem } from "@/types";
import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: ClothingItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  const handleGoToSeller = () => {
    window.open("https://www.juju.ie/", "_blank");
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white"
          onClick={toggleFavorite}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>
      
      <CardContent className="pt-4">
        <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
        <h3 className="font-medium text-base mb-1 truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">
          {product.description}
        </p>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0 pb-4">
        <div className="font-semibold">${product.price.toFixed(2)}</div>
        <Button size="sm" onClick={handleGoToSeller}>
          Go to seller website
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
