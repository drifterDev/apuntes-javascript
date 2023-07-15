import axios from 'axios';
import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';
import { productService } from '../models/product-service.model';
import { Product } from '../models/product.model';

export class ProductHttpService implements productService {
  private url: string = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post(this.url, dto);
    return data;
  }
  async findOne(id: number): Promise<Product | undefined> {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
