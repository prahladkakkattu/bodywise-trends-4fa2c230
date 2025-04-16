
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/e690e0d9-9542-442b-bb9f-88cb9d82dd1b.png" 
            alt="StyleMyFit Logo" 
            className="h-10 w-auto"
          />
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
