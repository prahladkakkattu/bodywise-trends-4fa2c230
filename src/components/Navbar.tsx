
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
    <nav className="w-full py-1 bg-fashion-white shadow-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between gap-1 px-4 h-12">
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c48f4d7d-9735-4f09-823d-69d5b0c75576.png" 
              alt="StyleMyFit Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-8 px-3 py-1 text-xs`}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-8 px-3 py-1 text-xs`}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/solution">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-8 px-3 py-1 text-xs`}>
                  Our Solution
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-8 px-3 py-1 text-xs`}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-8 px-3 py-1 text-xs`}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-1 flex-shrink-0">
          <Button variant="ghost" size="sm" asChild className="h-8 px-2 text-xs">
            <Link to="/">Log in</Link>
          </Button>
          
          <Button variant="default" size="sm" asChild className="h-8 px-2 text-xs">
            <Link to="/">Sign up</Link>
          </Button>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild className="text-fashion-teal h-8 w-8">
              <Link to="/">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Favorites</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="text-fashion-teal h-8 w-8">
              <Link to="/">
                <ShoppingBag className="h-4 w-4" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="text-fashion-teal h-8 w-8">
              <Link to="/">
                <User className="h-4 w-4" />
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
