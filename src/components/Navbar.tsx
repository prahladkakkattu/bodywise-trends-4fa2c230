
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-1 bg-fashion-white shadow-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between px-4 h-18">
        {/* Left side navigation */}
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-fashion-teal hover:text-fashion-coral transition-colors duration-200 text-sm font-medium"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-fashion-teal hover:text-fashion-coral transition-colors duration-200 text-sm font-medium"
          >
            About Us
          </Link>
        </div>
        
        {/* Centered logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/31e65978-e2f8-432f-a950-8587ae4d1309.png" 
              alt="StyleMyFit Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        {/* Right side navigation and actions */}
        <div className="flex items-center gap-8">
          <Link 
            to="/solution" 
            className="text-fashion-teal hover:text-fashion-coral transition-colors duration-200 text-sm font-medium"
          >
            Our Solution
          </Link>
          <Link 
            to="/blog" 
            className="text-fashion-teal hover:text-fashion-coral transition-colors duration-200 text-sm font-medium"
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="text-fashion-teal hover:text-fashion-coral transition-colors duration-200 text-sm font-medium"
          >
            Contact
          </Link>
          
          {/* Action buttons and icons */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild className="h-10 px-3 text-sm">
              <Link to="/">Log in</Link>
            </Button>
            
            <Button variant="default" size="sm" asChild className="h-10 px-3 text-sm">
              <Link to="/">Sign up</Link>
            </Button>
            
            <div className="flex items-center gap-1 ml-2">
              <Button variant="ghost" size="icon" asChild className="text-fashion-teal h-10 w-10">
                <Link to="/">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Favorites</span>
                </Link>
              </Button>
              
              <Button variant="ghost" size="icon" asChild className="text-fashion-teal h-10 w-10">
                <Link to="/">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Link>
              </Button>
              
              <Button variant="ghost" size="icon" asChild className="text-fashion-teal h-10 w-10">
                <Link to="/">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
