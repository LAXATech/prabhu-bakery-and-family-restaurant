export type Language = 'en' | 'ta';

export type CategoryType = 'bakery' | 'restaurant';

export type SubCategoryType = 
  | 'all'
  | 'cakes'
  | 'puffs'
  | 'snacks'
  | 'pizzas'
  | 'broasted'
  | 'burgers'
  | 'desserts';

export interface Product {
  id: string;
  name: string;
  nameTa: string;
  price: number;
  category: CategoryType;
  subCategory: SubCategoryType;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isPopular?: boolean;
  description: string;
  descriptionTa: string;
  weightOptions?: string[];
  pieces?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  commentTa: string;
  location: string;
  date: string;
}

export interface PartyPackage {
  id: string;
  name: string;
  nameTa: string;
  price: number;
  guestCount: string;
  guestCountTa: string;
  features: string[];
  featuresTa: string[];
  isPopular?: boolean;
  tagline?: string;
}

export interface CustomCakeOrder {
  flavor: string;
  weight: string;
  referenceImage: string | null;
  deliveryDate: string;
  deliveryTime: string;
  customMessage: string;
  customerName: string;
  customerPhone: string;
}
