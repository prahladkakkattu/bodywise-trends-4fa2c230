
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-fashion-white shadow-sm fixed top-0 z-50">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/c48f4d7d-9735-4f09-823d-69d5b0c75576.png" 
              alt="StyleMyFit Logo" 
              className="h-24 w-auto"
            />
          </Link>
        </div>
        
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-1 md:gap-4">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/solution">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Our Solution
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
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
    </nav>
  );
};

export default Navbar;
