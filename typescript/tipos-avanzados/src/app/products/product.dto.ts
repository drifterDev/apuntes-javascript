import { Product } from './products.model';

//Para omitir ciertos atributos
type CreateProductDtoType = Omit<
  Product,
  'id' | 'createdAt' | 'updatedAt' | 'category'
>;

//Elegir cuales atributos utilizar
type CreateProductDtoType2 = Pick<Product, 'color' | 'description'>;

export interface CreateProductDto extends CreateProductDtoType {
  categoryId: string;
}

//Partial pone todos los atributos como opcionales
//name?:string;
export interface UpdateProductDto extends Partial<CreateProductDto> {}

//Hace lo contrario al partial, pone todo como obligatorio
type exampleRequired = Required<Product>;

export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
