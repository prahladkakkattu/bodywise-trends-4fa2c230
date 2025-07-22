import { useState } from "react";
import { Brain, TrendingUp, Zap, Target, Users, ChartLine } from "lucide-react";
interface HeroBannerCarouselProps {
  onGetStarted: () => void;
  onNoMeasurements: () => void;
}
const HeroBannerCarousel = ({
  onGetStarted,
  onNoMeasurements
}: HeroBannerCarouselProps) => {
  return <section className="relative w-full flex justify-center py-8">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Text - Hover Expandable */}
          <div className="flex flex-col space-y-8 h-full justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-3">
                <Brain className="h-5 w-5 mr-2 text-fashion-coral group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-fashion-teal text-base">AI-Powered Sizing</h3>
              </div>
              <p className="text-sm text-fashion-teal/80 leading-relaxed transition-all duration-300 group-hover:text-fashion-teal">
                Our advanced machine learning algorithms analyze body measurements to provide precise fit recommendations.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-3">
                <Zap className="h-5 w-5 mr-2 text-fashion-coral group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-fashion-teal text-base">Styling Partner</h3>
              </div>
              <p className="text-sm text-fashion-teal/80 leading-relaxed transition-all duration-300 group-hover:text-fashion-teal">
                Make informed fashion choices unique to your body shape.
              </p>
            </div>
          </div>

          {/* Right Side Text - Hover Expandable */}
          <div className="flex flex-col space-y-8 h-full justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-5 w-5 mr-2 text-fashion-coral group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-fashion-teal text-base">Business Growth</h3>
              </div>
              <p className="text-sm text-fashion-teal/80 leading-relaxed transition-all duration-300 group-hover:text-fashion-teal">
                Increase conversion rates and reduce returns with intelligent sizing technology.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-3">
                <Brain className="h-5 w-5 mr-2 text-fashion-coral group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-fashion-teal text-base">Smart Analytics</h3>
              </div>
              <p className="text-sm text-fashion-teal/80 leading-relaxed transition-all duration-300 group-hover:text-fashion-teal">
                Leverage insights to optimize inventory and enhance user experience.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile Feature Cards - Hover Enhanced */}
        <div className="lg:hidden mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* AI-Powered Sizing */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-fashion-coral/10 rounded-lg mr-3 group-hover:bg-fashion-coral/20 transition-colors duration-300">
                    <Brain className="h-5 w-5 text-fashion-coral group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-fashion-teal text-sm">AI-Powered Sizing</h3>
                </div>
                <p className="text-xs text-fashion-teal/80 leading-relaxed group-hover:text-fashion-teal transition-colors duration-300">
                  Advanced algorithms analyze measurements for precise fit recommendations.
                </p>
              </div>
            </div>

            {/* Styling Partner */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-fashion-coral/10 rounded-lg mr-3 group-hover:bg-fashion-coral/20 transition-colors duration-300">
                    <Zap className="h-5 w-5 text-fashion-coral group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-fashion-teal text-sm">Styling Partner</h3>
                </div>
                <p className="text-xs text-fashion-teal/80 leading-relaxed group-hover:text-fashion-teal transition-colors duration-300">
                  Make informed fashion choices unique to your body shape.
                </p>
              </div>
            </div>

            {/* Business Growth */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-fashion-coral/10 rounded-lg mr-3 group-hover:bg-fashion-coral/20 transition-colors duration-300">
                    <TrendingUp className="h-5 w-5 text-fashion-coral group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-fashion-teal text-sm">Business Growth</h3>
                </div>
                <p className="text-xs text-fashion-teal/80 leading-relaxed group-hover:text-fashion-teal transition-colors duration-300">
                  Increase conversions and reduce returns with intelligent sizing.
                </p>
              </div>
            </div>

            {/* Smart Analytics */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-fashion-coral/10 rounded-lg mr-3 group-hover:bg-fashion-coral/20 transition-colors duration-300">
                    <Brain className="h-5 w-5 text-fashion-coral group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-fashion-teal text-sm">Smart Analytics</h3>
                </div>
                <p className="text-xs text-fashion-teal/80 leading-relaxed group-hover:text-fashion-teal transition-colors duration-300">
                  Leverage insights to optimize inventory and enhance user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroBannerCarousel;