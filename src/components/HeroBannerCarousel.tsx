import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Brain, TrendingUp, Zap } from "lucide-react";
interface HeroBannerCarouselProps {
  onGetStarted: () => void;
  onNoMeasurements: () => void;
}
const HeroBannerCarousel = ({
  onGetStarted,
  onNoMeasurements
}: HeroBannerCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [{
    id: 1,
    image: "/lovable-uploads/1b7f90af-79ff-4f76-9a2d-53a33c92090d.png"
  }, {
    id: 2,
    image: "/lovable-uploads/a9633444-15fa-4a60-a0bf-f1dbd3c4ba13.png"
  }, {
    id: 3,
    image: "/lovable-uploads/50996a62-9bed-4360-8cfc-1a8fa101a1d0.png"
  }];

  // Auto-advance slides every 5 seconds using the Embla API
  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [api]);

  // Update currentSlide when carousel changes
  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    onSelect(); // Set initial slide

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };
  return <section className="relative w-full flex justify-center py-12">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Simple header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-fashion-teal mb-2">
            Your Perfect Fit Awaits
          </h2>
          <p className="text-fashion-teal/60 text-sm">
            Discover personalized style with AI-powered recommendations
          </p>
        </div>

        {/* Center Carousel */}
        <div className="w-full max-w-md mx-auto">
          <Carousel className="w-full" opts={{
            loop: true
          }} setApi={setApi}>
            <CarouselContent>
              {banners.map((banner, index) => 
                <CarouselItem key={banner.id}>
                  <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg">
                    <div 
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 hover:scale-105" 
                      style={{
                        backgroundImage: `url(${banner.image})`
                      }} 
                    />
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="left-4 text-white border-fashion-coral/50 shadow-lg bg-fashion-coral/80 hover:bg-fashion-coral" />
            <CarouselNext className="right-4 text-white border-fashion-coral/50 shadow-lg bg-fashion-coral/80 hover:bg-fashion-coral" />
          </Carousel>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {banners.map((_, index) => 
              <button 
                key={index} 
                onClick={() => handleDotClick(index)} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-6 bg-fashion-coral scale-110' 
                    : 'bg-fashion-coral/40 hover:bg-fashion-coral/60'
                }`} 
              />
            )}
          </div>
        </div>

        {/* Minimal feature highlights */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
            <div className="flex items-center gap-2 text-fashion-teal/70">
              <Brain className="h-4 w-4 text-fashion-coral" />
              <span className="text-sm">AI Powered</span>
            </div>
            <div className="flex items-center gap-2 text-fashion-teal/70">
              <Zap className="h-4 w-4 text-fashion-coral" />
              <span className="text-sm">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 text-fashion-teal/70">
              <TrendingUp className="h-4 w-4 text-fashion-coral" />
              <span className="text-sm">Perfect Fit</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroBannerCarousel;