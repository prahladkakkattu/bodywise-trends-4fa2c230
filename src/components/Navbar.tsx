
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      {/* Main header container with reduced padding */}
      <div className="container mx-auto px-6 py-3">
        {/* Logo centered with reduced margin */}
        <div className="flex justify-center items-center mb-3">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/31e65978-e2f8-432f-a950-8587ae4d1309.png" 
              alt="StyleMyFit Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation menu - Desktop with reduced spacing */}
        <nav className="hidden md:block">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center space-x-8 w-full max-w-4xl">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase"
              >
                Find My Style
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase"
              >
                Shop
              </Link>
              <Link 
                to="/solution" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase"
              >
                Body Shape Guide
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase"
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase"
              >
                Contact
              </Link>
            </div>
            
            {/* Icons on the right */}
            <div className="absolute right-6 flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                <User className="h-4 w-4" />
                <span className="sr-only">Account</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                <ShoppingBag className="h-4 w-4" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-between items-center absolute top-3 left-6 right-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-gray-600 h-8 w-8"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find My Style
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/solution" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Body Shape Guide
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                  <User className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
