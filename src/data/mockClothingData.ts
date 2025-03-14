
import { ClothingItem } from "@/types";

export const clothingItems: ClothingItem[] = [
  {
    id: "top-1",
    name: "Cream Turtleneck Sweater",
    type: "tops",
    imageUrl: "/lovable-uploads/8533b7f4-b8a3-426f-9586-957df87bb1cb.png",
    description: "A comfortable turtleneck sweater in cream that's perfect for layering in colder weather.",
    price: 59.99,
    bodyTypes: ["hourglass", "pear", "apple"],
    brand: "StyleMyFit"
  },
  {
    id: "top-2",
    name: "Black Blouse with Puff Sleeves",
    type: "tops",
    imageUrl: "/lovable-uploads/64644141-5070-4b59-8e13-671f62edfc7e.png",
    description: "An elegant black blouse with stylish puff sleeves for a sophisticated look.",
    price: 49.99,
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
    name: "Black Minimalist Dress",
    type: "dresses",
    imageUrl: "/lovable-uploads/eb7dc452-17a8-4f28-b10d-5d5581fc0d20.png",
    description: "A versatile black dress with a modern minimalist cut, perfect for any occasion.",
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
    name: "Light Gray Minimalist Jacket",
    type: "outerwear",
    imageUrl: "/lovable-uploads/5b7a49a9-cbee-4976-a7fb-49ea06de02de.png",
    description: "A structured minimal jacket in light gray that adds sophistication to any outfit.",
    price: 99.99,
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
