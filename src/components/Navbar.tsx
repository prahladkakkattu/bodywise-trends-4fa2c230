
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LiveDemoDialog from "./LiveDemoDialog";

const Navbar = () => {
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  
  return (
    <nav className="w-full py-6 bg-fashion-white shadow-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/e180d18c-55a7-42a8-ac5e-cb13e7517e1a.png" 
            alt="StyleMyFit Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:inline-flex"
            onClick={() => setShowLiveDemo(true)}
          >
            Live Demo
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">Log in</Link>
          </Button>
          
          <Button variant="default" size="sm" asChild>
            <Link to="/">Sign up</Link>
          </Button>
          
          <div className="flex items-center gap-3 ml-2">
            <Button variant="ghost" size="icon" asChild className="text-fashion-teal">
              <Link to="/">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favorites</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="text-fashion-teal">
              <Link to="/">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="text-fashion-teal">
              <Link to="/">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <LiveDemoDialog open={showLiveDemo} onOpenChange={setShowLiveDemo} />
    </nav>
  );
};

export default Navbar;
