
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");

  // Mock product data - in a real app, this would come from an API
  const getProductData = (id: string) => {
    const products = {
      'black-blazer': {
        id: 'black-blazer',
        name: 'Classic Black Blazer',
        brand: 'Elegant Fashion',
        price: 450.00,
        originalPrice: 520.00,
        description: 'A timeless classic that elevates any outfit. This structured wool blazer features clean lines, a tailored fit, and sophisticated detailing perfect for professional and formal occasions.',
        longDescription: 'Crafted from premium wool blend fabric, this blazer offers the perfect balance of structure and comfort. The classic notched lapels and single-breasted design create a sleek silhouette that works beautifully for hourglass body types. Features include functional buttons, inner lining, and professional tailoring.',
        imageUrl: '/lovable-uploads/362a7e77-0f9f-4232-85ad-dc4e1a11f5e1.png',
        bodyType: 'Hourglass',
        bodyTypeColor: 'bg-fashion-coral',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        features: ['Premium wool blend', 'Professional tailoring', 'Structured shoulders', 'Inner lining', 'Dry clean only'],
        rating: 4.8,
        reviews: 124
      },
      'black-dress': {
        id: 'black-dress',
        name: 'Belted Black Dress',
        brand: 'Modern Elegance',
        price: 385.00,
        originalPrice: 420.00,
        description: 'A versatile midi dress with a cinched waist that creates a beautiful silhouette. Perfect for both day and evening wear.',
        longDescription: 'This sophisticated midi dress features a flattering belt that accentuates the waist, making it ideal for pear body types. The flowing skirt balances proportions while the structured bodice provides support and style.',
        imageUrl: '/lovable-uploads/080741bc-13b9-47c1-8f51-45e655dbfbaf.png',
        bodyType: 'Pear',
        bodyTypeColor: 'bg-green-600',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        features: ['Adjustable belt', 'Midi length', 'Flowing skirt', 'Structured bodice', 'Machine washable'],
        rating: 4.7,
        reviews: 89
      },
      'white-dress': {
        id: 'white-dress',
        name: 'Elegant White Dress',
        brand: 'Pure Style',
        price: 295.00,
        originalPrice: 340.00,
        description: 'A stunning V-neck sleeveless midi dress that creates an elongating silhouette perfect for apple body types.',
        longDescription: 'This elegant white dress features a flattering V-neckline that draws attention upward and creates a lengthening effect. The sleeveless design and flowing fabric make it comfortable and stylish for apple body types.',
        imageUrl: '/lovable-uploads/6593ea9a-91e1-415d-8e1e-7641480ae35e.png',
        bodyType: 'Apple',
        bodyTypeColor: 'bg-blue-600',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        features: ['V-neckline', 'Sleeveless design', 'Midi length', 'Flowing fabric', 'Easy care'],
        rating: 4.6,
        reviews: 67
      },
      'orange-blazer': {
        id: 'orange-blazer',
        name: 'Orange Blazer Set',
        brand: 'Bold Fashion',
        price: 520.00,
        originalPrice: 580.00,
        description: 'A striking orange blazer set with matching trousers. The structured design enhances the hourglass silhouette.',
        longDescription: 'Make a statement with this vibrant orange blazer set. The structured blazer and tailored trousers create a powerful, professional look that celebrates the hourglass figure with its fitted waist and clean lines.',
        imageUrl: '/lovable-uploads/2cd58b40-2fc6-4a4c-8b33-f3c9929017bf.png',
        bodyType: 'Hourglass',
        bodyTypeColor: 'bg-fashion-coral',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        features: ['Two-piece set', 'Structured design', 'Tailored fit', 'Professional styling', 'Dry clean recommended'],
        rating: 4.9,
        reviews: 156
      }
    };
    
    return products[id as keyof typeof products];
  };

  const product = productId ? getProductData(productId) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-fashion-beige/10">
        <Navbar />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-fashion-teal mb-4">Product Not Found</h1>
            <p className="text-fashion-teal/70 mb-8">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-fashion-beige/10">
      <Navbar />
      
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-fashion-beige/30 rounded-lg overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-fashion-teal/60 mb-2">{product.brand}</p>
                <h1 className="text-3xl font-bold text-fashion-teal mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-fashion-teal/70">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Body Type Badge */}
                <div className="mb-4">
                  <span className="text-sm text-fashion-teal/70 mr-2">Perfect for:</span>
                  <Badge className={`${product.bodyTypeColor} text-white`}>
                    {product.bodyType} Body Type
                  </Badge>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-fashion-teal">€{product.price.toFixed(2)}</span>
                  <span className="text-lg text-fashion-teal/50 line-through">€{product.originalPrice.toFixed(2)}</span>
                  <Badge variant="destructive" className="text-xs">
                    {discount}% OFF
                  </Badge>
                </div>

                <p className="text-fashion-teal/80 mb-6">{product.description}</p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-fashion-teal mb-3">Size</h3>
                <div className="flex gap-2 mb-6">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className="w-12 h-12"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500" : ""}`} />
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-fashion-teal">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-fashion-teal/70">
                      <div className="w-2 h-2 bg-fashion-coral rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping & Returns */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center text-fashion-teal/70">
                  <Truck className="h-5 w-5 mr-3 text-fashion-coral" />
                  Free shipping on orders over €200
                </div>
                <div className="flex items-center text-fashion-teal/70">
                  <RotateCcw className="h-5 w-5 mr-3 text-fashion-coral" />
                  30-day return policy
                </div>
                <div className="flex items-center text-fashion-teal/70">
                  <Shield className="h-5 w-5 mr-3 text-fashion-coral" />
                  Secure checkout
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold text-fashion-teal mb-4">Product Details</h2>
            <p className="text-fashion-teal/80 leading-relaxed max-w-4xl">
              {product.longDescription}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
