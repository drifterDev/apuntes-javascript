import { BaseModel } from '../base.model';

export enum ROLES {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
  SELLER = 'seller',
}

export interface User extends BaseModel {
  userName: string;
  role: ROLES;
}
