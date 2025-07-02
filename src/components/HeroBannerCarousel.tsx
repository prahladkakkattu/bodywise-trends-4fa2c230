
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
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
    </section>
  );
};

export default HeroBannerCarousel;
