
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ClothingItem } from "@/types";
import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import BodyShapeIcon from "./BodyShapeIcon";

interface ProductCardProps {
  product: ClothingItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };
  
  const handleGoToSeller = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("https://www.juju.ie/", "_blank");
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer" onClick={handleCardClick}>
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
        <div className="absolute bottom-2 right-2">
          <BodyShapeIcon bodyType={product.bodyTypes[0]} size="md" />
        </div>
      </div>
      
      <CardContent className="pt-4">
        <div className="text-xs text-muted-foreground mb-1 text-left">{product.brand}</div>
        <h3 className="font-medium text-base mb-1 text-left">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10 text-left">
          {product.description}
        </p>
        <div className="mt-2 flex justify-end items-center">
          <div className="font-semibold">€{product.price.toFixed(2)}</div>
        </div>
        <div className="mt-3 flex justify-center">
          <Button size="sm" onClick={handleGoToSeller}>
            See More
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
