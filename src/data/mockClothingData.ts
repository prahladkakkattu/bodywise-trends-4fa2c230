
import { ClothingItem, BodyType } from "@/types";
import { v4 as uuidv4 } from 'uuid';

// Mock product data
const clothingData: ClothingItem[] = [
  {
    id: uuidv4(),
    name: "VELVET ESME SATIN TOP",
    type: "tops",
    imageUrl: "/lovable-uploads/ab1983e3-e854-4cb7-b63b-59c868e324dc.png",
    description: "Relaxed fit satin top with elegant velvet finish",
    price: 285,
    bodyTypes: ["hourglass", "pear", "rectangle"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "CASHMERE JUMPER",
    type: "tops",
    imageUrl: "/lovable-uploads/ab1983e3-e854-4cb7-b63b-59c868e324dc.png",
    description: "Relaxed fit jumper made of premium cashmere",
    price: 364,
    bodyTypes: ["apple", "inverted-triangle", "rectangle"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "VINCE COLLARLESS JACKET",
    type: "outerwear",
    imageUrl: "/lovable-uploads/ab1983e3-e854-4cb7-b63b-59c868e324dc.png",
    description: "Wool and nylon blend collarless jacket",
    price: 660,
    bodyTypes: ["hourglass", "pear", "rectangle", "inverted-triangle"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "STUDIO NICHOLSON ENNA",
    type: "dresses",
    imageUrl: "/lovable-uploads/ab1983e3-e854-4cb7-b63b-59c868e324dc.png",
    description: "V neckline elegant dress with modern silhouette",
    price: 558,
    bodyTypes: ["hourglass", "apple", "rectangle"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "Linen Blazer",
    type: "outerwear",
    imageUrl: "/lovable-uploads/5b7a49a9-cbee-4976-a7fb-49ea06de02de.png",
    description: "Lightweight linen blazer for summer occasions",
    price: 180,
    bodyTypes: ["hourglass", "rectangle", "pear"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "Classic Button-Down Shirt",
    type: "tops",
    imageUrl: "/lovable-uploads/c40251e8-a434-4b1a-90b1-b7bad31b3e06.png",
    description: "Versatile cotton button-down shirt for any occasion",
    price: 85,
    bodyTypes: ["apple", "rectangle", "inverted-triangle"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "Wrap Dress",
    type: "dresses",
    imageUrl: "/lovable-uploads/8a30a19d-72a0-45b7-99a7-81535ac84122.png",
    description: "Flattering wrap dress that accentuates your waistline",
    price: 140,
    bodyTypes: ["hourglass", "apple", "pear"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "Slim-Fit Trousers",
    type: "bottoms",
    imageUrl: "/lovable-uploads/8533b7f4-b8a3-426f-9586-957df87bb1cb.png",
    description: "Sophisticated slim-fit trousers for work or evenings",
    price: 95,
    bodyTypes: ["hourglass", "rectangle", "inverted-triangle"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "V-Neck Sweater",
    type: "tops",
    imageUrl: "/lovable-uploads/eb7dc452-17a8-4f28-b10d-5d5581fc0d20.png",
    description: "Soft, comfortable V-neck sweater for casual elegance",
    price: 110,
    bodyTypes: ["apple", "inverted-triangle", "rectangle"],
    brand: "JuJu"
  },
  {
    id: uuidv4(),
    name: "Flowy Maxi Skirt",
    type: "bottoms",
    imageUrl: "/lovable-uploads/64644141-5070-4b59-8e13-671f62edfc7e.png",
    description: "Elegant flowy maxi skirt perfect for summer days",
    price: 120,
    bodyTypes: ["pear", "hourglass", "apple"],
    brand: "JuJu"
  }
];

// Function to get recommended clothing items for a specific body type
export function getRecommendedClothing(bodyType: BodyType): ClothingItem[] {
  return clothingData.filter(item => item.bodyTypes.includes(bodyType));
}

// Function to get all clothing items
export function getAllClothing(): ClothingItem[] {
  return clothingData;
}

// Function to get clothing by type
export function getClothingByType(type: string): ClothingItem[] {
  return clothingData.filter(item => item.type === type);
}

// Function to get clothing by ID
export function getClothingById(id: string): ClothingItem | undefined {
  return clothingData.find(item => item.id === id);
}
