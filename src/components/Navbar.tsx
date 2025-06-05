
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
      <div className="container flex items-center justify-between gap-1 px-4 h-18">
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/31e65978-e2f8-432f-a950-8587ae4d1309.png" 
              alt="StyleMyFit Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-10 px-4 py-2 text-sm`}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-10 px-4 py-2 text-sm`}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/solution">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-10 px-4 py-2 text-sm`}>
                  Our Solution
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-10 px-4 py-2 text-sm`}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-10 px-4 py-2 text-sm`}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-1 flex-shrink-0">
          <Button variant="ghost" size="sm" asChild className="h-10 px-3 text-sm">
            <Link to="/">Log in</Link>
          </Button>
          
          <Button variant="default" size="sm" asChild className="h-10 px-3 text-sm">
            <Link to="/">Sign up</Link>
          </Button>
          
          <div className="flex items-center gap-1">
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
    </nav>
  );
};

export default Navbar;
