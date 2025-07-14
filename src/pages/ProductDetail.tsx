
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Star, Truck, Shield, RotateCcw, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import BodyShapeIcon from "@/components/BodyShapeIcon";
import ImageGallery from "@/components/ImageGallery";
import WelcomeDialog from "@/components/WelcomeDialog";
import MeasurementDialog from "@/components/MeasurementDialog";
import BodyShapeChatbot from "@/components/BodyShapeChatbot";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [showMeasurementDialog, setShowMeasurementDialog] = useState(false);
  const [showBodyShapeChatbot, setShowBodyShapeChatbot] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Absolutely love this piece! Perfect fit and great quality.",
      date: "2024-06-01"
    },
    {
      id: 2,
      name: "Emma L.",
      rating: 4,
      comment: "Beautiful design and comfortable to wear. Highly recommend!",
      date: "2024-05-28"
    }
  ]);

  // Scroll to top when component mounts or productId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

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
        images: [
          '/lovable-uploads/362a7e77-0f9f-4232-85ad-dc4e1a11f5e1.png',
          '/lovable-uploads/080741bc-13b9-47c1-8f51-45e655dbfbaf.png',
          '/lovable-uploads/6593ea9a-91e1-415d-8e1e-7641480ae35e.png'
        ],
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
        images: [
          '/lovable-uploads/080741bc-13b9-47c1-8f51-45e655dbfbaf.png',
          '/lovable-uploads/362a7e77-0f9f-4232-85ad-dc4e1a11f5e1.png'
        ],
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
        images: [
          '/lovable-uploads/6593ea9a-91e1-415d-8e1e-7641480ae35e.png',
          '/lovable-uploads/2cd58b40-2fc6-4a4c-8b33-f3c9929017bf.png'
        ],
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
        images: [
          '/lovable-uploads/2cd58b40-2fc6-4a4c-8b33-f3c9929017bf.png',
          '/lovable-uploads/362a7e77-0f9f-4232-85ad-dc4e1a11f5e1.png',
          '/lovable-uploads/080741bc-13b9-47c1-8f51-45e655dbfbaf.png'
        ],
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

  const handleBuyNow = () => {
    window.open("https://www.juju.ie/", "_blank");
  };

  const handleSubmitReview = () => {
    if (userRating > 0 && userReview.trim()) {
      const newReview = {
        id: reviews.length + 1,
        name: "You",
        rating: userRating,
        comment: userReview,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([newReview, ...reviews]);
      setUserRating(0);
      setUserReview("");
    }
  };

  const handleKnowYourBodyShape = () => {
    setShowBodyShapeChatbot(true);
  };

  const handleMeasurementNext = () => {
    setShowMeasurementDialog(false);
    navigate("/?step=measurement");
  };

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
            {/* Product Images */}
            <div className="space-y-4">
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                {/* Title and Subtitle */}
                <h1 className="text-3xl font-bold text-fashion-teal mb-2">{product.name}</h1>
                <p className="text-lg text-fashion-teal/80 mb-4">{product.brand}</p>
                
                {/* Body Type Text */}
                <div className="mb-4">
                  <p className="text-sm text-fashion-teal/70">
                    Perfect for <span className="font-medium text-fashion-coral">{product.bodyType}</span> body shape
                  </p>
                  <button 
                    onClick={handleKnowYourBodyShape}
                    className="text-sm text-fashion-coral hover:text-fashion-coral/80 underline cursor-pointer transition-colors"
                  >
                    Know your bodyshape
                  </button>
                </div>

                <p className="text-fashion-teal/80 mb-6">{product.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="premium" 
                      size="lg" 
                      className="flex-1"
                      onClick={handleBuyNow}
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Buy Now
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You will be redirected to the seller or designer website of this product</p>
                  </TooltipContent>
                </Tooltip>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500" : ""}`} />
                </Button>
              </div>

              {/* Available Sizes */}
              <div className="border-t pt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-fashion-teal mb-2">Available Sizes</h3>
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <Badge key={size} variant="outline" className="px-3 py-1">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Available Colors */}
                <div>
                  <h3 className="text-sm font-medium text-fashion-teal mb-2">Available Colors</h3>
                  <div className="flex gap-2">
                    {['Black', 'Navy', 'Burgundy', 'Olive Green'].map((color) => (
                      <Badge key={color} variant="secondary" className="px-3 py-1">
                        {color}
                      </Badge>
                    ))}
                  </div>
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

          {/* Product Reviews Section */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold text-fashion-teal mb-6">Customer Reviews</h2>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
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

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl font-bold text-fashion-teal">€{product.price.toFixed(2)}</span>
            </div>

            {/* Existing Reviews */}
            <div className="space-y-4 mb-8">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-fashion-teal">{review.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-fashion-teal/60">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-fashion-teal/80">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Add Review Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-fashion-teal">Write a Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Rating Input */}
                <div>
                  <label className="block text-sm font-medium text-fashion-teal mb-2">
                    Your Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setUserRating(rating)}
                        className="p-1"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            rating <= userRating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Comment Input */}
                <div>
                  <label className="block text-sm font-medium text-fashion-teal mb-2">
                    Your Review
                  </label>
                  <Textarea
                    placeholder="Share your thoughts about this product..."
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <Button onClick={handleSubmitReview} disabled={!userRating || !userReview.trim()}>
                  Submit Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <MeasurementDialog 
        open={showMeasurementDialog}
        onOpenChange={setShowMeasurementDialog}
        onNext={handleMeasurementNext}
      />
      
      <BodyShapeChatbot 
        open={showBodyShapeChatbot}
        onClose={() => setShowBodyShapeChatbot(false)}
      />
    </div>
  );
};

export default ProductDetail;
