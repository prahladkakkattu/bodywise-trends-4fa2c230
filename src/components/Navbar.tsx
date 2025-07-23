import { Button } from "@/components/ui/button";
import { Heart, User, Search, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mock user state - in a real app, this would come from authentication context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Sarah");
  return <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      {/* Main header container */}
      <div className="container mx-auto px-6 py-4">
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          {/* Top row: Logo centered with Icons on the right */}
          <div className="flex justify-between items-center mb-4">
            {/* Empty space for balance */}
            <div className="flex-1"></div>
            
            {/* Logo - centered */}
            <div className="flex items-center justify-center flex-1">
              <Link to="/" className="flex items-center">
                <img src="/lovable-uploads/31e65978-e2f8-432f-a950-8587ae4d1309.png" alt="StyleMyFit Logo" className="h-12 w-auto" />
              </Link>
            </div>
            
            {/* Icons - right aligned */}
            <div className="flex items-center space-x-4 flex-1 justify-end">
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-gray-800 hover:text-gray-600 h-8 px-3 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">Welcome, {userName}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>
                      <User className="h-4 w-4 mr-2" />
                      My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      <span className="h-4 w-4 mr-2">🚪</span>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-fashion-teal hover:text-fashion-coral transition-colors duration-200 text-sm font-light tracking-wide uppercase" onClick={() => setIsLoggedIn(true)}>
                    Login
                  </Button>
                  <Button variant="outline" size="sm" className="text-fashion-teal border-fashion-teal hover:bg-fashion-teal hover:text-white transition-colors duration-200 text-sm font-light tracking-wide uppercase">
                    Sign Up
                  </Button>
                </div>
              )}
              
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </div>
          </div>
          
          {/* Bottom row: Menu options spread across full width */}
          <div className="flex justify-between items-center w-full">
            <Link to="/" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase">OUR SOLUTION</Link>
            <Link to="/shop" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase">
              Shop
            </Link>
            <Link to="/solution" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase">
              Body Shape Guide
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase">
              About
            </Link>
            <Link to="/blog" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase">
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile layout - logo centered */}
        <div className="md:hidden">
          <div className="flex justify-center items-center mb-4">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/31e65978-e2f8-432f-a950-8587ae4d1309.png" alt="StyleMyFit Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Mobile menu button and icons */}
          <div className="flex justify-between items-center absolute top-4 left-6 right-6">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 hover:text-gray-600 h-8 w-8">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Find My Style
              </Link>
              <Link to="/shop" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/solution" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Body Shape Guide
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/blog" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-sm font-light tracking-wide uppercase py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {isLoggedIn ? (
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <User className="h-4 w-4" />
                    <span>Welcome, {userName}</span>
                  </div>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="text-fashion-teal hover:text-fashion-coral transition-colors duration-200 text-sm font-light tracking-wide uppercase" onClick={() => { setIsLoggedIn(true); setIsMobileMenuOpen(false); }}>
                      Login
                    </Button>
                    <Button variant="outline" size="sm" className="text-fashion-teal border-fashion-teal hover:bg-fashion-teal hover:text-white transition-colors duration-200 text-sm font-light tracking-wide uppercase" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign Up
                    </Button>
                  </>
                )}
                <Button variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600 h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
                {isLoggedIn && (
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 text-xs" onClick={() => { setIsLoggedIn(false); setIsMobileMenuOpen(false); }}>
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </nav>
        </div>}
    </header>;
};
export default Navbar;