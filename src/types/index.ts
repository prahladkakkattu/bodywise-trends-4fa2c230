export type BodyMeasurement = {
  bust: number;
  waist: number;
  hips: number;
  shoulders?: number;
  height: number;
  weight: number;
};

export type BodyType = 'hourglass' | 'pear' | 'apple' | 'rectangle' | 'inverted-triangle' | 'unknown';

export type ClothingType = 'tops' | 'dresses' | 'outerwear' | 'accessories' | 'jeans' | 'knitwear' | 'skirts' | 'blouses' | 'trousers';

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
