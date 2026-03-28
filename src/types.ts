export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Smart Home' | 'Industrial' | 'Software' | 'Components';
  image: string;
  features: string[];
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}