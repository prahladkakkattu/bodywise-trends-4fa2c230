
import { ClothingItem } from "@/types";

export const clothingItems: ClothingItem[] = [
  {
    id: "top-1",
    name: "V-Neck Wrap Blouse",
    type: "tops",
    imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1470&auto=format&fit=crop",
    description: "A flattering wrap blouse that accentuates the waist and creates a balanced silhouette.",
    price: 49.99,
    bodyTypes: ["hourglass", "pear", "apple"],
    brand: "StyleMyFit"
  },
  {
    id: "top-2",
    name: "Structured Peplum Top",
    type: "tops",
    imageUrl: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1470&auto=format&fit=crop",
    description: "A structured top with peplum detail to create definition at the waist.",
    price: 39.99,
    bodyTypes: ["rectangle", "inverted-triangle"],
    brand: "StyleMyFit"
  },
  {
    id: "bottom-1",
    name: "High-Waisted Wide Leg Pants",
    type: "bottoms",
    imageUrl: "https://images.unsplash.com/photo-1509551941705-155e60126e92?q=80&w=1374&auto=format&fit=crop",
    description: "Flattering high-waisted pants with a wide leg to balance proportions.",
    price: 59.99,
    bodyTypes: ["hourglass", "pear", "inverted-triangle"],
    brand: "StyleMyFit"
  },
  {
    id: "bottom-2",
    name: "A-Line Midi Skirt",
    type: "bottoms",
    imageUrl: "https://images.unsplash.com/photo-1583846417306-4026bd47a9ff?q=80&w=1374&auto=format&fit=crop",
    description: "A versatile A-line skirt that flatters the lower body and creates balance.",
    price: 45.99,
    bodyTypes: ["pear", "apple", "inverted-triangle"],
    brand: "StyleMyFit"
  },
  {
    id: "dress-1",
    name: "Minimalist Black Dress",
    type: "dresses",
    imageUrl: "/lovable-uploads/c40251e8-a434-4b1a-90b1-b7bad31b3e06.png",
    description: "An elegant black dress with a distinctive neckline, perfect for any formal occasion.",
    price: 89.99,
    bodyTypes: ["hourglass", "pear", "apple", "rectangle"],
    brand: "StyleMyFit Premium"
  },
  {
    id: "dress-2",
    name: "Fit and Flare Dress",
    type: "dresses",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1446&auto=format&fit=crop",
    description: "A fitted bodice with a flared skirt to create a balanced silhouette.",
    price: 69.99,
    bodyTypes: ["hourglass", "pear", "inverted-triangle"],
    brand: "StyleMyFit"
  },
  {
    id: "outerwear-1",
    name: "Tailored Blazer",
    type: "outerwear",
    imageUrl: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1631&auto=format&fit=crop",
    description: "A structured blazer that adds definition and creates a polished look.",
    price: 89.99,
    bodyTypes: ["rectangle", "apple", "hourglass"],
    brand: "StyleMyFit"
  },
  {
    id: "outerwear-2",
    name: "Belted Trench Coat",
    type: "outerwear",
    imageUrl: "https://images.unsplash.com/photo-1548624313-0396c75e4b21?q=80&w=1473&auto=format&fit=crop",
    description: "A classic trench with a belt to define the waist and create shape.",
    price: 129.99,
    bodyTypes: ["hourglass", "rectangle", "apple"],
    brand: "StyleMyFit"
  },
  {
    id: "accessory-1",
    name: "Statement Belt",
    type: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1624623278313-a930126a11c3?q=80&w=1374&auto=format&fit=crop",
    description: "A versatile belt to cinch the waist and add definition to outfits.",
    price: 29.99,
    bodyTypes: ["rectangle", "apple", "hourglass"],
    brand: "StyleMyFit"
  },
  {
    id: "accessory-2",
    name: "Chunky Necklace",
    type: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1374&auto=format&fit=crop",
    description: "A statement necklace to draw attention upward and balance proportions.",
    price: 34.99,
    bodyTypes: ["pear", "rectangle"],
    brand: "StyleMyFit"
  }
];

export function getRecommendedClothing(bodyType: string): ClothingItem[] {
  return clothingItems.filter(item => item.bodyTypes.includes(bodyType as any));
}
