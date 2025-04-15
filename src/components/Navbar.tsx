
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col items-start">
            <span className="text-xl font-black tracking-tight text-brand-600">STYLEMYFIT</span>
            <span className="text-sm font-medium tracking-widest text-brand-300 -mt-1 flex items-center">
              FIT
              <svg className="h-3 ml-1" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="2" />
                <line x1="10" y1="0" x2="10" y2="10" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="0" x2="20" y2="10" stroke="currentColor" strokeWidth="2" />
                <line x1="30" y1="0" x2="30" y2="10" stroke="currentColor" strokeWidth="2" />
                <line x1="40" y1="0" x2="40" y2="10" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="0" x2="50" y2="10" stroke="currentColor" strokeWidth="2" />
                <line x1="60" y1="0" x2="60" y2="10" stroke="currentColor" strokeWidth="2" />
                <line x1="70" y1="0" x2="70" y2="10" stroke="currentColor" strokeWidth="2" />
                <line x1="80" y1="0" x2="80" y2="10" stroke="currentColor" strokeWidth="2" />
                <line x1="90" y1="0" x2="90" y2="10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
