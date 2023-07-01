import { BaseModel } from '../base.model';
import { Category } from '../categories/categories.model';
export type Sizes = 'S' | 'M' | 'L';
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  category: Category;
}
