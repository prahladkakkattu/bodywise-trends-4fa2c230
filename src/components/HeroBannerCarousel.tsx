import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Brain, TrendingUp, Zap, ChevronDown, ChevronUp } from "lucide-react";
interface HeroBannerCarouselProps {
  onGetStarted: () => void;
  onNoMeasurements: () => void;
}
const HeroBannerCarousel = ({
  onGetStarted,
  onNoMeasurements
}: HeroBannerCarouselProps) => {
  const [leftPanel1Open, setLeftPanel1Open] = useState(false);
  const [leftPanel2Open, setLeftPanel2Open] = useState(false);
  const [rightPanel1Open, setRightPanel1Open] = useState(false);
  const [rightPanel2Open, setRightPanel2Open] = useState(false);
  const [mobileDetailsOpen, setMobileDetailsOpen] = useState(false);
  return <section className="relative w-full flex justify-center py-8">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Text - Collapsible */}
          <div className="flex flex-col space-y-8 h-full justify-center">
            <Collapsible open={leftPanel1Open} onOpenChange={setLeftPanel1Open}>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-fashion-coral" />
                    <h3 className="font-semibold text-fashion-teal text-base">AI-Powered Sizing</h3>
                  </div>
                  <CollapsibleTrigger className="p-1 hover:bg-fashion-coral/10 rounded-full transition-colors">
                    {leftPanel1Open ? (
                      <ChevronUp className="h-4 w-4 text-fashion-coral" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-fashion-coral" />
                    )}
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-4">
                  <p className="text-sm text-fashion-teal/80 leading-relaxed">
                    Our advanced machine learning algorithms analyze body measurements to provide precise fit recommendations.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
            
            <Collapsible open={leftPanel2Open} onOpenChange={setLeftPanel2Open}>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-fashion-coral" />
                    <h3 className="font-semibold text-fashion-teal text-base">Styling Partner</h3>
                  </div>
                  <CollapsibleTrigger className="p-1 hover:bg-fashion-coral/10 rounded-full transition-colors">
                    {leftPanel2Open ? (
                      <ChevronUp className="h-4 w-4 text-fashion-coral" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-fashion-coral" />
                    )}
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-4">
                  <p className="text-sm text-fashion-teal/80 leading-relaxed">
                    Make informed fashion choices unique to your body shape.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>

          {/* Right Side Text - Collapsible */}
          <div className="flex flex-col space-y-8 h-full justify-center">
            <Collapsible open={rightPanel1Open} onOpenChange={setRightPanel1Open}>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-fashion-coral" />
                    <h3 className="font-semibold text-fashion-teal text-base">Business Growth</h3>
                  </div>
                  <CollapsibleTrigger className="p-1 hover:bg-fashion-coral/10 rounded-full transition-colors">
                    {rightPanel1Open ? (
                      <ChevronUp className="h-4 w-4 text-fashion-coral" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-fashion-coral" />
                    )}
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-4">
                  <p className="text-sm text-fashion-teal/80 leading-relaxed">
                    Increase conversion rates and reduce returns with intelligent sizing technology.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
            
            <Collapsible open={rightPanel2Open} onOpenChange={setRightPanel2Open}>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-fashion-coral" />
                    <h3 className="font-semibold text-fashion-teal text-base">Smart Analytics</h3>
                  </div>
                  <CollapsibleTrigger className="p-1 hover:bg-fashion-coral/10 rounded-full transition-colors">
                    {rightPanel2Open ? (
                      <ChevronUp className="h-4 w-4 text-fashion-coral" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-fashion-coral" />
                    )}
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-4">
                  <p className="text-sm text-fashion-teal/80 leading-relaxed">
                    Leverage insights to optimize inventory and enhance user experience.
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        </div>
        
        {/* Mobile Feature Cards - Collapsible */}
        <div className="lg:hidden mt-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-fashion-teal mb-2">Key Features</h3>
            <p className="text-sm text-fashion-teal/70 mb-4">AI-powered sizing and styling solutions for perfect fit</p>
          </div>
          <Collapsible open={mobileDetailsOpen} onOpenChange={setMobileDetailsOpen}>
            <div className="flex justify-center mb-4">
              <CollapsibleTrigger className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full shadow-lg border border-fashion-coral/20 hover:bg-white transition-all duration-300">
                <span className="text-sm font-medium text-fashion-teal">
                  {mobileDetailsOpen ? "Show Less" : "Show More"}
                </span>
                {mobileDetailsOpen ? (
                  <ChevronUp className="h-4 w-4 text-fashion-coral" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-fashion-coral" />
                )}
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* AI-Powered Sizing */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-fashion-coral/10 rounded-lg mr-3">
                        <Brain className="h-5 w-5 text-fashion-coral" />
                      </div>
                      <h3 className="font-semibold text-fashion-teal text-sm">AI-Powered Sizing</h3>
                    </div>
                    <p className="text-xs text-fashion-teal/80 leading-relaxed">
                      Advanced algorithms analyze measurements for precise fit recommendations.
                    </p>
                  </div>
                </div>

                {/* Styling Partner */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-fashion-coral/10 rounded-lg mr-3">
                        <Zap className="h-5 w-5 text-fashion-coral" />
                      </div>
                      <h3 className="font-semibold text-fashion-teal text-sm">Styling Partner</h3>
                    </div>
                    <p className="text-xs text-fashion-teal/80 leading-relaxed">
                      Make informed fashion choices unique to your body shape.
                    </p>
                  </div>
                </div>

                {/* Business Growth */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-fashion-coral/10 rounded-lg mr-3">
                        <TrendingUp className="h-5 w-5 text-fashion-coral" />
                      </div>
                      <h3 className="font-semibold text-fashion-teal text-sm">Business Growth</h3>
                    </div>
                    <p className="text-xs text-fashion-teal/80 leading-relaxed">
                      Increase conversions and reduce returns with intelligent sizing.
                    </p>
                  </div>
                </div>

                {/* Smart Analytics */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-fashion-coral/10 rounded-lg mr-3">
                        <Brain className="h-5 w-5 text-fashion-coral" />
                      </div>
                      <h3 className="font-semibold text-fashion-teal text-sm">Smart Analytics</h3>
                    </div>
                    <p className="text-xs text-fashion-teal/80 leading-relaxed">
                      Leverage insights to optimize inventory and enhance user experience.
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>;
};
export default HeroBannerCarousel;