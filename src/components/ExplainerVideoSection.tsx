import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ExplainerVideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-fashion-beige/10 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fashion-teal mb-8">
              How StyleMyFit Works
            </h2>
            
            {/* Video Thumbnail with Play Button */}
            <div className="relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/3f32d7fe-c6ec-4f68-9b82-6df8a1d6ad3c.png" 
                  alt="StyleMyFit Avatar Customization - Video Thumbnail" 
                  className="w-full h-auto max-h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="h-12 w-12 text-fashion-teal ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Video duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  2:30
                </div>
              </div>
              
              {/* Call to action text */}
              <div className="mt-6">
                <Button 
                  variant="premium" 
                  size="lg" 
                  className="px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => setIsVideoOpen(true)}
                >
                  Watch Demo Video
                  <Play className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Dialog/Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>StyleMyFit Explainer Video</DialogTitle>
            <DialogDescription>
              Learn how StyleMyFit's AI avatar technology works
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative bg-black rounded-lg overflow-hidden">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close video</span>
            </Button>
            
            {/* Video placeholder - replace with actual video when available */}
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-fashion-teal to-fashion-coral">
              <div className="text-center text-white">
                <Play className="h-20 w-20 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Video Coming Soon</h3>
                <p className="text-white/80">
                  Your explainer video will be embedded here
                </p>
              </div>
            </div>
            
            {/* Video would go here when ready */}
            {/* 
            <iframe 
              src="your-video-url" 
              className="w-full aspect-video"
              allowFullScreen
              title="StyleMyFit Explainer Video"
            />
            */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExplainerVideoSection;