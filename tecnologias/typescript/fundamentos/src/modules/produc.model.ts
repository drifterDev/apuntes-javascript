export type Sizes = 'S' | 'M' | 'L';
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
