
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroBannerCarouselProps {
  onGetStarted: () => void;
  onNoMeasurements: () => void;
}

const HeroBannerCarousel = ({ onGetStarted, onNoMeasurements }: HeroBannerCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      image: "/lovable-uploads/1b7f90af-79ff-4f76-9a2d-53a33c92090d.png",
      title: "Find Your Perfect Fit",
      subtitle: "Discover styles that enhance your unique body shape",
      ctaText: "Get Styled Now",
      ctaAction: onGetStarted,
      overlay: "bg-black/40"
    },
    {
      id: 2,
      image: "/lovable-uploads/a9633444-15fa-4a60-a0bf-f1dbd3c4ba13.png",
      title: "Personalized Style Recommendations",
      subtitle: "No more guesswork - get accurate fit suggestions",
      ctaText: "Find My Style",
      ctaAction: onGetStarted,
      overlay: "bg-black/30"
    },
    {
      id: 3,
      image: "/lovable-uploads/50996a62-9bed-4360-8cfc-1a8fa101a1d0.png",
      title: "Not Sure About Measurements?",
      subtitle: "Use our alternative sizing method to get started",
      ctaText: "Quick Sizing",
      ctaAction: onNoMeasurements,
      overlay: "bg-black/50"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="relative w-full">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={banner.id}>
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${banner.image})` }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 ${banner.overlay}`} />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight animate-fade-in">
                      {banner.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
                      {banner.subtitle}
                    </p>
                    <Button 
                      size="lg" 
                      onClick={banner.ctaAction}
                      className="bg-fashion-coral hover:bg-fashion-coral/90 text-white px-8 py-3 text-lg animate-fade-in"
                    >
                      {banner.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 text-white border-white/30" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 text-white border-white/30" />
      </Carousel>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBannerCarousel;
