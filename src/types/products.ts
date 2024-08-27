export interface Product {
  title: string;
  brand: string;
  unit: string | null;
  price: number;
  imgUrl: string;
  store: string;
}

export interface StoreProducts {
  [storeName: string]: Product[];
}

export enum CounterAction {
  PLUS = '+',
  MINUS = '-',
}
