
export type BodyMeasurement = {
  bust: number;
  waist: number;
  hips: number;
  shoulders?: number;
  height?: number;
};

export type BodyType = 'hourglass' | 'pear' | 'apple' | 'rectangle' | 'inverted-triangle' | 'unknown';

export type ClothingType = 'tops' | 'bottoms' | 'dresses' | 'outerwear' | 'accessories';

export type ClothingItem = {
  id: string;
  name: string;
  type: ClothingType;
  imageUrl: string;
  description: string;
  price: number;
  bodyTypes: BodyType[];
  brand: string;
};
