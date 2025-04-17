import { Product } from '../data/products';

export type RootStackParamList = {
  '(tabs)': undefined;
  'Comparison': undefined;
  'Cart': undefined;
  'CategoryProducts': { 
    category: string; 
    items: Product[];
  };
  'ProductDetail': {
    id: string;
  };
}; 