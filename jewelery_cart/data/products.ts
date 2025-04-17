export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  category: 'Necklace' | 'Bangle' | 'Ring';
  goldKaratage: number;
  goldWeight: number;
  gemstoneWeight: number;
  totalPrice: number;
  laborCharges: number;
  designCode: string;
}

export const necklaces: Product[] = [
  {
    id: 'nk1',
    name: 'Traditional Gold Necklace',
    description: 'Traditional 22K gold necklace with gemstone accents',
    price: 2100,
    image: require('../assets/images/necklace1.jpg'),
    category: 'Necklace',
    goldKaratage: 22,
    goldWeight: 15.5,
    gemstoneWeight: 1.0,
    totalPrice: 2100,
    laborCharges: 240,
    designCode: 'NK101'
  },
  {
    id: 'nk2',
    name: 'Diamond Silver Necklace',
    description: 'Modern 42K silver necklace with diamond accents',
    price: 2177,
    image: require('../assets/images/necklace1.jpg'),
    category: 'Necklace',
    goldKaratage: 42,
    goldWeight: 15.6,
    gemstoneWeight: 3.0,
    totalPrice: 2177,
    laborCharges: 111,
    designCode: 'NK102'
  },
  {
    id: 'nk3',
    name: 'Crystal Necklace',
    description: 'Elegant 22K gold necklace with crystal details',
    price: 2100,
    image: require('../assets/images/necklace3.jpg'),
    category: 'Necklace',
    goldKaratage: 22,
    goldWeight: 15.5,
    gemstoneWeight: 1.0,
    totalPrice: 2100,
    laborCharges: 240,
    designCode: 'NK103'
  },
  {
    id: 'nk4',
    name: 'Antique Gold Necklace',
    description: 'Antique style 22K gold necklace with gemstone details',
    price: 2100,
    image: require('../assets/images/necklace3.jpg'),
    category: 'Necklace',
    goldKaratage: 22,
    goldWeight: 15.5,
    gemstoneWeight: 1.0,
    totalPrice: 2100,
    laborCharges: 240,
    designCode: 'NK104'
  }
];

export const products: Product[] = [
  // Necklaces
  {
    id: 'n1',
    name: 'Diamond Solitaire Necklace',
    description: 'Elegant 18K gold necklace with a single diamond pendant',
    price: 3500,
    image: require('../assets/images/necklace-category.jpg'),
    category: 'Necklace',
    goldKaratage: 18,
    goldWeight: 8.5,
    gemstoneWeight: 2.0,
    totalPrice: 3500,
    laborCharges: 300,
    designCode: 'DN-001'
  },
  {
    id: 'n2',
    name: 'Pearl Drop Necklace',
    description: 'Classic 22K gold necklace with pearl pendant',
    price: 2800,
    image: require('../assets/images/necklace-category.jpg'),
    category: 'Necklace',
    goldKaratage: 22,
    goldWeight: 7.2,
    gemstoneWeight: 0.5,
    totalPrice: 2800,
    laborCharges: 250,
    designCode: 'PN-001'
  },
  // Bangles
  {
    id: 'b1',
    name: 'Diamond Bangle',
    description: '18K gold bangle with diamond accents',
    price: 4500,
    image: require('../assets/images/bangle-category.jpg'),
    category: 'Bangle',
    goldKaratage: 18,
    goldWeight: 12.5,
    gemstoneWeight: 3.0,
    totalPrice: 4500,
    laborCharges: 400,
    designCode: 'DB-001'
  },
  {
    id: 'b2',
    name: 'Gold Bangle',
    description: '22K gold bangle with traditional design',
    price: 3200,
    image: require('../assets/images/bangle-category.jpg'),
    category: 'Bangle',
    goldKaratage: 22,
    goldWeight: 10.8,
    gemstoneWeight: 0.0,
    totalPrice: 3200,
    laborCharges: 280,
    designCode: 'GB-001'
  },
  // Rings
  {
    id: 'r1',
    name: 'Diamond Ring',
    description: '18K gold ring with center diamond',
    price: 2500,
    image: require('../assets/images/ring1.jpg'),
    category: 'Ring',
    goldKaratage: 18,
    goldWeight: 5.2,
    gemstoneWeight: 1.5,
    totalPrice: 2500,
    laborCharges: 200,
    designCode: 'DR-001'
  },
  {
    id: 'r2',
    name: 'Gold Ring',
    description: '22K gold ring with traditional design',
    price: 1800,
    image: require('../assets/images/ring3.jpg'),
    category: 'Ring',
    goldKaratage: 22,
    goldWeight: 4.8,
    gemstoneWeight: 0.0,
    totalPrice: 1800,
    laborCharges: 150,
    designCode: 'GR-001'
  }
]; 