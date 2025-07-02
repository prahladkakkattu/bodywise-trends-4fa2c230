
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Brain, TrendingUp, Zap } from "lucide-react";

interface HeroBannerCarouselProps {
  onGetStarted: () => void;
  onNoMeasurements: () => void;
}

const HeroBannerCarousel = ({ onGetStarted, onNoMeasurements }: HeroBannerCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      image: "/lovable-uploads/1b7f90af-79ff-4f76-9a2d-53a33c92090d.png",
    },
    {
      id: 2,
      image: "/lovable-uploads/a9633444-15fa-4a60-a0bf-f1dbd3c4ba13.png",
    },
    {
      id: 3,
      image: "/lovable-uploads/50996a62-9bed-4360-8cfc-1a8fa101a1d0.png",
    }
  ];

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

  return (
    <section className="relative w-full flex justify-center py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side Text */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50">
              <div className="flex items-center mb-3">
                <Brain className="h-6 w-6 text-fashion-coral mr-2" />
                <h3 className="font-semibold text-fashion-teal">AI-Powered Sizing</h3>
              </div>
              <p className="text-sm text-fashion-teal/80 leading-relaxed">
                Our advanced machine learning algorithms analyze body measurements to provide precise fit recommendations, revolutionizing how customers shop for fashion online.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50">
              <div className="flex items-center mb-3">
                <Zap className="h-6 w-6 text-fashion-coral mr-2" />
                <h3 className="font-semibold text-fashion-teal">Fashion Technology</h3>
              </div>
              <p className="text-sm text-fashion-teal/80 leading-relaxed">
                Cutting-edge computer vision and data analytics transform traditional fashion retail into a personalized, data-driven experience.
              </p>
            </div>
          </div>

          {/* Center Carousel */}
          <div className="w-full">
            <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent>
                {banners.map((banner, index) => (
                  <CarouselItem key={banner.id}>
                    <div className="relative h-[300px] md:h-[350px] overflow-hidden rounded-lg">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${banner.image})` }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows - Updated with Brick Red color */}
              <CarouselPrevious 
                className="left-4 text-white border-[#a12e1d] shadow-lg" 
                style={{ backgroundColor: 'rgba(161, 46, 29, 0.8)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a12e1d'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(161, 46, 29, 0.8)'}
              />
              <CarouselNext 
                className="right-4 text-white border-[#a12e1d] shadow-lg" 
                style={{ backgroundColor: 'rgba(161, 46, 29, 0.8)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a12e1d'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(161, 46, 29, 0.8)'}
              />
            </Carousel>
            
            {/* Dots Indicator - Updated with Brick Red color */}
            <div className="flex justify-center mt-6 space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'scale-110 shadow-lg' 
                      : 'hover:opacity-70'
                  }`}
                  style={{
                    backgroundColor: index === currentSlide ? '#a12e1d' : 'rgba(161, 46, 29, 0.5)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side Text */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-6 w-6 text-fashion-coral mr-2" />
                <h3 className="font-semibold text-fashion-teal">Business Growth</h3>
              </div>
              <p className="text-sm text-fashion-teal/80 leading-relaxed">
                Increase conversion rates by 35% and reduce returns by 42% with our intelligent sizing technology that ensures perfect fit every time.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50">
              <div className="flex items-center mb-3">
                <Brain className="h-6 w-6 text-fashion-coral mr-2" />
                <h3 className="font-semibold text-fashion-teal">Smart Analytics</h3>
              </div>
              <p className="text-sm text-fashion-teal/80 leading-relaxed">
                Leverage customer data insights and predictive analytics to optimize inventory, enhance user experience, and drive sustainable fashion retail growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerCarousel;
