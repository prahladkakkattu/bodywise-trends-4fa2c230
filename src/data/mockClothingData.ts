
import { ClothingItem, BodyType } from "@/types";

// Mock product data - using the same products as shown on home page
const clothingData: ClothingItem[] = [
  {
    id: 'black-blazer',
    name: "Classic Black Blazer",
    type: "outerwear",
    imageUrl: "/lovable-uploads/362a7e77-0f9f-4232-85ad-dc4e1a11f5e1.png",
    description: "A timeless classic that elevates any outfit. This structured wool blazer features clean lines and sophisticated detailing.",
    price: 450,
    bodyTypes: ["hourglass", "rectangle", "inverted-triangle"],
    brand: "JuJu"
  },
  {
    id: 'black-dress',
    name: "Belted Black Dress",
    type: "dresses",
    imageUrl: "/lovable-uploads/080741bc-13b9-47c1-8f51-45e655dbfbaf.png",
    description: "A versatile midi dress with a cinched waist that creates a beautiful silhouette. Perfect for both day and evening wear.",
    price: 385,
    bodyTypes: ["hourglass", "apple", "pear"],
    brand: "JuJu"
  },
  {
    id: 'white-dress',
    name: "Elegant White Dress",
    type: "dresses",
    imageUrl: "/lovable-uploads/6593ea9a-91e1-415d-8e1e-7641480ae35e.png",
    description: "A stunning V-neck sleeveless midi dress that creates an elongating silhouette perfect for apple body types.",
    price: 295,
    bodyTypes: ["apple", "rectangle", "hourglass"],
    brand: "JuJu"
  },
  {
    id: 'orange-blazer',
    name: "Orange Blazer Set",
    type: "outerwear",
    imageUrl: "/lovable-uploads/2cd58b40-2fc6-4a4c-8b33-f3c9929017bf.png",
    description: "A striking orange blazer set with matching trousers. The structured design enhances the hourglass silhouette.",
    price: 520,
    bodyTypes: ["hourglass", "rectangle", "inverted-triangle"],
    brand: "JuJu"
  },
  {
    id: "velvet-satin-top",
    name: "VELVET ESME SATIN TOP",
    type: "tops",
    imageUrl: "/lovable-uploads/ab1983e3-e854-4cb7-b63b-59c868e324dc.png",
    description: "Relaxed fit satin top with elegant velvet finish",
    price: 285,
    bodyTypes: ["hourglass", "pear", "rectangle"],
    brand: "JuJu"
  },
  {
    id: "cashmere-jumper",
    name: "CASHMERE JUMPER",
    type: "tops",
    imageUrl: "/lovable-uploads/c40251e8-a434-4b1a-90b1-b7bad31b3e06.png",
    description: "Relaxed fit jumper made of premium cashmere",
    price: 364,
    bodyTypes: ["apple", "inverted-triangle", "rectangle"],
    brand: "JuJu"
  },
  {
    id: "vince-collarless-jacket",
    name: "VINCE COLLARLESS JACKET",
    type: "outerwear",
    imageUrl: "/lovable-uploads/5b7a49a9-cbee-4976-a7fb-49ea06de02de.png",
    description: "Wool and nylon blend collarless jacket",
    price: 660,
    bodyTypes: ["hourglass", "pear", "rectangle", "inverted-triangle"],
    brand: "JuJu"
  },
  {
    id: "studio-nicholson-enna",
    name: "STUDIO NICHOLSON ENNA",
    type: "dresses",
    imageUrl: "/lovable-uploads/64644141-5070-4b59-8e13-671f62edfc7e.png",
    description: "V neckline elegant dress with modern silhouette",
    price: 558,
    bodyTypes: ["hourglass", "apple", "rectangle"],
    brand: "JuJu"
  },
  {
    id: "slim-fit-trousers",
    name: "Slim-Fit Trousers",
    type: "bottoms",
    imageUrl: "/lovable-uploads/8533b7f4-b8a3-426f-9586-957df87bb1cb.png",
    description: "Sophisticated slim-fit trousers for work or evenings",
    price: 95,
    bodyTypes: ["hourglass", "rectangle", "inverted-triangle"],
    brand: "JuJu"
  },
  {
    id: "v-neck-sweater",
    name: "V-Neck Sweater",
    type: "tops",
    imageUrl: "/lovable-uploads/eb7dc452-17a8-4f28-b10d-5d5581fc0d20.png",
    description: "Soft, comfortable V-neck sweater for casual elegance",
    price: 110,
    bodyTypes: ["apple", "inverted-triangle", "rectangle"],
    brand: "JuJu"
  },
  {
    id: "flowy-maxi-skirt",
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
